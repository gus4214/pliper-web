import React from 'react';

interface MainWorkPromptBoxProps {
	children: React.ReactNode;
}

const MainWorkPromptBox: React.FC<MainWorkPromptBoxProps> = ({ children }) => {
	return <div className='w-full bg-neutral-50 flex flex-col py-[45px] items-center justify-center relative'>{children}</div>;
};

export default MainWorkPromptBox;
