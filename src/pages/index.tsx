import MainTemplate from '@/src/components/templates/MainTemplate';
import { prefetchGetCurationMain } from '@/src/fetchers/main';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { Seo } from '@/src/components/modules/@common/seo/Seo';

export default function Home() {
	return (
		<>
			<Seo />
			<MainTemplate />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const queryClient = new QueryClient();
	await prefetchGetCurationMain(queryClient, { dailyCategory: null, jobCategory: null });

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};
