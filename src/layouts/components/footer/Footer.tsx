import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className='h-[120px] py-10 bg-slate-700 flex w-full items-center justify-center'>
			<div className='w-[1200px] flex justify-start px-4'>
				<div className='flex flex-col gap-4'>
					<div className='justify-start items-start gap-4 flex'>
						<span className='text-center text-slate-200 text-[13px] font-normal'>
							<Link href={'https://pliper.notion.site/PLIPER-AI-ec7a3dc929c74fd9a3eaf2f1db37ae02?pvs=4'} rel="noopener noreferrer" target="_blank">이용가이드</Link>
						</span>
						<span className='text-center text-slate-200 text-[13px] font-medium'>
							<Link href={'/policy/542179ad-6c36-4d82-b993-9ddf871d49f9'} rel="noopener noreferrer" target="_blank">개인정보처리방침</Link>
						</span>
						<span className='text-center text-slate-200 text-[13px] font-normal'>
							<Link href={'/policy/a573ca9d45e4426ebfbb6ef4ef128953'} rel="noopener noreferrer" target="_blank">이용약관</Link>
						</span>
					</div>
					<span className='opacity-50 text-center text-white text-[13px] font-normal'>@ {new Date().getFullYear()} Pliper. All Rights Reserved.</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
