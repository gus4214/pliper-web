import SelectChip from '@/src/components/atoms/chip/SelectChip';
import FormInput from '@/src/components/modules/@common/form/FormInput';
import FormToggleChipCodeGroup from '@/src/components/modules/@common/form/FormToggleChipCodeGroup';
import FormToggleMultiChipGroup from '@/src/components/modules/@common/form/FormToggleMultiChipGroup';
import PromptTemplateSectionItem from '@/src/components/modules/prompt/detail/PromptTemplateSectionItem';
import { Parameter } from '@/src/fetchers/prompt/types';
import { stringToArray } from '@/src/utils/conversionUtils';
import React, { useState } from 'react';
import { Button, Input, Select, Textarea } from 'react-daisyui';
import { Controller, useForm } from 'react-hook-form';

interface PromptTemplateSectionProps {
	parameters: Parameter[];
	template: string;
}

const PromptTemplateSection: React.FC<PromptTemplateSectionProps> = ({ parameters, template }) => {
	const formHandler = useForm<Record<string, string>>({
		mode: 'onChange',
		defaultValues: parameters.reduce(
			(acc, parameter) => {
				acc[parameter.title] = ''; // 각 parameter의 기본값을 빈 문자열로 설정
				return acc;
			},
			{} as Record<string, any>
		),
	});

	const { control, getValues } = formHandler;
	const [filledTemplate, setFilledTemplate] = useState('');

	const createPrompt = () => {
		let newTemplate = template;

		// parameters에 따라 템플릿을 채워넣는 로직
		parameters.forEach((parameter) => {
			const value = getValues()[parameter.title]; // form에서 해당 title의 값을 가져옵니다.
			const placeholder = `{{${parameter.title}}}`;
			newTemplate = newTemplate.replace(placeholder, value);
		});

		setFilledTemplate(newTemplate); // 채워진 템플릿을 상태에 업데이트
	};

	return (
		<div className='flex flex-col gap-6'>
			<div className='flex gap-4 w-full'>
				<div className='flex flex-col gap-4'>
					<h1 className='pl-2 text-neutral-400 text-sm font-medium'>입력값</h1>
					<div className='flex flex-col gap-2 w-[556px]'>
						{parameters.map((parameter, i) => {
							let element; // 이 변수에 각 type에 따른 컴포넌트를 저장할 예정입니다.

							switch (parameter.type) {
								case '텍스트':
									element = (
										<FormInput
											name={parameter.title}
											control={control}
											inputProps={{ placeholder: parameter.description, className: 'w-full' }}
										/>
									);
									break;
								case '선택':
									element = (
										<Controller
											name={parameter.title}
											control={control}
											render={({ field }) => (
												<Select {...field}>
													<Select.Option value={'선택하기'}>선택하기</Select.Option>
													{(stringToArray(parameter.typeValues) as any).map((typeValue: string, i: string) => (
														<Select.Option key={i} value={typeValue}>
															{typeValue}
														</Select.Option>
													))}
												</Select>
											)}
										/>
									);
									break;
								case '중복 선택':
									element = (
										<FormToggleMultiChipGroup
											name={parameter.title}
											control={control}
											options={parameter.typeValues.split(',').map((value) => ({ code: value, label: value }))}
											color='secondary'
											className='w-full flex flex-wrap'
											chipClassName='bg-white whitespace-nowrap'
										/>
									);
									break;
								default:
									element = null;
							}

							return (
								<PromptTemplateSectionItem
									key={i}
									title={parameter.title}
									element={element} // 변경된 element를 여기에 전달합니다.
								/>
							);
						})}
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<h1 className='pl-2 text-neutral-400 text-sm font-medium'>프롬프트</h1>
					<Textarea
						value={filledTemplate}
						className='w-[556px] h-72 border-8 border-neutral-100'
						bordered={false}
						placeholder='생성 버튼 누를 시 왼쪽 입력값 기반으로 해당 프롬프트가 작성됩니다.'
					/>
				</div>
			</div>
			<div className='w-full h-[72px] p-4 bg-sky-200 bg-opacity-10 rounded-lg justify-between items-center flex'>
				<div className='justify-end items-center flex'>
					<span className='text-neutral-400 text-xs font-normal'>좋아요</span>
					<Button onClick={createPrompt}>생성하기</Button>
				</div>
			</div>
		</div>
	);
};

export default PromptTemplateSection;
