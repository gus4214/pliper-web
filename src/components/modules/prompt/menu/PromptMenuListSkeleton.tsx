import Skeleton from '@/src/components/atoms/skeleton/Skeleton';
import React from 'react';

const PromptMenuListSkeleton = () => {
	return (
		<>
			<div className='w-44 px-4 flex-col gap-8 flex'>
				<div className='flex-col gap-6 flex'>
					<h1 className='text-start text-neutral-800 text-xs font-bold'>페르소나</h1>
					<div className='pl-4 border-l border-neutral-200 flex-col justify-center items-start gap-2 flex'>
						<Skeleton width='w-[40%]' height='h-8' />
						<Skeleton width='w-[40%]' height='h-8' />
					</div>
				</div>
				<div className='w-[140px] flex flex-col justify-start items-start gap-6'>
					<h1 className='text-center text-neutral-800 text-xs font-bold'>플랫폼</h1>
					<div className='pl-4 py-2 flex-col gap-4 flex border-l border-teal-200'>
						<Skeleton width='w-12' height='h-4' />
						<Skeleton width='w-12' height='h-4' />
						<Skeleton width='w-12' height='h-4' />
						<Skeleton width='w-12' height='h-4' />
					</div>
				</div>
			</div>
		</>
	);
};

export default PromptMenuListSkeleton;
