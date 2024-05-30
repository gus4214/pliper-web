import React, { FC } from 'react';

interface MainBookMarksSkeletonProps {
	count: number;
}

const MainBookMarksSkeleton: FC<MainBookMarksSkeletonProps> = ({ count }) => {
	return (
		<div className='flex gap-12'>
			{new Array(count).fill(0).map((_, i) => (
				<div key={i} className='flex flex-col justify-center gap-[18px]'>
					<div className='w-[260px] h-40 relative rounded-tl-lg rounded-tr-[50px] rounded-bl-lg rounded-br-[50px] bg-gray-300 animate-pulse' />
				</div>
			))}
		</div>
	);
};

export default MainBookMarksSkeleton;
