import RegisterForm from '@/src/components/organisms/prompt/register/form/RegisterForm';
import usePromptRegisterForm from '@/src/hooks/promptRegisterForm';
import { Button } from 'react-daisyui';

const RegisterFormContainer = () => {
	const { formHandler, onRegisterSubmit, handleSaveTemporarily } = usePromptRegisterForm();

	return (
		<>
			<RegisterForm
				formHandler={formHandler}
				action={
					<div className='flex items-center justify-between gap-3'>
						<Button
							className='text-lg font-medium bg-white border rounded border-neutral-200 text-neutral-400'
							onClick={handleSaveTemporarily}
						>
							뒤로가기
						</Button>
						<Button
							color='accent'
							className='h-12 text-lg font-medium text-white rounded'
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
