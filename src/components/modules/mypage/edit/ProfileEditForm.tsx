import GoBackToMyPageButton from '@/src/components/atoms/buttons/GoBackToMyPageButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormInput from '@/src/components/modules/@common/form/FormInput';
import { Button } from 'react-daisyui';
import { userCategory } from '@/src/configs/signup';

interface FormData {
	taste: string[];
	nickname: string;
}

const schema = yup.object().shape({
	taste: yup.array().required(),
	nickname: yup.string().required('닉네임 입력은 필수입니다.').max(8, '닉네임이 너무 깁니다.'),
});

const ProfileEditForm = () => {
	const formHandler = useForm<FormData>({
		mode: 'onChange',
		resolver: yupResolver(schema),
		defaultValues: {
			taste: [],
			nickname: '',
		},
	});

	const {
		control,
		setValue,
		watch,
		formState: { isValid },
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
	return (
		<div className='w-[400px] flex flex-col gap-6 pt-10'>
			<FormInput control={control} name='nickname' inputProps={{ placeholder: '최대 8자로 입력해주세요' }} label={'닉네임을 입력해주세요.'} />
			<div className='flex-col gap-3 flex'>
				<span className='text-black text-sm'>어떤 일을 하고 있나요?</span>
				<div className='w-[400px] flex flex-wrap gap-2'>
					{Object.entries(userCategory).map(([key, value]) => (
						<Button
							key={key}
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
			</div>
			<Button fullWidth disabled={!isValid}>
				프로필 수정하기
			</Button>
		</div>
	);
};

export default ProfileEditForm;
