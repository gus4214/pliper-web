import React from 'react';

interface MainHotTopicBoxProps {
	children: React.ReactNode;
}

const MainHotTopicBox: React.FC<MainHotTopicBoxProps> = ({ children }) => {
	return <div className='w-[1176px] h-60 flex flex-col justify-center items-center gap-8'>{children}</div>;
};

export default MainHotTopicBox;
