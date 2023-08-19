import React from 'react';
import Image from 'next/image';

interface MainBookMarkCardProps {
	src: string;
	title: string;
	user: string;
	badge: React.ReactNode;
}

const MainBookMarkCard: React.FC<MainBookMarkCardProps> = ({ src, title, user, badge }) => {
	return (
		<>
			<div className='w-[300px] h-40 rounded-2xl relative shadow cursor-pointer'>
				<Image src={src} fill objectFit='cover' className='absolute z-0 rounded-lg' alt='main-bookmark' />
				<span className='left-[15px] top-[105px] absolute text-center text-white text-base font-semibold'>{title}</span>
				<span className='left-[15px] top-[131px] absolute opacity-50 text-center text-white text-[13px] font-medium'>{user}</span>
				<div className='left-[-32px] top-[-16px] absolute'>{badge}</div>
			</div>
		</>
	);
};

export default MainBookMarkCard;
