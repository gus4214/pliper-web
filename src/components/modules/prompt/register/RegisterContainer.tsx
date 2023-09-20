import RegisterForm from '@/src/components/modules/prompt/register/RegisterForm';
import RegisterHeader from '@/src/components/modules/prompt/register/RegisterHeader';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import { Button } from 'react-daisyui';

export interface PromptRegisterFormData {
	title: string;
	personaType: string;
	category1Code: string;
	category2Code: string[];
	limModel: string;
	description: string;
	template: string;
}

const RegisterContainer = () => {
	const formHandler = useForm<PromptRegisterFormData>({
		mode: 'onChange',
		// resolver: yupResolver(schema),
		defaultValues: {
			title: '',
			personaType: '',
			category1Code: '',
			limModel: '',
			description: '',
			template: '',
			category2Code: [],
		},
	});

	return (
		<div className='w-[1200px] pt-6 pb-[67px] bg-white flex-col justify-start gap-6 flex'>
			<RegisterHeader />
			<AsyncComponentBoundary>
				<RegisterForm formHandler={formHandler} />
			</AsyncComponentBoundary>
			<div className='flex justify-center items-center gap-3'>
				<Button color='ghost' variant='outline' className='bg-white rounded border border-neutral-200'>
					<span className='text-neutral-400 text-sm font-medium'>닫기</span>
				</Button>
				<Button color='accent' className='rounded'>
					<span className='text-white text-sm font-medium'>프롬프트 생성하기</span>
				</Button>
			</div>
		</div>
	);
};

export default RegisterContainer;
