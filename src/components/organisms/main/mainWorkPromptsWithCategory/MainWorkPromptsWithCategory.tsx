import Skeleton from '@/src/components/atoms/skeleton/Skeleton';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import MainWorkPromptsContainer from '@/src/components/organisms/main/containers/MainWorkPromptsContainer';
import WorkPromptCategoryChipsContainer from '@/src/components/organisms/main/containers/WorkPromptCategoryChipsContainer';
import MainWorkPromptsSkeleton from '@/src/components/organisms/main/mainWorkPromptsWithCategory/MainWorkPromptsSkeleton';

const MainWorkPromptsWithCategory = () => {
	return (
		<section className='w-full bg-neutral-50 flex flex-col py-[45px] items-center justify-center relative'>
			<h1 className='text-center text-[28px] font-bold text-black'>업무에서 활용 가능한 프롬프트 엄선작</h1>
			<div className='w-[1176px] mt-8'>
				<div className='flex flex-col items-center w-full gap-8'>
					<AsyncComponentBoundary pendingFallback={<Skeleton height='h-8' />}>
						<WorkPromptCategoryChipsContainer />
					</AsyncComponentBoundary>
					<AsyncComponentBoundary pendingFallback={<MainWorkPromptsSkeleton />}>
						<MainWorkPromptsContainer />
					</AsyncComponentBoundary>
				</div>
			</div>
		</section>
	);
};

export default MainWorkPromptsWithCategory;
