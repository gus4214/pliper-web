import React from 'react';
import Image from 'next/image';

interface MainVisulBoxProps {
	children: React.ReactNode;
	src: string;
}

const MainVisualBox: React.FC<MainVisulBoxProps> = ({ children, src }) => {
	return (
		<div className='flex justify-center items-center w-full h-[320px] relative'>
			<Image src={src} fill className='absolute z-0 object-cover' alt='main-visual' />
			{children}
		</div>
	);
};

export default MainVisualBox;
