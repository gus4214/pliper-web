import FormInput from '@/src/components/modules/@common/form/FormInput';
import FormTextarea from '@/src/components/modules/@common/form/FormTextarea';
import FormToggleChipGroup from '@/src/components/modules/@common/form/FormToggleChipGroup';
import { PromptRegisterFormData } from '@/src/components/modules/prompt/register/RegisterFormContainer';
import AiToggleGroup from '@/src/components/modules/prompt/register/form/AiToggleGroup';
import PersonaToggleGroup from '@/src/components/modules/prompt/register/form/PersonaToggleGroup';
import RegisterFormPromptTemplate from '@/src/components/modules/prompt/register/form/RegisterFormPromptTemplate';
import LabelWithFormElement from '@/src/components/modules/prompt/register/form/elements/LabelWithFormElement';
import { useGetPromptCategory } from '@/src/fetchers/prompt';
import { Category, Dept1 } from '@/src/fetchers/prompt/types';
import React, { useEffect, useMemo, useState } from 'react';
import { Toggle } from 'react-daisyui';
import { UseFormReturn } from 'react-hook-form';
import { Controller } from 'react-hook-form';

interface RegisterFormProps {
	formHandler: UseFormReturn<PromptRegisterFormData>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ formHandler }) => {
	const { data } = useGetPromptCategory();
	console.log('🚀 ~ file: RegisterForm.tsx:22 ~ data:', data);

	const { control, watch, setValue } = formHandler;

	const [selectedPersona, setSelectedPersona] = useState<'일상' | '업무'>('업무');
	const personaType = watch('personaType');

	// 카테고리 상태 및 로직
	const [selectedDept1, setSelectedDept1] = useState<string | null>(null);
	const [dept1Categories, setDept1Categories] = useState<Dept1[]>([]);

	const dept1ChipOptions = dept1Categories.map((dept1) => ({
		code: dept1.code,
		label: dept1.text,
	}));

	const dept2Options = useMemo(() => {
		if (!selectedDept1 || !personaType) return [];

		const targetCategories = personaType === '업무' ? data?.jobCategories : data?.dailyCategories;
		const selectedCategory = targetCategories?.find((category) => category.dept1.text === selectedDept1);
		return selectedCategory ? selectedCategory.dept2.map((item) => ({ code: item.code, label: item.text })) : [];
	}, [selectedDept1, personaType, data]);

	useEffect(() => {
		const updateDept1Categories = (categories: Category[]) => {
			setDept1Categories(categories.map((category) => category.dept1));
			setValue('category1Text', '');
			setValue('category2Text', '');
		};

		if (personaType === '일상') {
			setSelectedDept1(null);
			updateDept1Categories(data?.dailyCategories || []);
		} else if (personaType === '업무') {
			setSelectedDept1(null);
			updateDept1Categories(data?.jobCategories || []);
		}
	}, [personaType, data]);

	return (
		<div className='w-[1144px] px-6 pt-8 pb-4 bg-neutral-50 rounded-lg flex-col items-center gap-6 flex'>
			<div className='w-[1096px] rounded-2xl flex-col justify-center items-start gap-5 flex'>
				{/* 제목 구간 */}
				<LabelWithFormElement label='제목'>
					<FormInput control={control} name='title' inputProps={{ placeholder: '제목을 25자 이내로 입력하세요' }} />
				</LabelWithFormElement>

				{/* // 페르소나 구간 */}
				<LabelWithFormElement label='페르소나'>
					<PersonaToggleGroup formHandler={formHandler} onChange={(value) => setSelectedPersona(value as '일상' | '업무')} />
				</LabelWithFormElement>

				{/* 카테고리 구간 */}
				<LabelWithFormElement label='카테고리' labelPosition='start'>
					<div className='flex flex-col gap-4 justify-start'>
						<FormToggleChipGroup
							name='category1Text'
							control={control}
							options={dept1ChipOptions || []}
							color='secondary'
							onChange={setSelectedDept1}
							className='bg-white'
						/>
						{dept2Options.length > 0 && (
							<div className='p-2.5 bg-neutral-100 rounded-lg border border-neutral-200 justify-start items-center flex'>
								<FormToggleChipGroup name='category2Text' control={control} options={dept2Options} color='secondary' />
							</div>
						)}
					</div>
				</LabelWithFormElement>

				{/* 사용 AI 구간 */}
				<LabelWithFormElement label='사용 AI 플랫폼'>
					<AiToggleGroup formHandler={formHandler} />
				</LabelWithFormElement>

				{/* 소개 구간 */}
				<LabelWithFormElement label='소개' labelPosition='start'>
					<FormTextarea
						control={control}
						name='description'
						inputProps={{ placeholder: '프롬프트 템플릿에 대한 소개를 해주세요', rows: 5 }}
					/>
				</LabelWithFormElement>

				{/* 프롬프트 템플릿 구간  */}
				<LabelWithFormElement label='프롬프트 템플릿' labelPosition='start'>
					<RegisterFormPromptTemplate formHandler={formHandler} />
				</LabelWithFormElement>
			</div>
			<div className='w-full flex items-center justify-end gap-3'>
				<span className='text-neutral-600 text-[13px] font-medium'>해당 프롬프트를 게시 하시겠습니까?</span>
				{/* <Toggle color='accent' checked /> */}
				<Controller
					name='show'
					control={control}
					render={({ field: { onChange, value } }) => (
						<Toggle color='accent' checked={value} onChange={(e) => onChange(e.target.checked)} />
					)}
				/>
			</div>
		</div>
	);
};

export default RegisterForm;
