import CategoryDept1Chips from '@/src/components/molecules/chips/CategoryDept1Chips';
import { useGetPromptCategory } from '@/src/fetchers/prompt';
import { PromptCategories } from '@/src/fetchers/prompt/types';
import { FC, useEffect } from 'react';

interface CurationCategoriesContainerProps {
	categories: keyof PromptCategories;
	selectedCategory?: string;
	onSetSelectedCategory: (category?: string) => void;
}

const CurationCategoriesContainer: FC<CurationCategoriesContainerProps> = ({ categories, selectedCategory, onSetSelectedCategory }) => {
	const { data, isLoading } = useGetPromptCategory();

	const initialSelectedCategoryText = data && data[categories]?.[0].dept1?.text;

	useEffect(() => {
		onSetSelectedCategory(initialSelectedCategoryText);
	}, [isLoading]);

	const handleChipClick = (text: string) => {
		onSetSelectedCategory(text);
	};

	return <CategoryDept1Chips categories={data ? data[categories] : []} selectedCategory={selectedCategory} onClick={handleChipClick} />;
};

export default CurationCategoriesContainer;
