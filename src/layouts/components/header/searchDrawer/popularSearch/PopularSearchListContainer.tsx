import Skeleton from '@/src/components/atoms/skeleton/Skeleton';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import PopularSearchList from '@/src/layouts/components/header/searchDrawer/popularSearch/PopularSearchList';
import React from 'react';

const PopularSearchListContainer = () => {
	return (
		<div className='w-[484px] flex-col gap-6 flex'>
			<span className='text-black text-base font-semibold'>🔥인기 검색어</span>
			<AsyncComponentBoundary pendingFallback={<Skeleton />}>
				<PopularSearchList />
			</AsyncComponentBoundary>
		</div>
	);
};

export default PopularSearchListContainer;