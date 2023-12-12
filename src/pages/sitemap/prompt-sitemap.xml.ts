import { GetServerSideProps } from 'next';
import { ISitemapField, getServerSideSitemapLegacy } from 'next-sitemap';
import { getPromptsApi } from '@/src/fetchers/prompt';

const webHost = process.env.NEXT_PUBLIC_WEB;
export const getServerSideProps: GetServerSideProps = async (context) => {
	const data = await getPromptsApi({ page: 1, limit: 50 });
	const sitemapFields: ISitemapField[] = data.prompts.map((prompt) => {
		return {
			loc: `${webHost}/prompt/${prompt.promptId}`, // 페이지 경로
			lastmod: new Date().toISOString(), // 최근변경일자
			 changefreq: 'daily', // 페이지 주소 변경 빈도 (검색엔진에 제공됨) - always, daily, hourly, monthly, never, weekly, yearly 중 택 1
			// priority: 1, // 페이지 주소 우선순위 (검색엔진에 제공됨, 우선순위가 높은 순서대로 크롤링함)
		};
	});

	return getServerSideSitemapLegacy(context, sitemapFields);
};

export default function Sitemap() {}
