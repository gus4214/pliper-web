import MainAiPlatformContainer from '@/src/components/modules/main/container/MainAiPlatformContainer';
import MainDailyPromptContainer from '@/src/components/modules/main/container/MainDailyPromptContainer';
import MainHotTopicContainer from '@/src/components/modules/main/container/MainHotTopicContainer';
import MainVisualContainer from '@/src/components/modules/main/container/MainVisualContainer';
import MainWorkPromptContainer from '@/src/components/modules/main/container/MainWorkPromptContainer';
import { useGetCurationMain } from '@/src/fetchers/main';
import { workCategoryAtom } from '@/src/stores/main';
import { useAtomValue } from 'jotai';

const MainTemplate = () => {
	const { data } = useGetCurationMain({ dailyCategory: null, jobCategory: null });

	return (
		<div className='flex flex-col items-center'>
			<MainVisualContainer bestClip={data?.bestClip || []} />
			<MainHotTopicContainer keywords={data?.keywords || []} />
			<MainWorkPromptContainer bestWeekJob={data?.bestWeekJob || []} />
			<MainDailyPromptContainer bestWeekDaily={data?.bestWeekDaily || []} />
			<MainAiPlatformContainer />
		</div>
	);
};

export default MainTemplate;
