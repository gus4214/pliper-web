import { XCircle } from 'heroicons-react';
import React from 'react';

interface RecentlySearchItemProps {
	text: string;
	onClick?: () => void;
}

const RecentlySearchItem: React.FC<RecentlySearchItemProps> = ({ text, onClick }) => {
	return (
		<div className='justify-start items-center gap-2 inline-flex'>
			<span className='text-neutral-800 text-[15px] font-normal leading-[15px]'>{text}</span>
			<XCircle className='w-5 h-5 cursor-pointer' color='#D9D9D9' onClick={onClick} />
		</div>
	);
};

export default RecentlySearchItem;
