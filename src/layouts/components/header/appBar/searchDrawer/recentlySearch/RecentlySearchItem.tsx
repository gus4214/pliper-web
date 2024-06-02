import { XCircle } from 'heroicons-react';
import React from 'react';

interface RecentlySearchItemProps {
	text: string;
	historyId: number;
	onClick: (text: string) => void;
	onDeleteClick?: (historyId: number) => void;
}

const RecentlySearchItem: React.FC<RecentlySearchItemProps> = ({ text, historyId, onClick, onDeleteClick }) => {
	return (
		<div className='justify-start items-center gap-2 inline-flex'>
			<span className='text-neutral-800 text-[15px] font-normal leading-[15px] cursor-pointer hover:underline' onClick={() => onClick(text)}>
				{text}
			</span>
			<XCircle className='w-5 h-5 cursor-pointer' color='#D9D9D9' onClick={() => onDeleteClick && onDeleteClick(historyId)} />
		</div>
	);
};

export default RecentlySearchItem;
