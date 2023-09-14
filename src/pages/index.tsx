import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import MainTemplate from '@/src/components/templates/MainTemplate';
import { prefetchGetCurationMain } from '@/src/fetchers/main';
import { GetServerSideProps } from 'next';
import { QueryClient, dehydrate } from 'react-query';

export default function Home() {
	return (
		<AsyncComponentBoundary>
			<MainTemplate />
		</AsyncComponentBoundary>
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
