import Skeleton from '@/src/components/atoms/skeleton/Skeleton';

const PromptItemSkeleton = () => {
	return (
		<div className='w-[944px] h-[129.5px] pl-4 pr-6 py-4 bg-opacity-5 rounded-2xl border border-neutral-200 justify-start items-center gap-4 flex'>
			<div className='w-20 py-1.5 bg-white rounded flex-col justify-center items-center gap-2 flex'>
				<Skeleton width={'w-[30%]'} height='h-[13px]' />
				<span className='text-center text-neutral-200 text-[13px] font-normal'>/</span>
				<Skeleton width={'w-[30%]'} height='h-[13px]' />
			</div>
			<div className='pl-4 items-start flex w-full flex-col gap-4'>
				<Skeleton width={'w-[40%]'} height='h-[13px]' />
				<Skeleton width={'w-[60%]'} height='h-[18px]' />
				<Skeleton width={'w-[30%]'} height='h-[14px]' />
			</div>
		</div>
	);
};

const PromptListSkeleton = () => {
	return (
		<div className='flex flex-col gap-4'>
			<div className='w-[944px] h-[129.5px] rounded-2xl border border-neutral-200 flex bg-gray-300 animate-pulse' />
			<div className='w-[944px] h-[129.5px] rounded-2xl border border-neutral-200 flex bg-gray-300 animate-pulse' />
			<div className='w-[944px] h-[129.5px] rounded-2xl border border-neutral-200 flex bg-gray-300 animate-pulse' />
			<div className='w-[944px] h-[129.5px] rounded-2xl border border-neutral-200 flex bg-gray-300 animate-pulse' />
			<div className='w-[944px] h-[129.5px] rounded-2xl border border-neutral-200 flex bg-gray-300 animate-pulse' />
		</div>
	);
};

export default PromptListSkeleton;
