import React from 'react';
import { Badge } from 'react-daisyui';

interface MainBookMarkProps {
	title: string;
	user: string;
	badge: React.ReactNode;
}

const MainBookMark: React.FC<MainBookMarkProps> = ({ title, user, badge }) => {
	return (
		<div className='w-80 h-[100px] relative'>
			<div className='w-80 h-[100px] left-0 top-0 absolute bg-black bg-opacity-60 rounded-lg shadow' />
			<div className='left-[30.50px] top-[30px] absolute text-white text-lg font-semibold leading-[18px]'>{title}</div>
			<div className='left-[30.50px] top-[60px] absolute text-white text-sm font-normal leading-[14px]'>{user}</div>
			<div className='left-[-16px] top-[-14px] absolute'>{badge}</div>
		</div>
	);
};

export default MainBookMark;
