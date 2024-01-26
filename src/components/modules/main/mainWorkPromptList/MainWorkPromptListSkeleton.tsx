import Skeleton from '@/src/components/atoms/skeleton/Skeleton';
import { Card } from 'react-daisyui';

const MainWorkPromptListSkeleton = () => {
	return (
		<div className='w-full gap-x-6 gap-y-10 flex flex-wrap'>
			<Card className='w-[376px]'>
				<div className='w-full h-[164px] bg-gray-300 animate-pulse rounded-lg' />
				<Card.Body className='px-3 py-4 rounded-bl-lg rounded-br-lg flex flex-col gap-4'>
					<div className='flex flex-col gap-2'>
						<Skeleton width='w-[30%]' />
						<Skeleton width='w-[60%]' />
					</div>
					<div className='w-full flex justify-between'>
						<Skeleton width='w-[10%] h-6' />
						<Skeleton width='w-[20%] h-5' />
					</div>
				</Card.Body>
			</Card>
			<Card className='w-[376px]'>
				<div className='w-full h-[164px] bg-gray-300 animate-pulse rounded-lg' />
				<Card.Body className='px-3 py-4 rounded-bl-lg rounded-br-lg flex flex-col gap-4'>
					<div className='flex flex-col gap-2'>
						<Skeleton width='w-[30%]' />
						<Skeleton width='w-[60%]' />
					</div>
					<div className='w-full flex justify-between'>
						<Skeleton width='w-[10%] h-6' />
						<Skeleton width='w-[20%] h-5' />
					</div>
				</Card.Body>
			</Card>
			<Card className='w-[376px]'>
				<div className='w-full h-[164px] bg-gray-300 animate-pulse rounded-lg' />
				<Card.Body className='px-3 py-4 rounded-bl-lg rounded-br-lg flex flex-col gap-4'>
					<div className='flex flex-col gap-2'>
						<Skeleton width='w-[30%]' />
						<Skeleton width='w-[60%]' />
					</div>
					<div className='w-full flex justify-between'>
						<Skeleton width='w-[10%] h-6' />
						<Skeleton width='w-[20%] h-5' />
					</div>
				</Card.Body>
			</Card>
			<Card className='w-[376px]'>
				<div className='w-full h-[164px] bg-gray-300 animate-pulse rounded-lg' />
				<Card.Body className='px-3 py-4 rounded-bl-lg rounded-br-lg flex flex-col gap-4'>
					<div className='flex flex-col gap-2'>
						<Skeleton width='w-[30%]' />
						<Skeleton width='w-[60%]' />
					</div>
					<div className='w-full flex justify-between'>
						<Skeleton width='w-[10%] h-6' />
						<Skeleton width='w-[20%] h-5' />
					</div>
				</Card.Body>
			</Card>
			<Card className='w-[376px]'>
				<div className='w-full h-[164px] bg-gray-300 animate-pulse rounded-lg' />
				<Card.Body className='px-3 py-4 rounded-bl-lg rounded-br-lg flex flex-col gap-4'>
					<div className='flex flex-col gap-2'>
						<Skeleton width='w-[30%]' />
						<Skeleton width='w-[60%]' />
					</div>
					<div className='w-full flex justify-between'>
						<Skeleton width='w-[10%] h-6' />
						<Skeleton width='w-[20%] h-5' />
					</div>
				</Card.Body>
			</Card>
			<Card className='w-[376px]'>
				<div className='w-full h-[164px] bg-gray-300 animate-pulse rounded-lg' />
				<Card.Body className='px-3 py-4 rounded-bl-lg rounded-br-lg flex flex-col gap-4'>
					<div className='flex flex-col gap-2'>
						<Skeleton width='w-[30%]' />
						<Skeleton width='w-[60%]' />
					</div>
					<div className='w-full flex justify-between'>
						<Skeleton width='w-[10%] h-6' />
						<Skeleton width='w-[20%] h-5' />
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default MainWorkPromptListSkeleton;
