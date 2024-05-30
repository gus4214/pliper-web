import Skeleton from '@/src/components/atoms/skeleton/Skeleton';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import DailyPromptCategoryChips from '@/src/components/organisms/main/mainDailyPromptList/DailyPromptCategoryChips';
import MainDailyPromptList from '@/src/components/organisms/main/mainDailyPromptList/MainDailyPromptList';
import MainDailyPromptListSkeleton from '@/src/components/organisms/main/mainDailyPromptList/MainDailyPromptListSkeleton';
import React from 'react';

interface MainDailyPromptContainerProps {}

const MainDailyPromptContainer: React.FC<MainDailyPromptContainerProps> = () => {
	return (
		<div className='w-full py-[90px] flex flex-col justify-center items-center'>
			<div className='w-[1200px] px-3 flex-col gap-10 flex items-center'>
				<h1 className='text-center text-black text-[28px] font-bold'>일상속에서도 프롬프트로 레벨업!</h1>
				<AsyncComponentBoundary pendingFallback={<Skeleton height='h-8' />}>
					<DailyPromptCategoryChips />
				</AsyncComponentBoundary>
				<AsyncComponentBoundary pendingFallback={<MainDailyPromptListSkeleton />}>
					<MainDailyPromptList />
				</AsyncComponentBoundary>
			</div>
		</div>
	);
};

export default MainDailyPromptContainer;
