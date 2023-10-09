import RegisterForm from '@/src/components/modules/prompt/register/form/RegisterForm';
import RegisterHeader from '@/src/components/modules/prompt/register/RegisterHeader';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import { Button } from 'react-daisyui';
import { useAtomValue } from 'jotai';
import { parametersAtom, templateValueAtom } from '@/src/stores/prompt/register';
import { registerPromptApi } from '@/src/fetchers/prompt';
import { Parameter } from '@/src/fetchers/prompt/types';

export interface PromptRegisterFormData {
	title: string;
	personaType: string;
	category1Text: string;
	category2Text: string;
	llmModel: string;
	description: string;
	show: boolean;
}

const RegisterFormContainer = () => {
	const formHandler = useForm<PromptRegisterFormData>({
		mode: 'onChange',
		// resolver: yupResolver(schema),
		defaultValues: {
			category1Text: '',
			category2Text: '',
			description: '',
			llmModel: '',
			personaType: '',
			show: true,
			title: '',
		},
	});

	const { handleSubmit } = formHandler;

	const parameters = useAtomValue(parametersAtom);
	const template = useAtomValue(templateValueAtom);

	const onSubmit = async (data: PromptRegisterFormData) => {
		const result = await registerPromptApi({ ...data, template, parameters });
		console.log('🚀 ~ file: RegisterFormContainer.tsx:45 ~ onSubmit ~ result:', result);
	};

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
				<Button color='accent' className='rounded' onClick={handleSubmit(onSubmit)}>
					<span className='text-white text-sm font-medium'>프롬프트 생성하기</span>
				</Button>
			</div>
		</div>
	);
};

export default RegisterFormContainer;
