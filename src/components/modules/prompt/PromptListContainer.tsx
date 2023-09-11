import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import PromptList from '@/src/components/modules/prompt/PromptList';
import React from 'react';

const PromptListContainer = () => {
	return (
		<AsyncComponentBoundary>
			<PromptList />
		</AsyncComponentBoundary>
	);
};

export default PromptListContainer;
