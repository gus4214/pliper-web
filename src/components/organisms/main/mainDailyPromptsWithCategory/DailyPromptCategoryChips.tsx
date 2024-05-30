import SelectChip from '@/src/components/atoms/chip/SelectChip';
import { useGetPromptCategory } from '@/src/fetchers/prompt';
import { dailyCategoryAtom } from '@/src/stores/main';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react';

interface DailyPromptCategoryChipsProps {
	className?: string;
}

const DailyPromptCategoryChips: React.FC<DailyPromptCategoryChipsProps> = () => {
	const { data, isLoading } = useGetPromptCategory();
	const [selectedCategory, setSelectedCategory] = useAtom(dailyCategoryAtom);

	useEffect(() => {
		setSelectedCategory(data?.dailyCategories?.[0].dept1?.text);
	}, [isLoading]);

	const handleChipClick = (code: string) => {
		setSelectedCategory(code);
	};

	return (
		<div className='flex gap-2'>
			{data?.dailyCategories?.map((category) => (
				<SelectChip
					key={category.dept1.code}
					label={category.dept1.text}
					color='secondary'
					selected={selectedCategory === category.dept1.text}
					onClick={() => handleChipClick(category.dept1.text)}
				/>
			))}
		</div>
	);
};

export default DailyPromptCategoryChips;
