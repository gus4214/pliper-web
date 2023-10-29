import RegisterForm from '@/src/components/modules/prompt/register/form/RegisterForm';
import usePromptRegisterForm from '@/src/hooks/promptRegisterForm';
import { Button } from 'react-daisyui';

const RegisterFormContainer = () => {
	const { formHandler, onSubmit, onCancelButtonClick } = usePromptRegisterForm();

	return (
		<RegisterForm
			formHandler={formHandler}
			action={
				<div className='flex justify-center items-center gap-3'>
					<Button color='ghost' variant='outline' className='bg-white rounded border border-neutral-200' onClick={onCancelButtonClick}>
						<span className='text-neutral-400 text-sm font-medium'>닫기</span>
					</Button>
					<Button color='accent' className='rounded' onClick={onSubmit}>
						<span className='text-white text-sm font-medium'>프롬프트 생성하기</span>
					</Button>
				</div>
			}
		/>
	);
};

export default RegisterFormContainer;
