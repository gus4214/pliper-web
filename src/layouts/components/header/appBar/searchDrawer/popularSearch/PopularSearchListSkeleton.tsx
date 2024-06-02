import Skeleton from '@/src/components/atoms/skeleton/Skeleton';
import React from 'react';

const PopularSearchListSkeleton = () => {
	return (
		<div className='flex flex-col justify-start items-start gap-3'>
			<Skeleton />
			<Skeleton />
		</div>
	);
};

export default PopularSearchListSkeleton;
