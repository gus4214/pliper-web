import React from 'react';

interface PromptCategoryChipProps {
	text: string;
	color?: 'primary' | 'light' | 'gray';
}

const PromptCategoryChip: React.FC<PromptCategoryChipProps> = ({ text, color = 'primary' }) => {
	let bgColor;
	let textColor;

	switch (color) {
		case 'gray':
			bgColor = 'bg-neutral-100';
			textColor = 'text-neutral-400';
			break;
		case 'light':
			bgColor = 'bg-opacity-20 bg-emerald-300';
			textColor = 'text-teal-200';
			break;
		case 'primary':
		default:
			bgColor = 'bg-teal-200';
			textColor = 'text-white';
			break;
	}

	return (
		<>
			<div className={`${bgColor} h-6 px-2 py-1.5 rounded justify-center items-center flex`}>
				<span className={`${textColor} text-cente font-medium text-[13px] whitespace-nowrap`}>{text}</span>
			</div>
		</>
	);
};

export default PromptCategoryChip;
