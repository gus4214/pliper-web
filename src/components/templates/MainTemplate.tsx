import MainAiPlatformContainer from '@/src/components/modules/main/mainAiPlatform/MainAiPlatformContainer';
import MainDailyPromptContainer from '@/src/components/modules/main/mainDailyPromptList/MainDailyPromptContainer';
import MainHotTopicContainer from '@/src/components/modules/main/mainHotTopic/MainHotTopicContainer';
import MainVisualContainer from '@/src/components/modules/main/mainVisual/MainVisualContainer';
import MainWorkPromptContainer from '@/src/components/modules/main/mainWorkPromptList/MainWorkPromptContainer';
import { useGetCurationMain } from '@/src/fetchers/main';
import { workCategoryAtom } from '@/src/stores/main';
import { useAtomValue } from 'jotai';

const MainTemplate = () => {
	const { data } = useGetCurationMain({ dailyCategory: null, jobCategory: null });

	return (
		<div className='flex flex-col items-center'>
			<MainVisualContainer bestClip={data?.bestClip || []} />
			<MainHotTopicContainer keywords={data?.keywords || []} />
			<MainWorkPromptContainer />
			<MainDailyPromptContainer />
			<MainAiPlatformContainer />
		</div>
	);
};

export default MainTemplate;
