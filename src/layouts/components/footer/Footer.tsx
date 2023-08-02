import React from 'react';

const Footer = () => {
	return (
		<div className='h-28 px-96 py-10 bg-slate-700 justify-start items-center inline-flex'>
			<div className='flex-col justify-start items-start gap-4 inline-flex'>
				<div className='justify-start items-start gap-4 inline-flex'>
					<div className='opacity-70 text-center text-white text-xs font-medium leading-3'>개인정보처리방침</div>
					<div className='opacity-50 text-center text-white text-xs font-normal leading-3'>이용약관</div>
				</div>
				<div className='opacity-50 text-center text-white text-xs font-normal leading-3'>@ 2023 Pliper. All Rights Reserved.</div>
			</div>
		</div>
	);
};

export default Footer;
