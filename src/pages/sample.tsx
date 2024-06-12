import Component from '@/src/components/Component';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import BookMarkPromptsSkeleton from '@/src/components/organisms/main/curations/bookmark/BookMarkPromptsSkeleton';
import { prefetchGetCurationMain } from '@/src/fetchers/main';
import { GetServerSideProps } from 'next';
import { QueryClient, dehydrate } from 'react-query';

interface MainPageProps {}

export default function SamplePage(posts: any) {
	return (
		<>
			{/* <AsyncComponentBoundary pendingFallback={<BookMarkPromptsSkeleton count={3} />}> */}
			<Component />
			{/* </AsyncComponentBoundary> */}
		</>
	);
}

SamplePage.layout = 'blank';

// export const getServerSideProps: GetServerSideProps<MainPageProps> = async ({ query }) => {
// 	const queryClient = new QueryClient();
// 	await prefetchGetCurationMain(queryClient, { dailyCategory: null, jobCategory: null });

// 	return {
// 		props: {
// 			dehydratedState: dehydrate(queryClient),
// 		},
// 	};
// };
