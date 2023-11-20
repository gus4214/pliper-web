import { updateMyPromptApi } from './../fetchers/prompt/my-prompt';
import { registerPromptApi } from '@/src/fetchers/prompt';
import { Parameter, PersonaType, Prompt } from '@/src/fetchers/prompt/types';
import { useConfirmModal } from '@/src/hooks/modal';
import { parametersAtom, templateValueAtom } from '@/src/stores/prompt/register';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useAppToast } from '@/src/hooks/toast';
import ToastPlipIcon from '@/src/components/atoms/icons/ToastPlipIcon';

export interface PromptRegisterFormData {
	title: string;
	personaType: PersonaType;
	category1Text: string;
	category2Text: string;
	llmModel: string;
	description: string;
	show: boolean;
	template: string;
}

const schema = yup.object().shape({
	title: yup.string().required('제목은 필수값입니다').max(100, '100자 이내로 작성해주세요'),
	personaType: yup
		.mixed<PersonaType>()
		.oneOf(['DAILY', 'JOB'] as const, '페르소나는 필수값입니다')
		.required(),
	category1Text: yup.string().required('카테고리는 필수값입니다'),
	category2Text: yup.string().required('하위 카테고리는 필수값입니다'),
	llmModel: yup.string().required('AI 모델은 필수값입니다'),
	description: yup.string().required('소개는 필수값입니다').max(500, '500자 이내로 작성해주세요'),
	template: yup.string().required('프롬프트 템플릿은 필수값입니다').max(3000, '3,000자 이내로 작성해주세요'),
	show: yup.boolean().required(),
});

const usePromptRegisterForm = (data?: Prompt) => {
	const promptId = data?.promptId;

	const [parameters, setParameters] = useAtom(parametersAtom);
	const { openToast } = useAppToast();

	const [open, close] = useConfirmModal();
	const router = useRouter();
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
			template: data?.template || '',
		},
		resolver: yupResolver(schema),
	});
	const { handleSubmit, getValues } = formHandler;

	const onRegisterSubmit = async (data: PromptRegisterFormData) => {
		open({
			title: '프롬프트 템플릿 생성하시겠어요?',
			description: '작성하신 내용으로 템플릿이 생성됩니다.',
			onConfirm: async () => {
				try {
					const result = await registerPromptApi({ ...data, parameters });
					if (data.show) {
						router.push(`/prompt/${result.promptId}`);
					} else {
						router.push(`/mypage/created-prompt`);
					}
					localStorage.removeItem('temporaryPromptTemplate');
					//setTemplate('');
					setParameters([]);
					close();
					openToast({
						message: '프롬프트 템플릿을 생성했습니다!',
						open: true,
						icon: <ToastPlipIcon />,
					});
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
					const result = await updateMyPromptApi({ ...data, parameters }, promptId!);
					if (data.show) {
						router.push(`/prompt/${result.promptId}`);
					} else {
						router.push(`/mypage/created-prompt`);
					}
					//setTemplate('');
					setParameters([]);
					close();
					openToast({
						message: '프롬프트 템플릿을 수정했습니다!',
						open: true,
						icon: <ToastPlipIcon />,
					});
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
			//template,
			parameters,
		};

		localStorage.setItem('temporaryPromptTemplate', JSON.stringify(temporaryData));
	};

	useEffect(() => {
		// 페이지가 로딩되면 임시 저장된 데이터를 불러옵니다.
		const temporaryDataString = localStorage.getItem('temporaryPromptTemplate');
		if (data) {
			//setTemplate(data.template);
			setParameters(data.parameters);
			return;
		} else {
			setParameters([]);
		}

		if (temporaryDataString) {
			const temporaryData = JSON.parse(temporaryDataString);
			formHandler.reset(temporaryData.formValues);
			//setTemplate(temporaryData.template);
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
				//setTemplate('');
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
