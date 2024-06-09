import VerticalPromptCard from '@/src/components/molecules/card/VerticalPromptCard';
import CurationCategoriesContainer from '@/src/containers/main/CurationCategoriesContainer';
import CurationPromptsContainer from '@/src/containers/main/CurationPromptsContainer';
import CurationPromptsWithCategory from '@/src/components/organisms/main/curations/CurationPromptsWithCategory';
import DailyCurationPromptsSkeleton from '@/src/components/organisms/main/curations/daily/DailyCurationPromptsSkeleton';
import { PartialPrompt } from '@/src/fetchers/prompt/types';
import { useCurationPromptsWithCategory } from '@/src/hooks/useCurationPromptsWithCategory';

const DailyPromptsWithCategoryContainer = () => {
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

export default DailyPromptsWithCategoryContainer;
