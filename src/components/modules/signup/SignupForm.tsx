import FormInput from '@/src/components/modules/@common/form/FormInput';
import { temporaryTokenKey } from '@/src/configs/auth';
import { userCategory } from '@/src/configs/signup';
import { registerUserApi, RegisterUserRequest } from '@/src/fetchers/auth';
import { getCookie, saveAccessToken, saveRefreshToken } from "@/src/utils/cookie";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { Button, Card } from 'react-daisyui';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useAppToast } from '@/src/hooks/toast';
import ToastPlipIcon from '@/src/components/atoms/icons/ToastPlipIcon';
import mixpanel from 'mixpanel-browser';
import { JOIN } from '@/src/configs/mixpanel';

interface FormData {
	taste: string[];
	nickname: string;
}

const schema = yup.object().shape({
	taste: yup.array().required(),
	nickname: yup.string().required('닉네임 입력은 필수입니다.').max(10, '닉네임이 너무 깁니다.'),
});

const SignupForm = () => {
	const router = useRouter();
	const { openToast } = useAppToast();
	const temporaryToken = getCookie(temporaryTokenKey);
	const {
		control,
		handleSubmit,
		setValue,
		watch,
		formState: { isValid },
	} = useForm<FormData>({
		mode: 'onChange',
		resolver: yupResolver(schema),
		defaultValues: {
			taste: [],
			nickname: '',
		},
	});
	const selectedJobs = watch('taste');
	const buttonActive = isValid && selectedJobs.length >= 1;

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

	const onSubmit = async (data: RegisterUserRequest) => {
		const result = await registerUserApi(data, temporaryToken);
		if (result.token) {
			saveAccessToken(result.token, result.expiresIn);
			saveRefreshToken(result.refreshToken, result.refreshTokenExpiresIn);
			openToast({
				message: '플리퍼 회원가입이 완료되었습니다 🎉',
				open: true,
				icon: <ToastPlipIcon />,
			});
			mixpanel.track(JOIN);
			await router.replace('/');
		}
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
										className={`w-[196px] ${
											selectedJobs?.includes(value) ? 'bg-neutral-400' : 'bg-white'
										} rounded border border-neutral-200 ${
											selectedJobs?.includes(value) ? 'text-white' : 'text-black'
										} text-[15px] font-normal`}
										onClick={() => addOrRemoveJob(value)}
									>
										{value}
									</Button>
								))}
							</div>
						</div>
						<FormInput
							control={control}
							name='nickname'
							inputProps={{ placeholder: '최대 10자로 입력해주세요', className: 'rounded border border-neutral-200' }}
							label={'닉네임을 입력해주세요.'}
						/>
						<Button
							fullWidth
							disabled={!buttonActive}
							color='accent'
							className='rounded text-white text-base font-semibold disabled:bg-neutral-100 disabled:text-neutral-400 '
						>
							플리퍼 시작하기
						</Button>
					</div>
				</Card>
			</form>
		</div>
	);
};

export default SignupForm;
