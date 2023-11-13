import Skeleton from '@/src/components/atoms/skeleton/Skeleton';
import React from 'react';
import { Avatar, Card } from 'react-daisyui';

const MainDailyPromptListSkeleton = () => {
	return (
		<div className='w-full gap-x-6 gap-y-6 flex flex-wrap'>
			<Card className='w-[576px] p-4 flex flex-row items-center selection:bg-white gap-4 rounded-lg'>
				<Avatar shape='circle' size={4 * 20} className='bg-gray-300 animate-pulse rounded-full' />
				<div className='flex flex-col gap-3 w-full flex-nowrap'>
					<div className='flex justify-between'>
						<Skeleton width={'w-[20%]'} />
						<Skeleton width={'w-[20%]'} />
					</div>
					<Skeleton width={'w-[60%]'} />
				</div>
			</Card>
			<Card className='w-[576px] p-4 flex flex-row items-center selection:bg-white gap-4 rounded-lg'>
				<Avatar shape='circle' size={4 * 20} className='bg-gray-300 animate-pulse rounded-full' />
				<div className='flex flex-col gap-3 w-full flex-nowrap'>
					<div className='flex justify-between'>
						<Skeleton width={'w-[20%]'} />
						<Skeleton width={'w-[20%]'} />
					</div>
					<Skeleton width={'w-[60%]'} />
				</div>
			</Card>
			<Card className='w-[576px] p-4 flex flex-row items-center selection:bg-white gap-4 rounded-lg'>
				<Avatar shape='circle' size={4 * 20} className='bg-gray-300 animate-pulse rounded-full' />
				<div className='flex flex-col gap-3 w-full flex-nowrap'>
					<div className='flex justify-between'>
						<Skeleton width={'w-[20%]'} />
						<Skeleton width={'w-[20%]'} />
					</div>
					<Skeleton width={'w-[60%]'} />
				</div>
			</Card>
			<Card className='w-[576px] p-4 flex flex-row items-center selection:bg-white gap-4 rounded-lg'>
				<Avatar shape='circle' size={4 * 20} className='bg-gray-300 animate-pulse rounded-full' />
				<div className='flex flex-col gap-3 w-full flex-nowrap'>
					<div className='flex justify-between'>
						<Skeleton width={'w-[20%]'} />
						<Skeleton width={'w-[20%]'} />
					</div>
					<Skeleton width={'w-[60%]'} />
				</div>
			</Card>
		</div>
	);
};

export default MainDailyPromptListSkeleton;
