import LabelWithTemplateFormElement from '@/src/components/modules/prompt/register/form/elements/LabelWithTemplateFormElement';
import OptionInputComponent from '@/src/components/modules/prompt/register/form/elements/OptionInputComponent';
import { PromptRegisterFormData } from '@/src/hooks/promptRegisterForm';
import { parametersAtom, templateValueAtom } from '@/src/stores/prompt/register';
import { arrayToString } from '@/src/utils/conversionUtils';
import { useAtom, useSetAtom } from 'jotai';
import React from 'react';
import { Input, Select } from 'react-daisyui';
import { UseFormReturn } from 'react-hook-form';
import FormTextarea from '@/src/components/modules/@common/form/FormTextarea';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

interface RegisterFormPromptTemplateProps {
	formHandler: UseFormReturn<PromptRegisterFormData>;
}

const regex = /{{(.*?)}}/g;
const MAX_PARAMETERS = 7;

const RegisterFormPromptTemplate: React.FC<RegisterFormPromptTemplateProps> = ({ formHandler }) => {
	const [parameters, setParameters] = useAtom(parametersAtom);
	const setTemplateValue = useSetAtom(templateValueAtom);

	const isFullParameters = parameters?.length >= MAX_PARAMETERS;

	const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		updateParametersDomByTemplate(e.target.value);
		setTemplateValue(e.target.value);
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

	const handleAddParameterClick = () => {
		if (isFullParameters) {
			return;
		}
		let tempContent = formHandler.getValues('template');
		tempContent = tempContent + `{{입력값${parameters.length + 1}}}\n`;
		updateParametersDomByTemplate(tempContent);
		formHandler.setValue('template', tempContent);
	};

	const updateParametersDomByTemplate = (template: string) => {
		const matches = template.match(regex);
		if (matches) {
			let newTitles = matches.map((match) => match.replace('{{', '').replace('}}', ''));
			if (newTitles.length > MAX_PARAMETERS) {
				newTitles = newTitles.slice(0, MAX_PARAMETERS);
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

	return (
		<div className='flex flex-col w-full'>
			<div className='w-full flex flex-row'>
				<div className={'relative '}>
					<FormTextarea
						onChange={(e) => handleTextareaChange(e)}
						inputProps={{
							className: 'w-[720px] h-60 placeholder:text-neutral-400 relative',
							rows: 5,
						}}
						ActionComponent={
							<PlusCircleIcon
								className={`w-10 h-14 absolute z-10 right-[6px] bottom-[6px] ${
									!isFullParameters ? 'text-amber-300 hover:text-amber-400 cursor-pointer' : 'text-neutral-200'
								}`}
								onClick={() => handleAddParameterClick()}
							/>
						}
						control={formHandler.control}
						name={'template'}
					/>
				</div>
				<div className='px-4  gap-1.5'>
					<div className='self-stretch rounded-lg bg-neutral-50 p-[16px] text-black text-xs flex flex-col leading-[18px]'>
						<span className=''>입력하실 내용의 큰 틀을 미리 작성해주세요.</span>
						<span className=''>
							입력 받을 부분은 <span className='font-medium'>{'{{ 입력값 }}'}</span> 으로 작성 하시거나 우측 하단 생성 버튼을 누르면
							자동으로 입력값 필드가 생성됩니다.
						</span>
						<br />
						<ul className={'list-disc pl-4'}>
							<li>입력값은 최대 8자까지 입력해주세요.</li>
							<li>입력값 필드는 최대 7개까지 생성 가능합니다.</li>
							<li>입력값 형태는 텍스트, 선택, 중복선택 형태로 제공하고 있습니다.</li>
						</ul>
					</div>
				</div>
			</div>
			{parameters && (
				<div className='flex flex-col gap-5 pt-4 w-full'>
					{/* parameter가 있을 경우에만 LabelWithTemplateFormElement 렌더링 */}
					{parameters?.map((param, index) => (
						<LabelWithTemplateFormElement
							key={index}
							leftLabel={param.title}
							leftElement={
								<Select
									value={param.type}
									onChange={(event) => handleSelectChange(index, event.target.value)}
									className='w-[240px] min-h-[40px] h-[40px] rounded'
								>
									<Select.Option value={'TEXT'}>텍스트</Select.Option>
									<Select.Option value={'SELECT'}>선택</Select.Option>
									<Select.Option value={'MULTI_SELECT'}>중복 선택</Select.Option>
								</Select>
							}
							rightElement={
								param.type === 'TEXT' ? (
									<Input
										value={param.description}
										className='w-full h-10 bg-white rounded border border-neutral-200 text-[13px] font-normal'
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
