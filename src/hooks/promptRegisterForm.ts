import { registerPromptApi } from '@/src/fetchers/prompt';
import { useConfirmModal } from '@/src/hooks/modal';
import { parametersAtom, templateValueAtom } from '@/src/stores/prompt/register';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export interface PromptRegisterFormData {
	title: string;
	personaType: string;
	category1Text: string;
	category2Text: string;
	llmModel: string;
	description: string;
	show: boolean;
}

const usePromptRegisterForm = () => {
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

	return {
		formHandler,
		onSubmit: handleSubmit(onSubmit),
		onCancelButtonClick,
	};
};

export default usePromptRegisterForm;
