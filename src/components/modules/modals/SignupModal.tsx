import React, { useState } from 'react';
import { Modal, Button, Input } from 'react-daisyui';
import { useForm } from 'react-hook-form';
import { UseFormGetValues } from 'react-hook-form';

interface SignupModalProps {}

const SignupModal: React.FC<SignupModalProps> = () => {
	const [signupVisible, setSignupVisible] = useState<boolean>(true);

	const formHandler = useForm<{ job: string; nickname: string }>({
		mode: 'onChange',
		defaultValues: {
			job: '학생',
			nickname: '',
		},
	});

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors, isValid },
	} = formHandler;

	const selectedJob = watch('job');

	const toggleSignupVisible = () => {
		setSignupVisible(!signupVisible);
	};

	return (
		<Modal.Legacy
			open={signupVisible}
			onClickBackdrop={toggleSignupVisible}
			className='max-w-screen-sm flex flex-col justify-center  rounded-2xl bg-white p-20 gap-12 w-[560px]'
		>
			<div>
				<h1 className='text-center text-3xl text-black font-bold'>시작 전 프롬프트 추천해드려요!</h1>
			</div>
			<div className='flex-col justify-center gap-8 flex'>
				<div className='flex-col gap-3 flex'>
					<span className='text-black text-sm'>어떤 일을 하고 있나요?</span>
					<div className='w-[400px] flex flex-wrap gap-2'>
						{['학생', '개발', '마케팅', '창작(작가, 블로그)', '기획', '기타'].map((job) => (
							<Button
								key={job}
								size='md'
								color='neutral'
								variant={selectedJob === job ? undefined : 'outline'}
								className='w-[196px]'
								onClick={() => setValue('job', job)}
							>
								{job}
							</Button>
						))}
					</div>
				</div>
				<div className='form-control flex-col gap-3 flex'>
					<label>
						<span className='text-black text-sm'>닉네임을 입력해주세요.</span>
					</label>
					<Input
						placeholder='최대 8자로 입력해주세요'
						{...register('nickname', {
							required: true,
							maxLength: 8,
						})}
					/>
				</div>
				<Button fullWidth color='neutral'>
					플리퍼 시작하기
				</Button>
			</div>
		</Modal.Legacy>
	);
};

export default SignupModal;
