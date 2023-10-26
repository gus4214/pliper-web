import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import React from 'react';

interface MyPromptListContainerProps {
	list: React.ReactNode;
}

const MyPromptListContainer: React.FC<MyPromptListContainerProps> = ({ list }) => {
	return (
		<div className='w-full flex justify-center'>
			<AsyncComponentBoundary>
				<div className='flex gap-4 flex-wrap w-[944px]'>{list}</div>
			</AsyncComponentBoundary>
		</div>
	);
};

export default MyPromptListContainer;
