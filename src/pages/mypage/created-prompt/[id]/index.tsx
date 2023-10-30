import MyPageCreatedPromptDetailTemplate from '@/src/components/templates/mypage/MyPageCreatedPromptDetailTemplate';
import RegisterTemplate from '@/src/components/templates/prompt/RegisterTemplate';
import { accessTokenKey } from '@/src/configs/auth';
import { prefetchGetMyPrompt, useGetMyPrompt } from '@/src/fetchers/prompt/my-prompt';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { QueryClient, dehydrate } from 'react-query';

interface MyCreatedPromptDetailPageProps {
	token?: string;
}

const MyCreatedPromptDetailPage: NextPage<MyCreatedPromptDetailPageProps> = ({ token }) => {
	const { query } = useRouter();
	const { data } = useGetMyPrompt(query.id as string, token);

	return <MyPageCreatedPromptDetailTemplate data={data!} />;
};

export default MyCreatedPromptDetailPage;

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
	const queryClient = new QueryClient();
	const token = req.cookies[accessTokenKey] || null;
	await prefetchGetMyPrompt(queryClient, params?.id as string, token);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			token: token,
		},
	};
};
