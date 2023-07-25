import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const LoginModal: React.FC = () => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)} className='relative z-50'>
			<div className='fixed inset-0 bg-black/30' aria-hidden='true' />
			<div className='fixed inset-0 flex items-center justify-center p-4'>
				<Dialog.Panel className='inline-flex flex-col justify-center items-start rounded-2xl bg-white p-20 gap-8'>
					<div className='flex-col justify-center items-start gap-2 flex'>
						<div className='w-14 justify-between items-center inline-flex'>
							<div className='w-2 h-2 bg-neutral-600 rounded-full'></div>
							<div className='w-10 h-[0px] border border-zinc-300'></div>
							<div className='w-2 h-2 bg-zinc-300 rounded-full'></div>
						</div>
						<div className='justify-start items-center gap-4 inline-flex'>
							<div className='text-black text-xs font-medium leading-3'>Step1</div>
							<div className='text-black text-xs font-medium leading-3'>Step2</div>
						</div>
					</div>
					<div className='flex flex-col justify-center items-start gap-3'>
						<span className='text-2xl leading-none font-bold'>로그인 하기</span>
						<span className='text-center text-base font-medium leading-none '>
							검증된 프롬프트를 한눈에 볼 수 있는 플리퍼에 오신것을 환영합니다
						</span>
					</div>
					<div className='flex-col justify-center gap-6 inline-flex'>
						<div className='w-[440px] h-[104px] flex-col justify-start items-start gap-2 inline-flex'>
							<div className='self-stretch h-12 p-4 bg-white rounded border border-neutral-200 justify-start items-center gap-[111px] inline-flex'>
								<div className='justify-start items-center gap-4 flex'>
									<div className='text-lime-700 text-base font-semibold'>N</div>
									<div className='w-[18px] h-[0px] origin-top-left rotate-90 border border-neutral-400 border-opacity-50'></div>
								</div>
								<div className='text-neutral-800 text-base font-medium leading-none'>네이버 계정으로 시작하기</div>
							</div>
							<div className='self-stretch h-12 p-4 bg-white rounded border border-neutral-200 justify-start items-center gap-[118px] inline-flex'>
								<div className='justify-start items-center gap-4 flex'>
									<div className='text-red-700 text-base font-semibold'>G</div>
									<div className='w-[18px] h-[0px] origin-top-left rotate-90 border border-neutral-400 border-opacity-50'></div>
								</div>
								<div className='text-black text-base font-medium leading-none'>구글 계정으로 시작하기</div>
							</div>
						</div>
						<div>
							<span className='text-neutral-600 text-xs font-normal leading-tight'>계속 진행할 경우 </span>x
							<span className='text-neutral-600 text-xs font-semibold leading-tight'>개인 정보 보호 정책</span>
							<span className='text-neutral-600 text-xs font-normal leading-tight'>및 </span>
							<span className='text-neutral-600 text-xs font-semibold leading-tight'>서비스 약관</span>
							<span className='text-neutral-600 text-xs font-normal leading-tight'>에 동의한 것으로 간주됩니다.</span>
						</div>
					</div>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
};

export default LoginModal;
