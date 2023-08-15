import { temporaryTokenKey } from '@/src/configs/auth';
import { registerUserApi } from '@/src/fetchers/auth';
import BlankLayout from '@/src/layouts/BlankLayout';
import { getCookie } from '@/src/utils/cookie';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { Button, Card, Input } from 'react-daisyui';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { userCategory } from '@/src/configs/signup';

interface FormData {
	taste: string[];
	nickname: string;
}

const schema = yup.object().shape({
	taste: yup.array().required(),
	nickname: yup.string().required('닉네임 입력은 필수입니다.').max(8, '닉네임이 너무 깁니다.'),
});

const SignupPage: NextPage = () => {
	const router = useRouter();

	const formHandler = useForm<FormData>({
		mode: 'onChange',
		resolver: yupResolver(schema),
		defaultValues: {
			taste: [],
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

	const selectedJobs = watch('taste');

	const addOrRemoveJob = (key: string) => {
		if (selectedJobs?.includes(key)) {
			setValue(
				'taste',
				selectedJobs.filter((j) => j !== key)
			);
		} else if (selectedJobs!.length < 3) {
			setValue('taste', [...selectedJobs!, key]);
		}
	};

	const btnActive = isValid;

	const temporaryToken = getCookie(temporaryTokenKey);

	const onSubmit = async (data: any) => {
		const result = await registerUserApi(data, temporaryToken);
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
								{Object.entries(userCategory).map(([key, value]) => (
									<Button
										key={key}
										size='md'
										color='neutral'
										variant={selectedJobs?.includes(key) ? undefined : 'outline'}
										className='w-[196px]'
										onClick={() => addOrRemoveJob(key)}
									>
										{value}
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
						<Button fullWidth color='neutral' disabled={!btnActive}>
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
