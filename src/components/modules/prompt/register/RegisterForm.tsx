import FormInput from '@/src/components/modules/@common/form/FormInput';
import FormTextarea from '@/src/components/modules/@common/form/FormTextarea';
import FormToggleChipCodeGroup from '@/src/components/modules/@common/form/FormToggleChipCodeGroup';
import FormToggleChipGroup from '@/src/components/modules/@common/form/FormToggleChipGroup';
import FormToggleMultiChipGroup from '@/src/components/modules/@common/form/FormToggleMultiChipGroup';
import PersonaToggleGroup from '@/src/components/modules/prompt/register/PersonaToggleGroup';
import { PromptRegisterFormData } from '@/src/components/modules/prompt/register/RegisterContainer';
import RegisterFormPromptTemplate from '@/src/components/modules/prompt/register/RegisterFormPromptTemplate';
import { useGetPromptCategory } from '@/src/fetchers/prompt';
import { Category, Dept1 } from '@/src/fetchers/prompt/types';
import React, { useEffect, useMemo, useState } from 'react';
import { Input, Select, Textarea, Toggle } from 'react-daisyui';
import { UseFormReturn } from 'react-hook-form';

interface RegisterFormProps {
	formHandler: UseFormReturn<PromptRegisterFormData>;
}

interface LabelWithFormElementProps {
	label: string;
	labelPosition?: 'center' | 'start';
	children: React.ReactNode;
}

interface LabelWithTemplateFormElementProps {
	leftLabel: string;
	leftElement: React.ReactNode;
	rightLabel: string;
	rightElement: React.ReactNode;
}

export const LabelWithFormElement: React.FC<LabelWithFormElementProps> = ({ label, labelPosition = 'center', children }) => {
	return (
		<div className={`w-full flex justify-start items-${labelPosition} gap-3`}>
			<div className='w-[150px] p-2'>
				<h1 className='text-black text-[13px] font-medium'>{label}</h1>
			</div>
			<div className='grow shrink basis-0 flex'>{children}</div>
		</div>
	);
};

export const LabelWithTemplateFormElement: React.FC<LabelWithTemplateFormElementProps> = ({ leftLabel, leftElement, rightLabel, rightElement }) => {
	return (
		<div className='w-[934px] flex p-4 bg-neutral-100 rounded-2xl gap-6'>
			<div className='flex items-center gap-8'>
				<div className='w-[80px] flex px-4 py-2'>
					<h1 className='text-black text-[13px] font-medium whitespace-nowrap'>{leftLabel}</h1>
				</div>
				{leftElement}
			</div>
			<div className='grow shrink basis-0 items-center gap-3 flex'>
				<div className='px-4 py-2 flex'>
					<h1 className='text-black text-sm font-normal whitespace-nowrap'>{rightLabel}</h1>
				</div>
				{rightElement}
			</div>
		</div>
	);
};

const RegisterForm: React.FC<RegisterFormProps> = ({ formHandler }) => {
	const { data } = useGetPromptCategory();
	const { control, watch, setValue } = formHandler;

	const [selectedPersona, setSelectedPersona] = useState<'daily' | 'work'>('work');
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

		const targetCategories = personaType === 'work' ? data?.jobCategories : data?.dailyCategories;
		const selectedCategory = targetCategories?.find((category) => category.dept1.text === selectedDept1);
		return selectedCategory ? selectedCategory.dept2.map((item) => ({ code: item.code, label: item.text })) : [];
	}, [selectedDept1, personaType, data]);

	useEffect(() => {
		const updateDept1Categories = (categories: Category[]) => {
			setDept1Categories(categories.map((category) => category.dept1));
			setValue('category1Code', '');
			setValue('category2Code', '');
		};

		if (personaType === 'daily') {
			setSelectedDept1(null);
			updateDept1Categories(data?.dailyCategories || []);
		} else if (personaType === 'work') {
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
					<PersonaToggleGroup formHandler={formHandler} onChange={(value) => setSelectedPersona(value as 'daily' | 'work')} />
				</LabelWithFormElement>

				{/* 카테고리 구간 */}
				<LabelWithFormElement label='카테고리' labelPosition='start'>
					<div className='flex flex-col gap-4 justify-start'>
						<FormToggleChipGroup
							name='category1Code'
							control={control}
							options={dept1ChipOptions!}
							color='secondary'
							onChange={setSelectedDept1}
							className='bg-white'
						/>
						{dept2Options.length > 0 && (
							<div className='p-2.5 bg-neutral-100 rounded-lg border border-neutral-200 justify-start items-center flex'>
								<FormToggleChipGroup name='category2Code' control={control} options={dept2Options} color='secondary' />
							</div>
						)}
					</div>
				</LabelWithFormElement>

				{/* 사용 AI 구간 */}
				<LabelWithFormElement label='사용 AI 플랫폼'>
					<FormToggleChipGroup
						name='limModel'
						control={control}
						options={[
							{ code: 'GPT3.5', label: 'GPT3.5' },
							{ code: 'GPT4.0', label: 'GPT4.0' },
							{ code: 'BARD', label: 'BARD' },
							{ code: 'BING', label: 'BING' },
						]}
						color='secondary'
						className='bg-white'
					/>
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
				<Toggle color='accent' />
			</div>
		</div>
	);
};

export default RegisterForm;
