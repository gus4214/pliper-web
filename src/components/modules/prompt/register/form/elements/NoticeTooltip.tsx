import React, { FC, ReactNode } from 'react';

interface NoticeTooltipProps {
	className?: string;
	children: ReactNode;
}

const NoticeTooltip: FC<NoticeTooltipProps> = ({ className, children }) => {
	return (
		<>
			<div className='tool_tip w-[31px] h-4 px-2 py-[3px] bg-teal-200 rounded justify-center items-center flex cursor-pointer'>
				<span className='text-white text-[10px] font-normal'>TIP</span>
				<div className={`${className} arrow_box p-2.5 absolute left-[100px] z-10 rounded-sm hidden`}>{children}</div>
			</div>
		</>
	);
};

export default NoticeTooltip;
