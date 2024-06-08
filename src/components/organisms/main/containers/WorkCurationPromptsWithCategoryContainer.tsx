import BasicPromptCard from '@/src/components/molecules/card/BasicPromptCard';
import CurationCategoriesContainer from '@/src/components/organisms/main/containers/CurationCategoriesContainer';
import CurationPromptsContainer from '@/src/components/organisms/main/containers/CurationPromptsContainer';
import CurationPromptsWithCategory from '@/src/components/organisms/main/curation/CurationPromptsWithCategory';
import WorkCurationPromptsSkeleton from '@/src/components/organisms/main/curation/work/WorkCurationPromptsSkeleton';
import { PartialPrompt } from '@/src/fetchers/prompt/types';
import { useCurationPromptsWithCategory } from '@/src/hooks/useCurationPromptsWithCategory';

const WorkCurationPromptsWithCategoryContainer = () => {
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

export default WorkCurationPromptsWithCategoryContainer;
