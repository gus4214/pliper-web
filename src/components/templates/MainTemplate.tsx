import FloatButtonGroup from '@/src/components/molecules/floatButton/FloatButtonGroup';
import MainAiPlatformContainer from '@/src/components/organisms/main/mainAiPlatform/MainAiPlatformContainer';
import MainDailyPromptContainer from '@/src/components/organisms/main/mainDailyPromptList/MainDailyPromptContainer';
import MainHotTopicContainer from '@/src/components/organisms/main/mainHotTopic/MainHotTopicContainer';
import MainVisualContainer from '@/src/components/organisms/main/mainVisual/MainVisualContainer';
import MainWorkPromptContainer from '@/src/components/organisms/main/mainWorkPromptList/MainWorkPromptContainer';
import { useGetCurationMain } from '@/src/fetchers/main';
import { FC } from 'react';

interface MainTemplateProps {
	mainImage: string;
}

const MainTemplate: FC<MainTemplateProps> = ({ mainImage }) => {
	const { data } = useGetCurationMain({ dailyCategory: null, jobCategory: null });

	return (
		<div className='relative flex flex-col items-center'>
			<FloatButtonGroup className='top-[353px] mr-[-656px]' />
			<MainVisualContainer bestClip={data?.bestClip || []} mainImage={mainImage} />
			<MainHotTopicContainer keywords={data?.keywords || []} />
			<MainWorkPromptContainer />
			<MainDailyPromptContainer />
			<MainAiPlatformContainer />
		</div>
	);
};

export default MainTemplate;
