import React from 'react';

interface ListItemProps {
	icon: React.ReactNode;
	title: string;
	userEmail: string;
	onClick?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ icon, title, userEmail, onClick }) => {
	return (
		<div
			className='w-[428px] flex p-2.5 bg-white rounded-lg border border-neutral-100 items-center gap-2 hover:shadow hover:border-teal-200 cursor-pointer'
			onClick={onClick}
		>
			{icon}
			<div className='grow shrink basis-0 truncate'>
				<span className='text-neutral-700 text-sm font-semibold'>{title}</span>
			</div>
			<span className='text-neutral-400 text-[13px] font-normal'>{userEmail}</span>
		</div>
	);
};

export default ListItem;
