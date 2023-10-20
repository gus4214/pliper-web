import React from 'react';

const Footer = () => {
	return (
		<div className='h-[120px] py-10 bg-slate-700 flex w-full items-center justify-center'>
			<div className='w-[1200px] flex justify-start px-4'>
				<div className='flex flex-col gap-4'>
					<div className='justify-start items-start gap-4 flex'>
						<span className='text-center text-slate-200 text-[13px] font-medium'>개인정보처리방침</span>
						<span className='text-center text-slate-200 text-[13px] font-normal'>이용약관</span>
					</div>
					<span className='opacity-50 text-center text-white text-[13px] font-normal'>@ 2023 Pliper. All Rights Reserved.</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
