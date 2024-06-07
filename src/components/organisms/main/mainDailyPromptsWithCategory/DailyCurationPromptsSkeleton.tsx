import Skeleton from '@/src/components/atoms/skeleton/Skeleton';
import { Avatar, Card } from 'react-daisyui';

const DailyCurationPromptsSkeleton = () => {
	return (
		<div className='flex flex-wrap w-full gap-x-6 gap-y-6'>
			<Card className='w-[576px] p-4 flex flex-row items-center selection:bg-white gap-4 rounded-lg'>
				<Avatar shape='circle' size={4 * 20} className='bg-gray-300 rounded-full animate-pulse' />
				<div className='flex flex-col w-full gap-3 flex-nowrap'>
					<div className='flex justify-between'>
						<Skeleton width={'w-[20%]'} />
						<Skeleton width={'w-[20%]'} />
					</div>
					<Skeleton width={'w-[60%]'} />
				</div>
			</Card>
			<Card className='w-[576px] p-4 flex flex-row items-center selection:bg-white gap-4 rounded-lg'>
				<Avatar shape='circle' size={4 * 20} className='bg-gray-300 rounded-full animate-pulse' />
				<div className='flex flex-col w-full gap-3 flex-nowrap'>
					<div className='flex justify-between'>
						<Skeleton width={'w-[20%]'} />
						<Skeleton width={'w-[20%]'} />
					</div>
					<Skeleton width={'w-[60%]'} />
				</div>
			</Card>
			<Card className='w-[576px] p-4 flex flex-row items-center selection:bg-white gap-4 rounded-lg'>
				<Avatar shape='circle' size={4 * 20} className='bg-gray-300 rounded-full animate-pulse' />
				<div className='flex flex-col w-full gap-3 flex-nowrap'>
					<div className='flex justify-between'>
						<Skeleton width={'w-[20%]'} />
						<Skeleton width={'w-[20%]'} />
					</div>
					<Skeleton width={'w-[60%]'} />
				</div>
			</Card>
			<Card className='w-[576px] p-4 flex flex-row items-center selection:bg-white gap-4 rounded-lg'>
				<Avatar shape='circle' size={4 * 20} className='bg-gray-300 rounded-full animate-pulse' />
				<div className='flex flex-col w-full gap-3 flex-nowrap'>
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

export default DailyCurationPromptsSkeleton;
