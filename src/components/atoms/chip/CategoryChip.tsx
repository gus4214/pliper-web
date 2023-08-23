import React from 'react';

interface CategoryChipProps {
	text: string;
}

const CategoryChip: React.FC<CategoryChipProps> = ({ text }) => {
	return (
		<div className='h-6 px-2 py-1.5 bg-emerald-300 bg-opacity-20 rounded justify-center items-center flex'>
			<div className='text-center text-teal-200 font-semibold  text-[13px] whitespace-nowrap'>{text}</div>
		</div>
	);
};

export default CategoryChip;
