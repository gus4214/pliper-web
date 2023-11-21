import React from 'react';

const NoticeTooltip = () => {
	return (
		<div
			className='tooltip  tooltip-right before:bg-white before:border-teal-200 before:border-2 before:p-2.5 before:text-teal-600 before:text-xs before:font-normal before:w-[210px] after:border-none'
			data-tip='어떤 용도로 작성 하였는지, 어떤 상황에서 사용하면 좋은지 사용자들이 이해하기 쉽게 작성해주세요 🙂'
		>
			<div className='w-[31px] h-4 px-2 py-[3px] bg-teal-200 rounded justify-center items-center flex'>
				<span className='text-white text-[10px] font-normal cursor-pointer'>TIP</span>
			</div>
		</div>
	);
};

export default NoticeTooltip;
