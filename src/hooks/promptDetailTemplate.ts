import { Parameter } from '@/src/fetchers/prompt/types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface PromptTemplateCreateProps {
	parameters: Parameter[];
	template?: string;
}

export const usePromptTemplateCreate = ({ parameters = [], template }: PromptTemplateCreateProps) => {
	const [filledTemplate, setFilledTemplate] = useState('');

	const formHandler = useForm({
		mode: 'onChange',
		defaultValues: parameters?.reduce(
			(acc, parameter) => {
				acc[parameter.title] = ''; // 각 parameter의 기본값을 빈 문자열로 설정
				return acc;
			},
			{} as Record<string, string>
		),
	});

	const { getValues } = formHandler;

	const createPrompt = () => {
		let newTemplate = template;

		// parameters에 따라 템플릿을 채워넣는 로직
		parameters.forEach((parameter) => {
			const value = getValues()[parameter.title]; // form에서 해당 title의 값을 가져옵니다.
			const placeholder = `{{${parameter.title}}}`;
			newTemplate = newTemplate?.replace(placeholder, value);
		});

		setFilledTemplate(newTemplate + ''); // 채워진 템플릿을 상태에 업데이트
	};

	return {
		filledTemplate,
		formHandler,
		createPrompt,
	};
};
