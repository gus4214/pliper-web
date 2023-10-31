import React from 'react';
import { Button } from 'react-daisyui';

interface PlipAndMyPromptBoxProps {
	title: string;
	count: number;
	list: React.ReactNode;
	onMoreButtonClick?: () => void;
}

const PlipAndMyPromptBox: React.FC<PlipAndMyPromptBoxProps> = ({ title, count, list, onMoreButtonClick }) => {
	return (
		<div className='w-[476px] flex flex-col justify-center items-start gap-2'>
			<div className='w-full flex justify-between items-center'>
				<div className='flex items-center gap-1'>
					<span className='text-neutral-700 text-sm font-normal'>{title}</span>
					<span className='text-center text-teal-200 text-sm font-medium'>{count}</span>
				</div>
				<span className='p-2 text-center text-black text-xs font-normal cursor-pointer' onClick={onMoreButtonClick}>
					더보기
				</span>
			</div>
			<div className='w-full h-[184px] flex flex-col p-4 bg-neutral-50 rounded gap-2.5'>{list}</div>
		</div>
	);
};

export default PlipAndMyPromptBox;
