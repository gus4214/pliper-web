import React from 'react';
import Image from 'next/image';

interface MainBookMarkCardProps {
	src: string;
	title: string;
	user: string;
	badge: React.ReactNode;
	onClick?: () => void;
}

const MainBookMarkCard: React.FC<MainBookMarkCardProps> = ({ src, title, user, badge, onClick }) => {
	return (
		<div className='flex flex-col justify-center gap-[18px]'>
			<div className='w-[260px] h-40 relative cursor-pointer' onClick={onClick}>
				<Image src={src} alt={title} fill className='rounded-tl-lg rounded-tr-[50px] rounded-bl-lg rounded-br-[50px] object-cover' />
				<div className='left-0 top-[-16px] absolute'>{badge}</div>
			</div>
			<div className='w-[260px] flex flex-col gap-3'>
				<span className='text-black text-lg font-semibold truncate'>{title}</span>
				<span className='opacity-70 text-neutral-400 text-[13px] font-medium truncate'>{user}</span>
			</div>
		</div>
	);
};

export default MainBookMarkCard;
