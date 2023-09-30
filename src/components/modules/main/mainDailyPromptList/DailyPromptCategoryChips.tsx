import SelectChip from '@/src/components/atoms/chip/SelectChip';
import { useGetPromptCategory } from '@/src/fetchers/prompt';
import { dailyCategoryAtom } from '@/src/stores/main';
import { useAtom } from 'jotai';
import React from 'react';

interface DailyPromptCategoryChipsProps {
	className?: string;
}

const DailyPromptCategoryChips: React.FC<DailyPromptCategoryChipsProps> = () => {
	const { data } = useGetPromptCategory();

	const [selectedCategory, setSelectedCategory] = useAtom(dailyCategoryAtom);

	const handleChipClick = (code: string) => {
		setSelectedCategory(code);
	};

	return (
		<div className='gap-2 flex'>
			{data?.dailyCategories.map((category) => (
				<SelectChip
					key={category.dept1.code}
					label={category.dept1.text}
					color='secondary'
					selected={selectedCategory === category.dept1.code}
					onClick={() => handleChipClick(category.dept1.code)}
				/>
			))}
		</div>
	);
};

export default DailyPromptCategoryChips;
