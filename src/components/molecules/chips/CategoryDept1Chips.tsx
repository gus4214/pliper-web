import SelectChip from '@/src/components/atoms/chip/SelectChip';
import { Category } from '@/src/fetchers/prompt/types';
import { FC } from 'react';

interface CategoryDept1ChipsProps {
	categories: Category[];
	selectedCategory?: string;
	onClick: (text: string) => void;
}

const CategoryDept1Chips: FC<CategoryDept1ChipsProps> = ({ categories, selectedCategory, onClick }) => {
	return (
		<div className='flex gap-2'>
			{categories?.map((category) => (
				<SelectChip
					key={category.dept1.code}
					label={category.dept1.text}
					color='secondary'
					selected={selectedCategory === category.dept1.text}
					onClick={() => onClick(category.dept1.text)}
				/>
			))}
		</div>
	);
};

export default CategoryDept1Chips;
