import SelectChip from '@/src/components/atoms/chip/SelectChip';
import { useGetPromptCategory } from '@/src/fetchers/prompt';
import { workCategoryAtom } from '@/src/stores/main';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react';

interface WorkPromptCategoryChipsProps {
	className?: string;
}

const WorkPromptCategoryChips: React.FC<WorkPromptCategoryChipsProps> = () => {
	const [selectedCategory, setSelectedCategory] = useAtom(workCategoryAtom);

	const { data, isLoading } = useGetPromptCategory();

	useEffect(() => {
		setSelectedCategory(data?.jobCategories?.[0].dept1?.text);
	}, [isLoading]);

	const handleChipClick = (code: string) => {
		setSelectedCategory(code);
	};

	return (
		<div className='flex gap-2'>
			{data?.jobCategories?.map((category) => (
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

export default WorkPromptCategoryChips;
