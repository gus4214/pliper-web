import Skeleton from '@/src/components/atoms/skeleton/Skeleton';
import { Card } from 'react-daisyui';

const WorkCurationPromptsSkeleton = () => {
	return (
		<div className='flex flex-wrap w-full gap-x-6 gap-y-10'>
			<Card className='w-[376px]'>
				<div className='w-full h-[164px] bg-gray-300 animate-pulse rounded-lg' />
				<Card.Body className='flex flex-col gap-4 px-3 py-4 rounded-bl-lg rounded-br-lg'>
					<div className='flex flex-col gap-2'>
						<Skeleton width='w-[30%]' />
						<Skeleton width='w-[60%]' />
					</div>
					<div className='flex justify-between w-full'>
						<Skeleton width='w-[10%] h-6' />
						<Skeleton width='w-[20%] h-5' />
					</div>
				</Card.Body>
			</Card>
			<Card className='w-[376px]'>
				<div className='w-full h-[164px] bg-gray-300 animate-pulse rounded-lg' />
				<Card.Body className='flex flex-col gap-4 px-3 py-4 rounded-bl-lg rounded-br-lg'>
					<div className='flex flex-col gap-2'>
						<Skeleton width='w-[30%]' />
						<Skeleton width='w-[60%]' />
					</div>
					<div className='flex justify-between w-full'>
						<Skeleton width='w-[10%] h-6' />
						<Skeleton width='w-[20%] h-5' />
					</div>
				</Card.Body>
			</Card>
			<Card className='w-[376px]'>
				<div className='w-full h-[164px] bg-gray-300 animate-pulse rounded-lg' />
				<Card.Body className='flex flex-col gap-4 px-3 py-4 rounded-bl-lg rounded-br-lg'>
					<div className='flex flex-col gap-2'>
						<Skeleton width='w-[30%]' />
						<Skeleton width='w-[60%]' />
					</div>
					<div className='flex justify-between w-full'>
						<Skeleton width='w-[10%] h-6' />
						<Skeleton width='w-[20%] h-5' />
					</div>
				</Card.Body>
			</Card>
			<Card className='w-[376px]'>
				<div className='w-full h-[164px] bg-gray-300 animate-pulse rounded-lg' />
				<Card.Body className='flex flex-col gap-4 px-3 py-4 rounded-bl-lg rounded-br-lg'>
					<div className='flex flex-col gap-2'>
						<Skeleton width='w-[30%]' />
						<Skeleton width='w-[60%]' />
					</div>
					<div className='flex justify-between w-full'>
						<Skeleton width='w-[10%] h-6' />
						<Skeleton width='w-[20%] h-5' />
					</div>
				</Card.Body>
			</Card>
			<Card className='w-[376px]'>
				<div className='w-full h-[164px] bg-gray-300 animate-pulse rounded-lg' />
				<Card.Body className='flex flex-col gap-4 px-3 py-4 rounded-bl-lg rounded-br-lg'>
					<div className='flex flex-col gap-2'>
						<Skeleton width='w-[30%]' />
						<Skeleton width='w-[60%]' />
					</div>
					<div className='flex justify-between w-full'>
						<Skeleton width='w-[10%] h-6' />
						<Skeleton width='w-[20%] h-5' />
					</div>
				</Card.Body>
			</Card>
			<Card className='w-[376px]'>
				<div className='w-full h-[164px] bg-gray-300 animate-pulse rounded-lg' />
				<Card.Body className='flex flex-col gap-4 px-3 py-4 rounded-bl-lg rounded-br-lg'>
					<div className='flex flex-col gap-2'>
						<Skeleton width='w-[30%]' />
						<Skeleton width='w-[60%]' />
					</div>
					<div className='flex justify-between w-full'>
						<Skeleton width='w-[10%] h-6' />
						<Skeleton width='w-[20%] h-5' />
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default WorkCurationPromptsSkeleton;
