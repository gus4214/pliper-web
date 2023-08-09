import { googleAuthApi, naverAuthApi } from '@/src/fetchers/auth';
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal } from 'react-daisyui';

interface LoginModalProps {
	open: boolean;
	toggleOpen: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, toggleOpen }) => {
	const handleGoogleLogin = async () => {
		const result = await googleAuthApi('http://localhost:3000/auth/google/callback');
		console.log('🚀 ~ file: LoginModal.tsx:23 ~ handleGoogleLogin ~ result:', result);
		window.location.href = result.url;
	};

	const handleNaverLogin = async () => {
		const result = await naverAuthApi();
		console.log('🚀 ~ file: LoginModal.tsx:23 ~ handleGoogleLogin ~ result:', result);
		// window.location.href = result.url;
	};

	return (
		<>
			<Modal.Legacy
				open={open}
				onClickBackdrop={toggleOpen}
				className='max-w-screen-sm flex flex-col justify-center items-start rounded-2xl bg-white px-20 gap-8 w-[560px] h-[400px]'
			>
				<div className='w-[400px] flex flex-col justify-center items-center gap-4'>
					<h1 className='text-3xl text-black font-bold'>로그인 하기</h1>
					<span className='text-center text-black text-sm'>검증된 프롬프트를 한눈에 볼 수 있는 플리퍼에 오신것을 환영합니다</span>
				</div>
				<div className='w-[400px] flex flex-col justify-center gap-6'>
					<div className='flex flex-col justify-center gap-2'>
						<Button variant='outline' fullWidth className='justify-start hover:bg-[#439E22] naver-button' onClick={handleNaverLogin}>
							<div className='w-7 h-[19px] justify-start items-center gap-4 inline-flex'>
								<div className='text-[#439E22] text-base font-semibold naver-icon'>N</div>
								<div className='h-[18px] w-[0px] border-[0.5px] border-neutral-300'></div>
							</div>
							<span className='ml-[90px]'>네이버 계정으로 시작하기</span>
						</Button>

						<Button variant='outline' fullWidth className='justify-start hover:bg-[#454746] google-button' onClick={handleGoogleLogin}>
							<div className='w-7 h-[19px] justify-start items-center gap-4 inline-flex'>
								<div className='text-red-700 text-base font-semibold google-icon'>G</div>
								<div className='h-[18px] w-[0px] border-[0.5px] border-neutral-300'></div>
							</div>
							<span className='ml-[96px]'>구글 계정으로 시작하기</span>
						</Button>
					</div>
					<div className='w-[421px]'>
						<span className='text-neutral-600 text-[13px]'>
							계속 진행할경우 <strong>개인정보 보호정책</strong> 및 <strong>서비스약관</strong>에 동의한 것으로 간주됩니다.
						</span>
					</div>
				</div>
			</Modal.Legacy>
		</>
	);
};

export default LoginModal;
