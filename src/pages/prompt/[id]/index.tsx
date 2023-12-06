import PromptDetailTemplate from '@/src/components/templates/prompt/PromptDetailTemplate';
import { accessTokenKey } from '@/src/configs/auth';
import { prefetchGetPrompt, useGetPrompt } from '@/src/fetchers/prompt';
import { GetServerSideProps, NextPage } from 'next';
import { QueryClient, dehydrate } from 'react-query';
import { Seo } from '@/src/components/modules/@common/seo/Seo';
import { useRouter } from 'next/router';

interface PromptDetailPageProps {
	token?: string;
}

const PromptDetailPage: NextPage<PromptDetailPageProps> = ({ token }) => {
	const { query } = useRouter();
	const { data } = useGetPrompt(query.id as string, token);

	return (
		<>
			<Seo title={data?.title} description={'프롬프트 - ' + data?.description} imageUrl={data?.imageUrl} />
			<PromptDetailTemplate prompt={data!} />
		</>
	);
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
