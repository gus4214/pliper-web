import FormInput from '@/src/components/modules/@common/form/FormInput';
import FormTextarea from '@/src/components/modules/@common/form/FormTextarea';
import FormToggleChipGroup from '@/src/components/modules/@common/form/FormToggleChipGroup';
import FormToggleMultiChipGroup from '@/src/components/modules/@common/form/FormToggleMultiChipGroup';
import { PromptRegisterFormData } from '@/src/components/modules/prompt/register/RegisterContainer';
import { useGetPromptCategory } from '@/src/fetchers/prompt';
import React, { useEffect, useState } from 'react';
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

const LabelWithFormElement: React.FC<LabelWithFormElementProps> = ({ label, labelPosition = 'center', children }) => {
	return (
		<div className={`w-full flex justify-start items-${labelPosition} gap-3`}>
			<div className='w-[150px] p-2'>
				<h1 className='text-black text-[13px] font-medium'>{label}</h1>
			</div>
			<div className='grow shrink basis-0 flex'>{children}</div>
		</div>
	);
};

const LabelWithTemplateFormElement: React.FC<LabelWithTemplateFormElementProps> = ({ leftLabel, leftElement, rightLabel, rightElement }) => {
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

	// 카테고리 구간
	const [selectedDept1, setSelectedDept1] = useState<string | null>(null);
	const [dept2Options, setDept2Options] = useState<{ code: string; label: string }[]>([]);
	const dept1Categories = data?.categories?.map((category) => category.dept1);
	const dept1ChipOptions = dept1Categories?.map((dept1) => ({
		code: dept1.code,
		label: dept1.text,
	}));

	// 프롬프트 템플릿 구간
	const [titleValue, setTitleValue] = useState<string>('');
	const [voiceValue, setVoiceValue] = useState<string>('');
	const [userValue, setUserValue] = useState<string>('');

	useEffect(() => {
		if (selectedDept1) {
			// 선택된 dept1 카테고리에 해당하는 dept2 옵션을 추출합니다.
			const selectedCategory = data?.categories.find((category) => category.dept1.code === selectedDept1);
			if (selectedCategory) {
				setDept2Options(
					selectedCategory.dept2.map((item) => ({
						code: item.code,
						label: item.text,
					}))
				);
			}
		} else {
			setDept2Options([]); // 선택이 해제된 경우 dept2 옵션을 초기화합니다.
		}
	}, [selectedDept1]);

	const { control, watch } = formHandler;

	return (
		<div className='w-[1144px] px-6 pt-8 pb-4 bg-neutral-50 rounded-lg flex-col items-center gap-6 flex'>
			<div className='w-[1096px] rounded-2xl flex-col justify-center items-start gap-5 flex'>
				{/* 제목 구간 */}
				<LabelWithFormElement label='제목'>
					<FormInput control={control} name='title' inputProps={{ placeholder: '제목을 25자 이내로 입력하세요' }} />
				</LabelWithFormElement>

				{/* // 페르소나 구간 */}
				<LabelWithFormElement label='페르소나'>
					<FormToggleChipGroup
						name='personaType'
						control={control}
						options={[
							{ code: 'daily', label: '☕️ 일상' },
							{ code: 'work', label: '📝 업무' },
						]}
						color='secondary'
						className='bg-white'
					/>
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
								<FormToggleMultiChipGroup name='category2Code' control={control} options={dept2Options} color='secondary' />
							</div>
						)}
					</div>
				</LabelWithFormElement>

				{/* 사용 AI 구간 */}
				<LabelWithFormElement label='사용 AI 플랫폼'>
					<FormToggleMultiChipGroup
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
					<div className='w-full flex flex-col'>
						<FormTextarea
							control={control}
							name='template'
							inputProps={{ placeholder: '템플릿으로 생성할 프롬프트를 입력해주세요 {{제목}}', rows: 5 }}
						/>
						<span className='text-neutral-600 text-sm font-normal pt-3'>
							{`➡️ 템플릿에 입력값으로 넣고 싶을 경우 {{ 파라미터 }} 형태로 넣어주세요`}
						</span>
						<div className='flex flex-col gap-2 pt-8'>
							<LabelWithTemplateFormElement
								leftLabel='제목'
								leftElement={
									<Select value={titleValue} onChange={(event) => setTitleValue(event.target.value)}>
										<Select.Option value={''}>파라미터 타입 선택</Select.Option>
										<Select.Option value={'text'}>텍스트</Select.Option>
										<Select.Option value={'choice'}>선택</Select.Option>
										<Select.Option value={'multiChoice'}>중복 선택</Select.Option>
									</Select>
								}
								rightLabel='텍스트 추가옵션'
								rightElement={<Input className='w-full' />}
							/>
							<LabelWithTemplateFormElement
								leftLabel='보이스'
								leftElement={
									<Select value={voiceValue} onChange={(event) => setVoiceValue(event.target.value)}>
										<Select.Option value={''}>파라미터 타입 선택</Select.Option>
										<Select.Option value={'text'}>텍스트</Select.Option>
										<Select.Option value={'choice'}>선택</Select.Option>
										<Select.Option value={'multiChoice'}>중복 선택</Select.Option>
									</Select>
								}
								rightLabel='타입별 추가옵션'
								rightElement={<Input className='w-full' />}
							/>
							<LabelWithTemplateFormElement
								leftLabel='사용자'
								leftElement={
									<Select value={userValue} onChange={(event) => setUserValue(event.target.value)}>
										<Select.Option value={''}>파라미터 타입 선택</Select.Option>
										<Select.Option value={'text'}>텍스트</Select.Option>
									</Select>
								}
								rightLabel='타입별 추가옵션'
								rightElement={<Input className='w-full' />}
							/>
						</div>
					</div>
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
