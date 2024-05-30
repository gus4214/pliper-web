import React, { FC } from 'react';

interface MainBookMarkListSkeletonProps {
	count: number;
}

const MainBookMarkListSkeleton: FC<MainBookMarkListSkeletonProps> = ({ count }) => {
	return (
		<div className='gap-12 flex'>
			{new Array(count).fill(0).map((_,i) => (
				<div key={i} className='flex flex-col justify-center gap-[18px]'>
					<div className='w-[260px] h-40 relative rounded-tl-lg rounded-tr-[50px] rounded-bl-lg rounded-br-[50px] bg-gray-300 animate-pulse' />
				</div>
			))}
		</div>
	);
};

export default MainBookMarkListSkeleton;
