import React from 'react';
import Image from 'next/image';

interface ListTitleHeaderBoxProps {
	title: string;
}

const ListTitleHeaderBox: React.FC<ListTitleHeaderBoxProps> = ({ title }) => {
	return (
		<div className='flex justify-center items-center w-full h-[88px] relative'>
			<Image src={'/images/mypage-title-bg.svg'} priority alt='title' fill className='absolute z-0 object-cover' />
			<span className='absolute text-center text-white text-[22px] font-bold'>{title}</span>
		</div>
	);
};

export default ListTitleHeaderBox;
