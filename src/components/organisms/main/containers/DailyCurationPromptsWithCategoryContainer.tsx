import VerticalPromptCard from '@/src/components/molecules/card/VerticalPromptCard';
import CurationCategoriesContainer from '@/src/components/organisms/main/containers/CurationCategoriesContainer';
import CurationPromptsContainer from '@/src/components/organisms/main/containers/CurationPromptsContainer';
import CurationPromptsWithCategory from '@/src/components/organisms/main/curation/CurationPromptsWithCategory';
import DailyCurationPromptsSkeleton from '@/src/components/organisms/main/curation/daily/DailyCurationPromptsSkeleton';
import { PartialPrompt } from '@/src/fetchers/prompt/types';
import { useCurationPromptsWithCategory } from '@/src/hooks/useCurationPromptsWithCategory';

const DailyCurationPromptsWithCategoryContainer = () => {
	const { selectedCategory, onSetSelectedCategory, onPromptClick } = useCurationPromptsWithCategory();

	return (
		<CurationPromptsWithCategory
			renderCategories={
				<CurationCategoriesContainer
					categories='dailyCategories'
					selectedCategory={selectedCategory}
					onSetSelectedCategory={onSetSelectedCategory}
				/>
			}
			renderPrompts={
				<CurationPromptsContainer
					persona='DAILY'
					selectedCategory={selectedCategory}
					renderPromptCards={(prompt: PartialPrompt) => (
						<VerticalPromptCard key={prompt.promptId} prompt={prompt} onClick={() => onPromptClick(prompt.promptId)} />
					)}
					className='gap-x-6 gap-y-6 min-h-[252px]'
				/>
			}
			renderPromptsSkeleton={<DailyCurationPromptsSkeleton />}
		/>
	);
};

export default DailyCurationPromptsWithCategoryContainer;
