import RegisterForm from '@/src/components/modules/prompt/register/form/RegisterForm';
import RegisterHeader from '@/src/components/modules/prompt/register/RegisterHeader';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import { Button } from 'react-daisyui';
import { useAtom, useAtomValue } from 'jotai';
import { parametersAtom, templateValueAtom } from '@/src/stores/prompt/register';
import { registerPromptApi } from '@/src/fetchers/prompt';
import { Parameter } from '@/src/fetchers/prompt/types';
import { useConfirmModal } from '@/src/hooks/modal';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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
		defaultValues: {
			category1Text: '',
			category2Text: '',
			description: '',
			llmModel: '',
			personaType: '업무',
			show: true,
			title: '',
		},
	});

	const { handleSubmit, getValues } = formHandler;

	const router = useRouter();

	const [open, close] = useConfirmModal();

	const [parameters, setParameters] = useAtom(parametersAtom);
	const [template, setTemplate] = useAtom(templateValueAtom);

	const onSubmit = async (data: PromptRegisterFormData) => {
		open({
			title: '프롬프트 템플릿 생성하시겠어요?',
			description: '작성하신 내용으로 템플릿이 생성됩니다.',
			onConfirm: async () => {
				try {
					const result = await registerPromptApi({ ...data, template, parameters });
					router.push(`/prompt/${result.promptId}`);
					close();
				} catch (error) {
					console.error('Error in RegisterPromptApi:', error);
				}
			},
		});
	};

	// 임시 저장 로직 구현
	const saveTemporarily = () => {
		const formValues = getValues();

		const temporaryData = {
			formValues,
			template,
			parameters,
		};

		localStorage.setItem('temporaryPromptTemplate', JSON.stringify(temporaryData));
	};

	useEffect(() => {
		// 페이지가 로딩되면 임시 저장된 데이터를 불러옵니다.
		const temporaryDataString = localStorage.getItem('temporaryPromptTemplate');

		if (temporaryDataString) {
			const temporaryData = JSON.parse(temporaryDataString);
			formHandler.reset(temporaryData.formValues);
			setTemplate(temporaryData.template);
			setParameters(temporaryData.parameters);
		}
	}, []);

	const onCancelButtonClick = () => {
		open({
			title: '템플릿을 임시저장 하시겠어요?',
			description: '작성하신 내용의 템플릿을 임시저장 합니다.',
			onConfirm: () => {
				saveTemporarily();
				router.back();
			},
			onCancel: () => {
				localStorage.removeItem('temporaryPromptTemplate');
				router.back();
			},
		});
	};

	return (
		<div className='w-[1200px] pt-6 pb-[67px] bg-white flex-col justify-start gap-6 flex'>
			<RegisterHeader />
			<AsyncComponentBoundary>
				<RegisterForm formHandler={formHandler} />
			</AsyncComponentBoundary>
			<div className='flex justify-center items-center gap-3'>
				<Button color='ghost' variant='outline' className='bg-white rounded border border-neutral-200' onClick={onCancelButtonClick}>
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
