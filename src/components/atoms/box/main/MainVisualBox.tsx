import React from 'react';
import Image from 'next/image';

interface MainVisualBoxProps {
	children: React.ReactNode;
	src: string;
}

const MainVisualBox: React.FC<MainVisualBoxProps> = ({ children, src }) => {
	return (
		<div className='flex justify-center items-center w-full h-[240px] relative'>
			<Image src={src} fill className='absolute z-0 object-cover' alt='main-visual' priority />
			{children}
		</div>
	);
};

export default MainVisualBox;
