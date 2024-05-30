import React from 'react';
import FormToggleChipGroup from '@/src/components/molecules/form/FormToggleChipGroup';
import PersonaToggleGroup from '@/src/components/organisms/prompt/register/form/PersonaToggleGroup';
import { RegisterFormContentsProps } from '@/src/components/organisms/prompt/register/form/RegisterFormContents';
import LabelWithFormElement from '@/src/components/organisms/prompt/register/form/elements/LabelWithFormElement';
import { useGetPromptCategory } from '@/src/fetchers/prompt';
import { Category, Dept1, PersonaType } from '@/src/fetchers/prompt/types';
import { useEffect, useMemo, useState } from 'react';

const PersonaAndCategory: React.FC<RegisterFormContentsProps> = ({ formHandler }) => {
	const { control, watch, getValues } = formHandler;

	const { data } = useGetPromptCategory();
	const [selectedPersona, setSelectedPersona] = useState<PersonaType>('JOB');

	const personaNotice = {
		JOB: '개발, 기획, 교육 등 회사 업무 시 사용합니다.',
		DAILY: '대화나 심리 상담, 가정생활과 같이 일상에서 사용합니다.',
	} as Record<PersonaType, string>;

	// 카테고리 상태 및 로직
	const [selectedDept1, setSelectedDept1] = useState<string | null>(getValues('category1Text'));
	const [dept1Categories, setDept1Categories] = useState<Dept1[]>([]);

	const personaType = watch('personaType');

	const dept1ChipOptions = dept1Categories.map((dept1) => ({
		code: dept1.code,
		label: dept1.text,
	}));

	const dept2Options = useMemo(() => {
		if (!selectedDept1 || !personaType) return [];

		const targetCategories = personaType === 'JOB' ? data?.jobCategories : data?.dailyCategories;
		const selectedCategory = targetCategories?.find((category) => category.dept1.text === selectedDept1);
		return selectedCategory ? selectedCategory.dept2.map((item) => ({ code: item.code, label: item.text })) : [];
	}, [selectedDept1, personaType, data]);

	useEffect(() => {
		const updateDept1Categories = (categories: Category[]) => {
			setDept1Categories(categories.map((category) => category.dept1));
		};

		if (personaType === 'DAILY') {
			updateDept1Categories(data?.dailyCategories || []);
		} else if (personaType === 'JOB') {
			updateDept1Categories(data?.jobCategories || []);
		}
	}, [personaType, data]);

	return (
		<>
			{/* // 페르소나 구간 */}
			<LabelWithFormElement label='페르소나' subLabel={'프롬프트가 사용될 범위를 의미합니다.'} required className='gap-[14px]'>
				<div className='flex flex-col gap-1.5'>
					<PersonaToggleGroup control={control} onChange={(value) => setSelectedPersona(value as PersonaType)} />
					<span className='text-neutral-400 text-xs font-normal'>{personaNotice[selectedPersona]}</span>
				</div>
			</LabelWithFormElement>

			{/* 카테고리 구간 */}
			{formHandler.getValues('personaType') && (
				<LabelWithFormElement
					label='카테고리'
					subLabel='작성하고자 하는 프롬프트의 해당하는 카테고리를 선택해주세요.'
					labelPosition='start'
					required
					className='gap-[14px]'
				>
					<div className='flex flex-col gap-1.5 justify-start'>
						<div className={'flex'}>
							<FormToggleChipGroup
								name='category1Text'
								control={control}
								options={dept1ChipOptions || []}
								color='secondary'
								onChange={setSelectedDept1}
								chipClassName='bg-white h-10'
								errorClassName='flex items-center'
							/>
						</div>
						{dept2Options.length > 0 && (
							<div className='p-2.5 bg-neutral-100 rounded-lg border border-neutral-200 justify-start items-center flex'>
								<FormToggleChipGroup
									name='category2Text'
									control={control}
									options={dept2Options}
									color='info'
									chipClassName='bg-white h-10 rounded-lg'
									errorClassName='flex items-center'
								/>
							</div>
						)}
					</div>
				</LabelWithFormElement>
			)}
		</>
	);
};

export default PersonaAndCategory;
