import React from 'react';
import FormTextarea from '@/src/components/modules/@common/form/FormTextarea';
import { PromptRegisterFormData } from '@/src/components/modules/prompt/register/RegisterFormContainer';
import { useState } from 'react';
import { Button, Input, Select } from 'react-daisyui';
import { UseFormReturn } from 'react-hook-form';
import { X } from 'heroicons-react';
import LabelWithTemplateFormElement from '@/src/components/modules/prompt/register/form/elements/LabelWithTemplateFormElement';

interface RegisterFormPromptTemplateProps {
	formHandler: UseFormReturn<PromptRegisterFormData>;
}

const RegisterFormPromptTemplate: React.FC<RegisterFormPromptTemplateProps> = ({ formHandler }) => {
	const { control } = formHandler;

	const [templateValue, setTemplateValue] = useState<string>('');
	const [parameters, setParameters] = useState<Array<{ description: string; title: string; type: string; typeValues?: string[] }>>([]);

	const regex = /{{(.*?)}}/g;

	const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value;
		setTemplateValue(value);

		const matches = value.match(regex);
		if (matches) {
			const newParameters = matches.map((match) => ({
				description: value,
				title: match.replace('{{', '').replace('}}', ''),
				type: '',
				typeValues: [],
			}));
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
							<div className='py-2 bg-neutral-100 rounded justify-start items-center gap-2 flex '>
								<div className='relative w-full'>
									<Input className='w-[112px] pl-4 pr-8 py-2 bg-white rounded border border-neutral-200' placeholder='옵션값1' />
									<X className='absolute top-[15px] right-3 w-5 h-5 text-neutral-400 cursor-pointer' />
								</div>
								<div className='relative w-full'>
									<Input className='w-[112px] pl-4 pr-8 py-2 bg-white rounded border border-neutral-200' placeholder='옵션값2' />
									<X className='absolute top-[15px] right-3 w-5 h-5 text-neutral-400 cursor-pointer' />
								</div>
								<div className='relative w-full'>
									<Input className='w-[112px] pl-4 pr-8 py-2 bg-white rounded border border-neutral-200' placeholder='옵션값2' />
									<X className='absolute top-[15px] right-3 w-5 h-5 text-neutral-400 cursor-pointer' />
								</div>
								<Button className='bg-neutral-200'>추가</Button>
							</div>
						}
					/>
				))}
			</div>
		</div>
	);
};

export default RegisterFormPromptTemplate;
