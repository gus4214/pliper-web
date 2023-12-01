import MainTemplate from '@/src/components/templates/MainTemplate';
import { prefetchGetCurationMain } from '@/src/fetchers/main';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { Seo } from '@/src/components/modules/@common/seo/Seo';

interface MainPageProps {
	mainImage: string;
}

export default function Home({ mainImage }: MainPageProps) {
	return (
		<>
			<Seo />
			<MainTemplate mainImage={mainImage} />
		</>
	);
}

export const getServerSideProps: GetServerSideProps<MainPageProps> = async ({ query }) => {
	const queryClient = new QueryClient();
	await prefetchGetCurationMain(queryClient, { dailyCategory: null, jobCategory: null });
	const number = Math.floor(Math.random() * 3) + 1;

	return {
		props: {
			mainImage: `/images/main/mainVis-${number}.webp`,
			dehydratedState: dehydrate(queryClient),
		},
	};
};
