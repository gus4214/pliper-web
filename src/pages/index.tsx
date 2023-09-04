import MainTemplate from '@/src/components/templates/MainTemplate';
import { prefetchGetCurationMain } from '@/src/fetchers/main';
import { GetServerSideProps } from 'next';
import { QueryClient, dehydrate } from 'react-query';

export default function Home() {
	return (
		<>
			<MainTemplate />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const queryClient = new QueryClient();
	await prefetchGetCurationMain(queryClient);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};
