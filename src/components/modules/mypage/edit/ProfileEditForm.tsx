import GoBackToMyPageButton from '@/src/components/atoms/buttons/GoBackToMyPageButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormInput from '@/src/components/modules/@common/form/FormInput';
import { Button, Input } from 'react-daisyui';
import { userCategory } from '@/src/configs/signup';
import { RegisterUserRequest, updateUserProfileApi } from '@/src/fetchers/auth';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/src/hooks/context';
import { useConfirmModal, useFailModal } from '@/src/hooks/modal';
import { useSetAtom } from 'jotai';
import { updateProfileAtom } from '@/src/stores/auth/actions/updateUserProfile';
import { serverErrorText } from '@/src/utils/lang';

interface FormData {
	taste: string[];
	nickname: string;
	etcTaste?: string;
}

const schema = yup.object().shape({
	taste: yup.array().required(),
	nickname: yup.string().required('닉네임 입력은 필수입니다.').max(10, '닉네임이 너무 깁니다.'),
});

const ProfileEditForm = () => {
	const router = useRouter();
	const [open, close] = useConfirmModal();
	const failOpen = useFailModal();
	const { user } = useAuthContext();
	const setUserInfo = useSetAtom(updateProfileAtom);
	const {
		control,
		setValue,
		watch,
		handleSubmit,
		formState: { isValid },
	} = useForm<FormData>({
		mode: 'onChange',
		resolver: yupResolver(schema),
		defaultValues: {
			taste: [],
			nickname: user?.nickname || '',
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
		open({
			title: '프로필을 수정하시겠어요?',
			description: '작성하신 내용으로 프로필이 수정됩니다.',
			onConfirm: async ({ loading, clearLoading }) => {
				loading!();
				const result = await updateUserProfileApi(data);
				if (result.isError) {
					failOpen({
						title: '정보 수정에 실패했습니다.',
						description: serverErrorText(result),
					});
					clearLoading!();
					return;
				}
				setUserInfo({
					nickname: result.nickname,
					taste: result.taste,
				});
				close();
				router.push('/mypage/profile');
			},
		});
	};

	return (
		<form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
			<div className='w-[400px] flex flex-col gap-6 pt-10'>
				<FormInput
					control={control}
					name='nickname'
					inputProps={{ placeholder: '최대 10자로 입력해주세요' }}
					label={'닉네임을 입력해주세요.'}
				/>
				<div className='flex-col gap-3 flex'>
					<span className='text-black text-sm'>어떤 일을 하고 있나요?</span>
					<div className='w-[400px] flex flex-wrap gap-2'>
						{Object.entries(userCategory).map(([key, value]) => (
							<Button
								key={key}
								type='button'
								size='md'
								color='neutral'
								variant={selectedJobs?.includes(value) ? undefined : 'outline'}
								className='w-[196px]'
								onClick={() => addOrRemoveJob(value)}
							>
								{value}
							</Button>
						))}
					</div>
					{/* {selectedJobs.includes('기타') && <Input placeholder='기타로 체크하실 경우 입력해주세요' />} */}
				</div>
				<Button fullWidth color='neutral' disabled={!buttonActive} type='submit'>
					프로필 수정하기
				</Button>
			</div>
		</form>
	);
};

export default ProfileEditForm;
