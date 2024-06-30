import Skeleton from '@/src/components/atoms/skeleton/Skeleton';

const PromptMenuSkeleton = () => {
	return (
		<>
			<div className='flex flex-col gap-8 px-4 w-44'>
				<div className='flex flex-col gap-6'>
					<h1 className='text-xs font-bold text-start text-neutral-800'>페르소나</h1>
					<div className='flex flex-col items-start justify-center gap-2 pl-4 border-l border-neutral-200'>
						<Skeleton width='w-[40%]' height='h-8' />
						<Skeleton width='w-[40%]' height='h-8' />
					</div>
				</div>
				<div className='w-[140px] flex flex-col justify-start items-start gap-6'>
					<h1 className='text-xs font-bold text-center text-neutral-800'>플랫폼</h1>
					<div className='flex flex-col gap-4 py-2 pl-4 border-l border-teal-200'>
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

export default PromptMenuSkeleton;
