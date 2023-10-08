import FormTextarea from '@/src/components/modules/@common/form/FormTextarea';
import { PromptRegisterFormData } from '@/src/components/modules/prompt/register/RegisterFormContainer';
import LabelWithTemplateFormElement from '@/src/components/modules/prompt/register/form/elements/LabelWithTemplateFormElement';
import OptionInputComponent from '@/src/components/modules/prompt/register/form/elements/OptionInputComponent';
import { parametersAtom, templateValueAtom } from '@/src/stores/prompt/register';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { Input, Select } from 'react-daisyui';
import { UseFormReturn } from 'react-hook-form';

interface RegisterFormPromptTemplateProps {
	formHandler: UseFormReturn<PromptRegisterFormData>;
}

const RegisterFormPromptTemplate: React.FC<RegisterFormPromptTemplateProps> = ({ formHandler }) => {
	const { control } = formHandler;

	// const [templateValue, setTemplateValue] = useState<string>('');
	// const [parameters, setParameters] = useState<Array<{ description: string; title: string; type: string; typeValues?: string[] }>>([]);
	const [templateValue, setTemplateValue] = useAtom(templateValueAtom);
	const [parameters, setParameters] = useAtom(parametersAtom);

	const regex = /{{(.*?)}}/g;

	const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value;
		setTemplateValue(value);

		const matches = value.match(regex);
		if (matches) {
			const newTitles = matches.map((match) => match.replace('{{', '').replace('}}', ''));

			const newParameters = newTitles.map((title) => {
				// 기존 파라미터 중 일치하는 title을 찾습니다.
				const existingParam = parameters.find((param) => param.title === title);

				// 일치하는 title이 있으면 기존 값을 사용하고, 그렇지 않으면 새로운 객체를 생성합니다.
				return existingParam || { description: '', title, type: '', typeValues: [] };
			});

			setParameters(newParameters);
		} else {
			setParameters([]);
		}
	};

	const handleSelectChange = (index: number, type: string) => {
		const updatedParameters = [...parameters];
		updatedParameters[index].type = type;
		setParameters(updatedParameters);
	};

	const handleTypeValuesChange = (index: number, value: string) => {
		const updatedParameters = [...parameters];

		// rightElement의 Input에서 입력한 값을 description에 저장
		updatedParameters[index].description = value;

		setParameters(updatedParameters);
	};

	const handleOptionValuesChange = (index: number, values: string[]) => {
		const updatedParameters = [...parameters];
		updatedParameters[index].typeValues = values;
		setParameters(updatedParameters);
	};

	return (
		<div className='w-full flex flex-col'>
			<FormTextarea
				control={control}
				name='template'
				inputProps={{
					placeholder: '템플릿으로 생성할 프롬프트를 입력해주세요 {{제목}}',
					rows: 5,
					value: templateValue,
					onChange: handleTextareaChange,
				}}
			/>
			<span className='text-neutral-600 text-sm font-normal pt-3'>
				{`➡️ 템플릿에 입력값으로 넣고 싶을 경우 {{ 파라미터 }} 형태로 넣어주세요`}
			</span>
			<div className='flex flex-col gap-2 pt-8'>
				{/* parameter가 있을 경우에만 LabelWithTemplateFormElement 렌더링 */}
				{parameters.map((param, index) => (
					<LabelWithTemplateFormElement
						key={index}
						leftLabel={param.title}
						leftElement={
							<Select value={param.type} onChange={(event) => handleSelectChange(index, event.target.value)}>
								<Select.Option value={''}>파라미터 타입 선택</Select.Option>
								<Select.Option value={'텍스트'}>텍스트</Select.Option>
								<Select.Option value={'선택'}>선택</Select.Option>
								<Select.Option value={'중복 선택'}>중복 선택</Select.Option>
							</Select>
						}
						rightElement={
							param.type === '텍스트' ? (
								<Input
									className='w-[442px] bg-white rounded border border-neutral-200'
									onChange={(e) => handleTypeValuesChange(index, e.target.value)}
								/>
							) : param.type === '선택' || param.type === '중복 선택' ? (
								<OptionInputComponent onValuesChange={(values) => handleOptionValuesChange(index, values)} />
							) : null
						}
					/>
				))}
			</div>
		</div>
	);
};

export default RegisterFormPromptTemplate;
