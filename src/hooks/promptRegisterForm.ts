import { updateMyPromptApi } from './../fetchers/prompt/my-prompt';
import { registerPromptApi } from '@/src/fetchers/prompt';
import {PersonaType, Prompt} from '@/src/fetchers/prompt/types';
import { useConfirmModal } from '@/src/hooks/modal';
import { parametersAtom, templateValueAtom } from '@/src/stores/prompt/register';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export interface PromptRegisterFormData {
	title: string;
	personaType: PersonaType;
	category1Text: string;
	category2Text: string;
	llmModel: string;
	description: string;
	show: boolean;
}

const usePromptRegisterForm = (data?: Prompt) => {
	const promptId = data?.promptId;
	const formHandler = useForm<PromptRegisterFormData>({
		mode: 'onChange',
		defaultValues: {
			category1Text: data?.category1Text || '',
			category2Text: data?.category2Text || '',
			description: data?.description || '',
			llmModel: data?.llmModel || '',
			personaType: data?.personaType || 'JOB',
			show: data?.show || true,
			title: data?.title || '',
		},
	});
	const { handleSubmit, getValues } = formHandler;
	const router = useRouter();
	const [open, close] = useConfirmModal();

	const [parameters, setParameters] = useAtom(parametersAtom);
	const [template, setTemplate] = useAtom(templateValueAtom);

	const onRegisterSubmit = async (data: PromptRegisterFormData) => {
		open({
			title: '프롬프트 템플릿 생성하시겠어요?',
			description: '작성하신 내용으로 템플릿이 생성됩니다.',
			onConfirm: async () => {
				try {
					const result = await registerPromptApi({ ...data, template, parameters });
					if (data.show) {
						router.push(`/prompt/${result.promptId}`);
					} else {
						router.push(`/mypage/created-prompt`);
					}
					localStorage.removeItem('temporaryPromptTemplate');
					setTemplate('');
					setParameters([]);
					close();
				} catch (error) {
					console.error('Error in RegisterPromptApi:', error);
				}
			},
		});
	};

	const onUpdateSubmit = async (data: PromptRegisterFormData) => {
		open({
			title: '프롬프트 템플릿의 내용을 수정하시겠어요?',
			description: '작성하신 내용으로 템플릿이 수정됩니다.',
			onConfirm: async () => {
				try {
					const result = await updateMyPromptApi({ ...data, template, parameters }, promptId!);
					if (data.show) {
						router.push(`/prompt/${result.promptId}`);
					} else {
						router.push(`/mypage/created-prompt`);
					}
					setTemplate('');
					setParameters([]);
					close();
				} catch (error) {
					console.error('Error in updateMyPromptApi:', error);
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
		if (data) {
			setTemplate(data.template);
			setParameters(data.parameters);
			return;
		}

		if (temporaryDataString) {
			const temporaryData = JSON.parse(temporaryDataString);
			formHandler.reset(temporaryData.formValues);
			setTemplate(temporaryData.template);
			setParameters(temporaryData.parameters);
			return;
		}
	}, []);

	const handleSaveTemporarily = () => {
		open({
			title: '템플릿을 임시저장 하시겠어요?',
			description: '작성하신 내용의 템플릿을 임시저장 합니다.',
			onConfirm: () => {
				saveTemporarily();
				close();
				router.back();
			},
			onCancel: () => {
				localStorage.removeItem('temporaryPromptTemplate');
				setTemplate('');
				setParameters([]);
				router.back();
			},
		});
	};

	return {
		formHandler,
		onRegisterSubmit: handleSubmit(onRegisterSubmit),
		onUpdateSubmit: handleSubmit(onUpdateSubmit),
		handleSaveTemporarily,
	};
};

export default usePromptRegisterForm;
