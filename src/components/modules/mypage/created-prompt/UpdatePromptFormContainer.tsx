import RegisterForm from '@/src/components/modules/prompt/register/form/RegisterForm';
import { Prompt } from '@/src/fetchers/prompt/types';
import usePromptRegisterForm from '@/src/hooks/promptRegisterForm';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'react-daisyui';

interface UpdatePromptFormContainerProps {
	data: Prompt;
}

const UpdatePromptFormContainer: React.FC<UpdatePromptFormContainerProps> = ({ data }) => {
	const router = useRouter();
	const { formHandler, onUpdateSubmit, handleSaveTemporarily } = usePromptRegisterForm(data);

	return (
		<RegisterForm
			formHandler={formHandler}
			action={
				<div className='flex justify-center items-center gap-3'>
					<Button
						color='ghost'
						variant='outline'
						className='bg-white rounded border border-neutral-200'
						onClick={() => {
							router.push('/mypage/created-prompt');
						}}
					>
						<span className='text-neutral-400 text-sm font-medium'>닫기</span>
					</Button>
					<Button color='accent' className='rounded' onClick={onUpdateSubmit}>
						<span className='text-white text-sm font-medium'>프롬프트 수정하기</span>
					</Button>
				</div>
			}
		/>
	);
};

export default UpdatePromptFormContainer;
