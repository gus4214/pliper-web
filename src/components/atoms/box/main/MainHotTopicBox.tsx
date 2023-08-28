import React from 'react';

interface MainHotTopicBoxProps {
	children: React.ReactNode;
}

const MainHotTopicBox: React.FC<MainHotTopicBoxProps> = ({ children }) => {
	return <div className='w-[1200px] flex flex-col justify-center items-center gap-8 pt-[197px] pb-[84px]'>{children}</div>;
};

export default MainHotTopicBox;
