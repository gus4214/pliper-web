import { registerUserApi } from '@/src/fetchers/auth';
import BlankLayout from '@/src/layouts/BlankLayout';
import { getCookie } from '@/src/utils/cooke';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { Button, Card, Input } from 'react-daisyui';
import { useForm } from 'react-hook-form';

const SignupPage: NextPage = () => {
	const router = useRouter();

	const formHandler = useForm<{ taste: string; nickname: string }>({
		mode: 'onChange',
		defaultValues: {
			taste: 'student',
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

	const selectedJob = watch('taste');
	const nickName = watch('nickname');

	const ephemeralToken = getCookie('ephemeralToken');

	const onSubmit = async (data: any) => {
		const result = await registerUserApi({ taste: ['student'], nickname: '이현범' }, ephemeralToken);
	};

	return (
		<div className='w-full h-screen flex flex-col justify-center items-center'>
			<form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
				<Card bordered className='w-[560px] h-[610px] shadow rounded-2xl bg-white p-20 gap-12'>
					<div>
						<h1 className='text-center text-3xl text-black font-bold'>시작 전 프롬프트 추천해드려요!</h1>
					</div>
					<div className='flex-col justify-center gap-8 flex'>
						<div className='flex-col gap-3 flex'>
							<span className='text-black text-sm'>어떤 일을 하고 있나요?</span>
							<div className='w-[400px] flex flex-wrap gap-2'>
								{['student', '개발', '마케팅', '창작(작가, 블로그)', '기획', '기타'].map((job) => (
									<Button
										key={job}
										size='md'
										color='neutral'
										variant={selectedJob === job ? undefined : 'outline'}
										className='w-[196px]'
										onClick={() => setValue('taste', job)}
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
				</Card>
			</form>
		</div>
	);
};

SignupPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default SignupPage;
