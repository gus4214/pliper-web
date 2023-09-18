import SelectChip from '@/src/components/atoms/chip/SelectChip';
import FormInput from '@/src/components/modules/@common/form/FormInput';
import FormTextarea from '@/src/components/modules/@common/form/FormTextarea';
import FormToggleChipGroup from '@/src/components/modules/@common/form/FormToggleChipGroup';
import { PromptRegisterFormData } from '@/src/components/modules/prompt/register/RegisterContainer';
import { useGetPromptCategory } from '@/src/fetchers/prompt';
import React from 'react';
import { Textarea } from 'react-daisyui';
import { UseFormReturn } from 'react-hook-form';

interface RegisterFormProps {
	formHandler: UseFormReturn<PromptRegisterFormData>;
}

interface LabelWithFormElementProps {
	label: string;
	labelPosition?: 'center' | 'start';
	children: React.ReactNode;
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

const RegisterForm: React.FC<RegisterFormProps> = ({ formHandler }) => {
	const { data } = useGetPromptCategory();

	const dept1Categories = data?.categories?.map((category) => category.dept1);
	const dept1ChipOptions = dept1Categories?.map((dept1) => ({
		code: dept1.code,
		label: dept1.text,
	}));

	const { control, watch } = formHandler;

	return (
		<div className='w-[1144px] px-6 pt-8 pb-4 bg-neutral-50 rounded-lg flex-col items-center gap-6 flex'>
			<div className='w-[1096px] rounded-2xl flex-col justify-center items-start gap-5 flex'>
				<LabelWithFormElement label='제목'>
					<FormInput control={control} name='title' inputProps={{ placeholder: '제목을 25자 이내로 입력하세요' }} />
				</LabelWithFormElement>
				<LabelWithFormElement label='페르소나'>
					<FormToggleChipGroup
						name='personaType'
						control={control}
						options={[
							{ code: 'daily', label: '☕️ 일상' },
							{ code: 'work', label: '📝 업무' },
						]}
						color='secondary'
					/>
				</LabelWithFormElement>
				<LabelWithFormElement label='카테고리'>
					<FormToggleChipGroup name='category1Code' control={control} options={dept1ChipOptions!} color='secondary' />
				</LabelWithFormElement>
				<LabelWithFormElement label='사용 AI 플랫폼'>
					<FormToggleChipGroup
						name='limModel'
						control={control}
						options={[
							{ code: 'GPT3.5', label: 'GPT 3.5' },
							{ code: 'GPT4.0', label: 'GPT 4.0' },
							{ code: 'BARD', label: 'BARD' },
							{ code: 'BING', label: 'BING' },
						]}
						color='secondary'
					/>
				</LabelWithFormElement>
				<LabelWithFormElement label='소개' labelPosition='start'>
					<FormTextarea
						control={control}
						name='description'
						inputProps={{ placeholder: '프롬프트 템플릿에 대한 소개를 해주세요', rows: 5 }}
					/>
				</LabelWithFormElement>
				<LabelWithFormElement label='프롬프트 템플릿' labelPosition='start'>
					<FormTextarea
						control={control}
						name='template'
						inputProps={{ placeholder: '템플릿으로 생성할 프롬프트를 입력해주세요 {{제목}}', rows: 5 }}
					/>
				</LabelWithFormElement>
			</div>
		</div>
	);
};

export default RegisterForm;
