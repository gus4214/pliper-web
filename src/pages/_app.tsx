import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import MainLayout from '@/src/layouts/MainLayout';
import { NextPage } from 'next';
import { AuthProvider } from '@/src/contexts/authContext';
import { useAppToast } from '@/src/hooks/toast';
import AppToast from '@/src/components/atoms/toast/AppToast';
import mixpanel from 'mixpanel-browser';
import { useRouter } from 'next/router';
import { PAGE_VIEW } from '@/src/configs/mixpanel';
import BlankLayout from '@/src/layouts/BlankLayout';
import { GrantProvider } from '@/src/contexts/grantContext';
import { ReactQueryDevtools } from 'react-query/devtools';

interface MyAppProps extends AppProps {
	Component: NextPage;
}

mixpanel.init('d335406e77e40117220463579c75ee5f', { debug: process.env.NODE_ENV !== 'production', persistence: 'localStorage' });

const ComponentGuard: React.FC<MyAppProps> = ({ Component, pageProps }: MyAppProps) => {
	if (Component?.layout === 'blank') {
		return (
			<BlankLayout>
				<Component {...pageProps} />
			</BlankLayout>
		);
	}
	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	);
};

export default function App(props: MyAppProps) {
	const { Component, pageProps } = props;
	const router = useRouter();
	const { toast, closeToast } = useAppToast();
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						retry: false,
						suspense: true,
					},
				},
			})
	);

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			mixpanel.track(PAGE_VIEW, { page: url });
		};

		router.events.on('routeChangeComplete', handleRouteChange);
		router.events.on('hashChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
			router.events.off('hashChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<title>Pliper Web</title>
				<meta name='description' content='pliper' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon/favicon.ico' />
			</Head>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<AuthProvider>
						<GrantProvider pageGrantType={Component.grant}>
							<ComponentGuard {...props} />
						</GrantProvider>
						<ReactQueryDevtools initialIsOpen />
						<AppToast {...toast} onClose={closeToast} />
					</AuthProvider>
				</Hydrate>
			</QueryClientProvider>
		</>
	);
}
