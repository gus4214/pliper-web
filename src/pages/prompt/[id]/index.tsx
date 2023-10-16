import PromptDetailTemplate from '@/src/components/templates/prompt/PromptDetailTemplate';
import { accessTokenKey } from '@/src/configs/auth';
import { prefetchGetPrompt } from '@/src/fetchers/prompt';
import { GetServerSideProps, NextPage } from 'next';
import { QueryClient, dehydrate } from 'react-query';

interface PromptDetailPageProps {
	token?: string;
}

const PromptDetailPage: NextPage<PromptDetailPageProps> = ({ token }) => {
	return <PromptDetailTemplate token={token} />;
};

export default PromptDetailPage;

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
	const queryClient = new QueryClient();
	const token = req.cookies[accessTokenKey] || null;
	await prefetchGetPrompt(queryClient, params?.id as string, token);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			token: token,
		},
	};
};
