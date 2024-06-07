import CurationPromptsWithCategory from '@/src/components/organisms/main/containers/CurationPromptsWithCategory';
import WorkCurationPromptsContainer from '@/src/components/organisms/main/containers/WorkCurationPromptsContainer';
import WorkPromptCategoriesContainer from '@/src/components/organisms/main/containers/WorkPromptCategoriesContainer';
import WorkCurationPromptsSkeleton from '@/src/components/organisms/main/mainWorkPromptsWithCategory/WorkCurationPromptsSkeleton';

const WorkCurationPromptsWithCategory = () => {
	return (
		<div className='max-w-[1200px] w-full relative m-auto'>
			<h1 className='text-center text-[28px] font-bold text-black'>업무에서 활용 가능한 프롬프트 엄선작</h1>
			<div className='mt-8'>
				<CurationPromptsWithCategory
					renderCategories={<WorkPromptCategoriesContainer />}
					renderPrompts={<WorkCurationPromptsContainer />}
					renderPromptsSkeleton={<WorkCurationPromptsSkeleton />}
				/>
			</div>
		</div>
	);
};

export default WorkCurationPromptsWithCategory;
