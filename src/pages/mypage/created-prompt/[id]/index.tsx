import MyPageCreatedPromptDetailTemplate from '@/src/components/templates/mypage/MyPageCreatedPromptDetailTemplate';
import { accessTokenKey } from '@/src/configs/auth';
import { prefetchGetMyPrompt, useGetMyPrompt } from '@/src/fetchers/prompt/my-prompt';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';
import { useEffect } from 'react';

interface MyCreatedPromptDetailPageProps {
	token?: string;
}

const MyCreatedPromptDetailPage: NextPage<MyCreatedPromptDetailPageProps> = ({ token }) => {
	const router = useRouter();
	const { data } = useGetMyPrompt(router.query.id as string, token);

	useEffect(() => {
		if (router.isReady && data?.isError) {
			router.push('/mypage/created-prompt');
		}
	}, [router.isReady]);

	if (data?.isError) {
		return <></>;
	}

	return <MyPageCreatedPromptDetailTemplate data={data!} />;
};

MyCreatedPromptDetailPage.grant = 'user';

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
