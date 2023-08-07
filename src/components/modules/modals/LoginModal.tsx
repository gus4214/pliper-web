import { googleAuthApi } from '@/src/fetchers/auth';
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal } from 'react-daisyui';

interface GoogleAuthResponse {
	url: string;
}

interface ErrorResponse {
	code: number;
	message: string;
}

interface LoginModalProps {
	open: boolean;
	toggleOpen: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, toggleOpen }) => {
	const handleGoogleLogin = async () => {
		const result = await googleAuthApi();
		console.log('🚀 ~ file: LoginModal.tsx:24 ~ handleGoogleLogin ~ result:', result);
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
						<Button
							startIcon={
								<svg width='29' height='20' viewBox='0 0 29 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M10.3438 4.1875V15.5H8.53125L3.17188 7.76562H3.07812V15.5H1.04688V4.1875H2.89062L8.21875 11.9219H8.32812V4.1875H10.3438Z'
										fill='#439E22'
									/>
									<line x1='28.25' y1='1' x2='28.25' y2='19' stroke='#A0A0A0' strokeOpacity='0.5' strokeWidth='0.5' />
								</svg>
							}
							variant='outline'
							fullWidth
							className='justify-start'
						>
							<span className='ml-[87px]'>네이버 계정으로 시작하기</span>
						</Button>
						<Button
							startIcon={
								<svg width='29' height='20' viewBox='0 0 29 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M8.625 7.79688C8.25781 6.59375 7.32812 5.85938 5.95312 5.85938C4.13281 5.85938 2.80469 7.28125 2.8125 9.82812C2.80469 12.3984 4.10938 13.8281 6 13.8281C7.71094 13.8281 8.79688 12.7969 8.82812 11.1875H6.20312V9.57812H10.7969V10.9375C10.7969 13.8516 8.79688 15.6562 6 15.6562C2.875 15.6562 0.757812 13.4297 0.765625 9.84375C0.757812 6.21094 2.97656 4.03125 5.9375 4.03125C8.42969 4.03125 10.3594 5.57812 10.7031 7.79688H8.625Z'
										fill='#AB2121'
									/>
									<line x1='28.25' y1='1' x2='28.25' y2='19' stroke='#A0A0A0' strokeOpacity='0.5' strokeWidth='0.5' />
								</svg>
							}
							variant='outline'
							fullWidth
							className='justify-start'
							onClick={handleGoogleLogin}
						>
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
