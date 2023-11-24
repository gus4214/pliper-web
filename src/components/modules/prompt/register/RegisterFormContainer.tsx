import RegisterForm from '@/src/components/modules/prompt/register/form/RegisterForm';
import usePromptRegisterForm from '@/src/hooks/promptRegisterForm';
import { Button } from 'react-daisyui';

const RegisterFormContainer = () => {
	const { formHandler, onRegisterSubmit, handleSaveTemporarily } = usePromptRegisterForm();

	return (
		<>
			<RegisterForm
				formHandler={formHandler}
				action={
					<div className='flex justify-between items-center gap-3'>
						<Button
							className='bg-white rounded border border-neutral-200 text-neutral-400 text-lg font-medium'
							onClick={handleSaveTemporarily}
						>
							뒤로가기
						</Button>
						<Button
							color='accent'
							className='h-12 rounded text-white text-lg font-medium'
							onClick={onRegisterSubmit}
							disabled={!formHandler.formState.isValid}
						>
							프롬프트 등록하기
						</Button>
					</div>
				}
			/>
		</>
	);
};

export default RegisterFormContainer;
