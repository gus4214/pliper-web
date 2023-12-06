import Head from 'next/head';
import { FC } from 'react';
import { useRouter } from 'next/router';
import { addHttpsPrefix } from '@/src/utils/utils';

const webHost = process.env.NEXT_PUBLIC_WEB;
const titleTemplate = (title: string) => `플리퍼 | ${title}`;

interface SeoProps {
	title?: string;
	description?: string;
	imageUrl?: string;
}

const defaultSeoProps = {
	title: '플리퍼 | 하루를 더욱 생산적으로 만들어주는 프롬프트(Prompt) 템플릿 플랫폼',
	description:
		'내가 원하는 결과를 위한 GPT 프롬프트(Prompt) 여기 다 모았습니다. 플리퍼를 통해 ChatGPT, 뤼튼 사용 시 사용자의 업무 능력 향상을 도와주는 세컨드 브레인 역할로 사용해보세요!',
	imageUrl: '/images/og_default.png',
} as SeoProps;

/**
 * SEO를 위한 메타 태그들을 설정하는 함수
 * @param title 페이지 제목
 * @param description 페이지 내용
 * @param imageUrl 이미지
 */
export const Seo: FC<SeoProps> = ({ title, description = defaultSeoProps.description, imageUrl }) => {
	const router = useRouter();
	return (
		<Head>
			<title>{title ? titleTemplate(title) : defaultSeoProps.title}</title>
			<link rel='canonical' href={webHost + router.asPath} />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<meta name='robots' content='index,follow' />
			<meta name='description' content={description} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:site' content='@site' />
			<meta name='twitter:creator' content='@handle' />

			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:url' content={webHost + router.asPath} />
			<meta property='og:site_name' content='플리퍼' />
			<meta property='og:image' content={imageUrl ? addHttpsPrefix(imageUrl) : defaultSeoProps.imageUrl} />
			<meta property='og:type' content='website' />
			<meta property='og:locale' content='ko_KR' />

			<meta property='twitter:title' content={title} />
			<meta property='twitter:description' content={description} />
			<meta property='twitter:image' content={imageUrl ? addHttpsPrefix(imageUrl) : defaultSeoProps.imageUrl} />
		</Head>
	);
};
