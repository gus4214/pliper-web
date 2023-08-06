import MainHotTopicContainer from '@/src/components/modules/main/MainHotTopicContainer';
import MainVisualContainer from '@/src/components/modules/main/MainVisualContainer';
import React from 'react';

const MainTemplate = () => {
	return (
		<div className='flex flex-col items-center'>
			<MainVisualContainer />
			<MainHotTopicContainer />
		</div>
	);
};

export default MainTemplate;
