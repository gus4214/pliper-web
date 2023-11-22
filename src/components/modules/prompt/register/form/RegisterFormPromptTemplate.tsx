import LabelWithTemplateFormElement from '@/src/components/modules/prompt/register/form/elements/LabelWithTemplateFormElement';
import OptionInputComponent from '@/src/components/modules/prompt/register/form/elements/OptionInputComponent';
import { PromptRegisterFormData } from '@/src/hooks/promptRegisterForm';
import { parametersAtom, templateValueAtom } from '@/src/stores/prompt/register';
import { arrayToString } from '@/src/utils/conversionUtils';
import { useAtom } from 'jotai';
import React from 'react';
import { Input, Select } from 'react-daisyui';
import { UseFormReturn } from 'react-hook-form';
import FormTextarea from '@/src/components/modules/@common/form/FormTextarea';

interface RegisterFormPromptTemplateProps {
	formHandler: UseFormReturn<PromptRegisterFormData>;
}

const regex = /{{(.*?)}}/g;
const MAX_PARAMETERS = 7;

const RegisterFormPromptTemplate: React.FC<RegisterFormPromptTemplateProps> = ({ formHandler }) => {
	const [templateValue, setTemplateValue] = useAtom(templateValueAtom);
	const [parameters, setParameters] = useAtom(parametersAtom);
	console.log('🚀 ~ file: RegisterFormPromptTemplate.tsx:21 ~ parameters:', parameters);

	const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value;
		//setTemplateValue(value);
		const matches = value.match(regex);
		if (matches) {
			let newTitles = matches.map((match) => match.replace('{{', '').replace('}}', ''));
			if (newTitles.length > MAX_PARAMETERS) {
				newTitles = newTitles.slice(0, MAX_PARAMETERS)
			}
			const newParameters = newTitles.map((title, i) => {
				// 기존 파라미터 중 일치하는 title을 찾습니다.
				const existingParam = parameters?.find((param) => param.title === title);
				// 일치하는 title이 있으면 기존 값을 사용하고, 그렇지 않으면 새로운 객체를 생성합니다.
				return existingParam || { description: '', title, type: 'TEXT', typeValues: '' };
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

		// 배열을 쉼표로 구분된 문자열로 변환
		const typeValuesString = arrayToString(values);
		updatedParameters[index].typeValues = typeValuesString; // 문자열로 저장
		setParameters(updatedParameters);
	};

	return (
		<div className='w-full flex flex-col'>
			<FormTextarea
				onChange={(e) => handleTextareaChange(e)}
				inputProps={{
					className: 'w-[720px] min-h-[240px] placeholder:text-neutral-400',
					placeholder:
						'프롬프트의 큰 프레임은 미리 작성해주세요.\u000D\u000A사용자에게 입력 받을 부분은 "{{입력값}}" 으로 생성하면 하단에 자동으로 입력값 필드가 생성됩니다.\u000D\u000A\u000D\u000A•입력값 필드는 최대 7개까지 생성 가능합니다.\u000D\u000A•입력값 형태는 텍스트, 선택, 중복선택 형태로 제공하고 있습니다.',
					rows: 5,
				}}
				control={formHandler.control}
				// value={templateValue}
				name={'template'}
			/>
			{parameters && (
				<div className='flex flex-col gap-2 pt-8'>
					{/* parameter가 있을 경우에만 LabelWithTemplateFormElement 렌더링 */}
					{parameters?.map((param, index) => (
						<LabelWithTemplateFormElement
							key={index}
							leftLabel={param.title}
							leftElement={
								<Select value={param.type} onChange={(event) => handleSelectChange(index, event.target.value)}>
									<Select.Option value={'TEXT'}>텍스트</Select.Option>
									<Select.Option value={'SELECT'}>선택</Select.Option>
									<Select.Option value={'MULTI_SELECT'}>중복 선택</Select.Option>
								</Select>
							}
							rightElement={
								param.type === 'TEXT' ? (
									<Input
										value={param.description}
										className='w-full bg-white rounded border border-neutral-200'
										onChange={(e) => handleTypeValuesChange(index, e.target.value)}
									/>
								) : param.type === 'SELECT' || param.type === 'MULTI_SELECT' ? (
									<OptionInputComponent
										typeValues={param.typeValues}
										onValuesChange={(values) => handleOptionValuesChange(index, values)}
									/>
								) : null
							}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default RegisterFormPromptTemplate;
