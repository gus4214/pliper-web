import React from 'react';
import FormToggleChipGroup from '@/src/components/modules/@common/form/FormToggleChipGroup';
import PersonaToggleGroup from '@/src/components/modules/prompt/register/form/PersonaToggleGroup';
import { RegisterFormContentsProps } from '@/src/components/modules/prompt/register/form/RegisterFormContents';
import LabelWithFormElement from '@/src/components/modules/prompt/register/form/elements/LabelWithFormElement';
import { useGetPromptCategory } from '@/src/fetchers/prompt';
import { Category, Dept1, PersonaType } from '@/src/fetchers/prompt/types';
import { useEffect, useMemo, useState } from 'react';

const PersonaAndCategory: React.FC<RegisterFormContentsProps> = ({ formHandler }) => {
	const { control, watch, getValues } = formHandler;

	const { data } = useGetPromptCategory();
	const [selectedPersona, setSelectedPersona] = useState<PersonaType>('JOB');

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
			<LabelWithFormElement label='페르소나' required>
				<PersonaToggleGroup control={control} onChange={(value) => setSelectedPersona(value as PersonaType)} />
			</LabelWithFormElement>

			{/* 카테고리 구간 */}
			{formHandler.getValues('personaType') && (
				<LabelWithFormElement label='카테고리' labelPosition='start' required>
					<div className='flex flex-col gap-4 justify-start'>
						<div className={'flex'}>
							<FormToggleChipGroup
								name='category1Text'
								control={control}
								options={dept1ChipOptions || []}
								color='secondary'
								onChange={setSelectedDept1}
								chipClassName='bg-white'
							/>
						</div>
						{dept2Options.length > 0 && (
							<div className='p-2.5 bg-neutral-100 rounded-lg border border-neutral-200 justify-start items-center flex'>
								<FormToggleChipGroup name='category2Text' control={control} options={dept2Options} color='secondary' />
							</div>
						)}
					</div>
				</LabelWithFormElement>
			)}
		</>
	);
};

export default PersonaAndCategory;
