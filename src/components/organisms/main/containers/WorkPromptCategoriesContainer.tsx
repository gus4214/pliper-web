import CategoryDept1Chips from '@/src/components/molecules/chips/CategoryDept1Chips';
import { useGetPromptCategory } from '@/src/fetchers/prompt';
import { workCategoryAtom } from '@/src/stores/main';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

const WorkPromptCategoriesContainer = () => {
	const [selectedCategory, setSelectedCategory] = useAtom(workCategoryAtom);

	const { data, isLoading } = useGetPromptCategory();

	useEffect(() => {
		setSelectedCategory(data?.jobCategories?.[0].dept1?.text);
	}, [isLoading]);

	const handleChipClick = (code: string) => {
		setSelectedCategory(code);
	};

	return <CategoryDept1Chips categories={data?.jobCategories || []} selectedCategory={selectedCategory} onClick={handleChipClick} />;
};

export default WorkPromptCategoriesContainer;
