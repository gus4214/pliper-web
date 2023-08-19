import MainDailyPromptContainer from '@/src/components/modules/main/container/MainDailyPromptContainer';
import MainHotTopicContainer from '@/src/components/modules/main/container/MainHotTopicContainer';
import MainVisualContainer from '@/src/components/modules/main/container/MainVisualContainer';
import MainWorkPromptContainer from '@/src/components/modules/main/container/MainWorkPromptContainer';

const MainTemplate = () => {
	return (
		<div className='flex flex-col items-center'>
			<MainVisualContainer />
			<MainHotTopicContainer />
			<MainWorkPromptContainer />
			<MainDailyPromptContainer />
		</div>
	);
};

export default MainTemplate;
