import React from 'react';
import Image from 'next/image';

interface BookMarkPromptItemProps {
	src: string;
	title: string;
	user: string;
	badge: React.ReactNode;
	onClick?: () => void;
}

const BookMarkPromptItem: React.FC<BookMarkPromptItemProps> = ({ src, title, user, badge, onClick }) => {
	return (
		<div className='flex flex-col gap-[18px] max-w-[260px] relative'>
			<div className='w-full h-40 relative cursor-pointer' onClick={onClick}>
				<Image
					src={src}
					alt={title}
					fill
					className='rounded-tl-lg rounded-tr-[50px] rounded-bl-lg rounded-br-[50px] object-cover'
					sizes=' (min-width: 786px) 30vw'
					quality={75}
					priority={true}
				/>
				<div className='left-0 top-[-16px] absolute'>{badge}</div>
			</div>
			<div className='w-full flex flex-col gap-3'>
				<span className='text-lg font-semibold text-black truncate'>{title}</span>
				<span className='opacity-70 text-neutral-400 text-[13px] font-medium truncate'>{user}</span>
			</div>
		</div>
	);
};

export default BookMarkPromptItem;
