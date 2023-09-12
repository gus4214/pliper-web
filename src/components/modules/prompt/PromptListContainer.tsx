import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import PromptList from '@/src/components/modules/prompt/PromptList';
import React from 'react';

const PromptListContainer = () => {
	return (
		<div className='w-[944px]'>
			<AsyncComponentBoundary>
				<PromptList />
			</AsyncComponentBoundary>
		</div>
	);
};

export default PromptListContainer;
