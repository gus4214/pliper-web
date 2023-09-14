import SelectChip from '@/src/components/atoms/chip/SelectChip';
import { useGetPromptCategory } from '@/src/fetchers/prompt';
import { workCategoryAtom } from '@/src/stores/main';
import { useAtom } from 'jotai';
import React from 'react';

interface WorkPromptCategoryChipsProps {
	className?: string;
}

const WorkPromptCategoryChips: React.FC<WorkPromptCategoryChipsProps> = () => {
	const { data } = useGetPromptCategory();

	const [selectedCategory, setSelectedCategory] = useAtom(workCategoryAtom);

	const handleChipClick = (code: string) => {
		setSelectedCategory(code);
	};

	return (
		<div className='gap-2 flex'>
			{data?.categories.map((category) => (
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

export default WorkPromptCategoryChips;
