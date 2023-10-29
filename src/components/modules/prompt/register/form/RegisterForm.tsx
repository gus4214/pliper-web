import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import RegisterHeader from '@/src/components/modules/prompt/register/RegisterHeader';
import RegisterFormContents from '@/src/components/modules/prompt/register/form/RegisterFormContents';
import { PromptRegisterFormData } from '@/src/hooks/promptRegisterForm';
import { UseFormReturn } from 'react-hook-form';

interface RegisterFormProps {
	formHandler: UseFormReturn<PromptRegisterFormData>;
	action: React.ReactNode;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ formHandler, action }) => {
	return (
		<div className='w-[1200px] pt-6 pb-[67px] bg-white flex-col justify-start gap-6 flex'>
			<RegisterHeader />
			<AsyncComponentBoundary>
				<RegisterFormContents formHandler={formHandler} />
			</AsyncComponentBoundary>
			{action}
		</div>
	);
};

export default RegisterForm;
