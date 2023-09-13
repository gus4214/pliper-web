import SelectChip from '@/src/components/atoms/chip/SelectChip';
import { PromptSortType } from '@/src/configs/prompt';
import { useGetPromptCategory } from '@/src/fetchers/prompt';
import { category1CodesAtom, promptSortAtom } from '@/src/stores/searchForm';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react';

interface PromptCategoryChipsProps {
	className?: string;
}

const PromptCategoryChips: React.FC<PromptCategoryChipsProps> = () => {
	const { data } = useGetPromptCategory();

	// const [selectedCategoryCode, setSelectedCategoryCode] = useAtom(dailyCategoryAtom);

	// const handleChipClick = (code: string) => {
	// 	setSelectedCategoryCode(code);
	// };

	// useEffect(() => {
	// 	return () => {
	// 		setCategory1Codes([]);
	// 	};
	// }, []);

	return (
		<div className='gap-2 flex'>
			{data?.categories.map((category) => <SelectChip key={category.dept1.code} label={category.dept1.text} color='secondary' />)}
		</div>
	);
};

export default PromptCategoryChips;
