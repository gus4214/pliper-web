import BasicPromptCard from '@/src/components/molecules/card/BasicPromptCard';
import CurationCategoriesContainer from '@/src/containers/main/CurationCategoriesContainer';
import CurationPromptsContainer from '@/src/containers/main/CurationPromptsContainer';
import CurationPromptsWithCategory from '@/src/components/organisms/main/curations/CurationPromptsWithCategory';
import WorkCurationPromptsSkeleton from '@/src/components/organisms/main/curations/work/WorkCurationPromptsSkeleton';
import { PartialPrompt } from '@/src/fetchers/prompt/types';
import { useCurationPromptsWithCategory } from '@/src/hooks/useCurationPromptsWithCategory';

const WorkPromptsWithCategoryContainer = () => {
	const { selectedCategory, onSetSelectedCategory, onPromptClick } = useCurationPromptsWithCategory();

	return (
		<CurationPromptsWithCategory
			renderCategories={
				<CurationCategoriesContainer
					categories='jobCategories'
					selectedCategory={selectedCategory}
					onSetSelectedCategory={onSetSelectedCategory}
				/>
			}
			renderPrompts={
				<CurationPromptsContainer
					persona='JOB'
					selectedCategory={selectedCategory}
					renderPromptCards={(prompt: PartialPrompt) => (
						<BasicPromptCard key={prompt.promptId} prompt={prompt} onClick={() => onPromptClick(prompt.promptId)} />
					)}
					className='gap-x-6 gap-y-10 min-h-[286px]'
				/>
			}
			renderPromptsSkeleton={<WorkCurationPromptsSkeleton />}
		/>
	);
};

export default WorkPromptsWithCategoryContainer;
