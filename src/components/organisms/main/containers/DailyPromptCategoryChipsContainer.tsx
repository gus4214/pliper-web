import CategoryDept1Chips from '@/src/components/molecules/chips/CategoryDept1Chips';
import { useGetPromptCategory } from '@/src/fetchers/prompt';
import { dailyCategoryAtom } from '@/src/stores/main';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

const DailyPromptCategoryChipsContainer = () => {
	const [selectedCategory, setSelectedCategory] = useAtom(dailyCategoryAtom);

	const { data, isLoading } = useGetPromptCategory();

	useEffect(() => {
		setSelectedCategory(data?.dailyCategories?.[0].dept1?.text);
	}, [isLoading]);

	const handleChipClick = (code: string) => {
		setSelectedCategory(code);
	};
	return <CategoryDept1Chips categories={data?.dailyCategories || []} selectedCategory={selectedCategory} onClick={handleChipClick} />;
};

export default DailyPromptCategoryChipsContainer;
