import React from 'react';

const MainBookMarkListSkeleton = () => {
	return (
		<div className='gap-12 flex'>
			<div className='flex flex-col justify-center gap-[18px]'>
				<div className='w-[260px] h-40 relative rounded-tl-lg rounded-tr-[50px] rounded-bl-lg rounded-br-[50px] bg-gray-300 animate-pulse' />
			</div>
			<div className='flex flex-col justify-center gap-[18px]'>
				<div className='w-[260px] h-40 relative rounded-tl-lg rounded-tr-[50px] rounded-bl-lg rounded-br-[50px] bg-gray-300 animate-pulse' />
			</div>
			<div className='flex flex-col justify-center gap-[18px]'>
				<div className='w-[260px] h-40 relative rounded-tl-lg rounded-tr-[50px] rounded-bl-lg rounded-br-[50px] bg-gray-300 animate-pulse' />
			</div>
			<div className='flex flex-col justify-center gap-[18px]'>
				<div className='w-[260px] h-40 relative rounded-tl-lg rounded-tr-[50px] rounded-bl-lg rounded-br-[50px] bg-gray-300 animate-pulse' />
			</div>
		</div>
	);
};

export default MainBookMarkListSkeleton;
