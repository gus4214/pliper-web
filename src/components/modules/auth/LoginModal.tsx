import { googleAuthApi, naverAuthApi } from '@/src/fetchers/auth';
import React, { useState } from 'react';
import { Button, Modal } from 'react-daisyui';
import Link from 'next/link';
import {useRouter} from "next/router";

const webHost = process.env.NEXT_PUBLIC_WEB;

interface LoginModalProps {
	open: boolean;
	onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open = false, onClose }) => {
	const [errorMessage, setErrorMessage] = useState('');
	const router = useRouter();

	const handleGoogleLogin = async () => {
		try {
			const result = await googleAuthApi(`${webHost}/api/auth/google/callback${router.query.returnUrl ? `?returnUrl=${router.query.returnUrl}` : ''}`);
			window.location.href = result.url;
		} catch (error) {
			console.error('Error in NaverAuthApi:', error);
		}
	};

	const handleNaverLogin = async () => {
		try {
			const result = await naverAuthApi(
				`${webHost}/api/auth/naver/callback${router.query.returnUrl ? `?returnUrl=${router.query.returnUrl}` : ''}`
			);
			window.location.href = result.url;
		} catch (error) {
			console.error('Error in NaverAuthApi:', error);
		}
	};

	return (
		<>
			<Modal.Legacy
				aria-hidden="true"
				open={open}
				onClickBackdrop={onClose}
				className='max-w-screen-sm flex flex-col justify-center items-start rounded-2xl bg-white px-20 gap-8 w-[560px] h-[400px]'
			>
				<div className='w-[400px] flex flex-col justify-center items-center gap-4'>
					<h1 className='text-3xl text-black font-bold'>로그인 하기</h1>
					<span className='text-center text-black text-sm'>검증된 프롬프트를 한눈에 볼 수 있는 플리퍼에 오신것을 환영합니다</span>
				</div>
				<div className='w-[400px] flex flex-col justify-center gap-6'>
					<div className='flex flex-col justify-center gap-2'>
						<Button
							variant='outline'
							fullWidth
							className='justify-start hover:bg-[#439E22] naver-button border-neutral-200 hover:border-none'
							onClick={handleNaverLogin}
						>
							<div className='w-7 h-[19px] justify-start items-center gap-4 inline-flex'>
								<div className='text-[#439E22] text-base font-semibold naver-icon'>N</div>
								<div className='h-[18px] w-[0px] border-[0.5px] border-neutral-300'></div>
							</div>
							<span className='ml-[90px]'>네이버 계정으로 시작하기</span>
						</Button>

						<Button
							variant='outline'
							fullWidth
							className='justify-start hover:bg-[#454746] google-button border-neutral-200 hover:border-none'
							onClick={handleGoogleLogin}
						>
							<div className='w-7 h-[19px] justify-start items-center gap-4 inline-flex'>
								<div className='text-red-700 text-base font-semibold google-icon'>G</div>
								<div className='h-[18px] w-[0px] border-[0.5px] border-neutral-300'></div>
							</div>
							<span className='ml-[96px]'>구글 계정으로 시작하기</span>
						</Button>
					</div>
					<div className='w-[421px]'>
						<span className='text-neutral-600 text-[13px]'>
							계속 진행할경우{' '}
							<strong>
								<Link href={'/policy/542179ad-6c36-4d82-b993-9ddf871d49f9'} rel='noopener noreferrer' target='_blank'>
									개인정보처리방침
								</Link>
							</strong>{' '}
							및{' '}
							<strong>
								<Link href={'/policy/a573ca9d45e4426ebfbb6ef4ef128953'} rel='noopener noreferrer' target='_blank'>
									이용약관
								</Link>
							</strong>
							에 동의한 것으로 간주됩니다.
						</span>
					</div>
				</div>
			</Modal.Legacy>
		</>
	);
};

export default LoginModal;
