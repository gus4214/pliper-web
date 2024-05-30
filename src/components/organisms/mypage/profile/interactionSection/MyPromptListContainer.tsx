import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import MyPromptListSkeleton from '@/src/components/organisms/mypage/profile/interactionSection/MyPromptListSkeleton';
import React from 'react';

interface MyPromptListContainerProps {
	list: React.ReactNode;
}

const MyPromptListContainer: React.FC<MyPromptListContainerProps> = ({ list }) => {
	return (
		<div className='w-full flex justify-center'>
			<AsyncComponentBoundary pendingFallback={<MyPromptListSkeleton />}>
				<div className='w-full flex flex-wrap gap-4 justify-start'>{list}</div>
			</AsyncComponentBoundary>
		</div>
	);
};

export default MyPromptListContainer;
