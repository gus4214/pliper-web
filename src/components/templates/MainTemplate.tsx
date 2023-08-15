import MainCarefullyPromptContainer from '@/src/components/modules/main/view/MainCarefullyPromptContainer';
import MainHotTopicContainer from '@/src/components/modules/main/view/MainHotTopicContainer';
import MainVisualContainer from '@/src/components/modules/main/view/MainVisualContainer';

const MainTemplate = () => {
	return (
		<div className='flex flex-col items-center'>
			<MainVisualContainer />
			<MainHotTopicContainer />
			<MainCarefullyPromptContainer />
		</div>
	);
};

export default MainTemplate;
