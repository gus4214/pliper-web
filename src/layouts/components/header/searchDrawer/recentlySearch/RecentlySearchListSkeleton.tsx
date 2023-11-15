import Skeleton from '@/src/components/atoms/skeleton/Skeleton';
import React from 'react';

const RecentlySearchListSkeleton = () => {
	return (
		<>
			<div className='w-full justify-between items-center gap-6 flex'>
				<div className='text-black text-base font-semibold'>최근 검색어</div>
			</div>
			<div className='flex-col justify-start items-start gap-3 flex'>
				<Skeleton />
				<Skeleton />
			</div>
		</>
	);
};

export default RecentlySearchListSkeleton;
