import RegisterForm from '@/src/components/modules/prompt/register/RegisterForm';
import RegisterHeader from '@/src/components/modules/prompt/register/RegisterHeader';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';

export interface PromptRegisterFormData {
	title: string;
	personaType: string;
	category1Code: string;
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
		},
	});

	return (
		<div className='w-[1200px] pt-6 bg-white flex-col justify-start gap-6 flex'>
			<RegisterHeader />
			<AsyncComponentBoundary>
				<RegisterForm formHandler={formHandler} />
			</AsyncComponentBoundary>
		</div>
	);
};

export default RegisterContainer;
