import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import React from 'react';

interface MyPromptListContainerProps {
	list: React.ReactNode;
}

const MyPromptListContainer: React.FC<MyPromptListContainerProps> = ({ list }) => {
	return (
		<div className='w-full flex justify-center'>
			<AsyncComponentBoundary>
				<div className='flex flex-wrap gap-4 max-h-[584px] overflow-y-auto'>{list}</div>
			</AsyncComponentBoundary>
		</div>
	);
};

export default MyPromptListContainer;
