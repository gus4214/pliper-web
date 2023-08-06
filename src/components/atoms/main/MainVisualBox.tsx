import React from 'react';
import Image from 'next/image';

interface MainVisulBoxProps {
	children: React.ReactNode;
	src: string;
}

const MainVisualBox: React.FC<MainVisulBoxProps> = ({ children, src }) => {
	return (
		<div className='flex justify-center items-center w-full h-[320px] relative'>
			<Image src={src} layout='fill' objectFit='cover' className='absolute z-0' alt='Description of Image' />
			{children}
		</div>
	);
};

export default MainVisualBox;
