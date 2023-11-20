import FormInput from '@/src/components/modules/@common/form/FormInput';
import FormTextarea from '@/src/components/modules/@common/form/FormTextarea';
import PreviewPromptModal from '@/src/components/modules/prompt/register/PreviewPromptModal';
import AiToggleGroup from '@/src/components/modules/prompt/register/form/AiToggleGroup';
import PersonaAndCategory from '@/src/components/modules/prompt/register/form/PersonaAndCategory';
import RegisterFormPromptTemplate from '@/src/components/modules/prompt/register/form/RegisterFormPromptTemplate';
import LabelWithFormElement from '@/src/components/modules/prompt/register/form/elements/LabelWithFormElement';
import { PromptRegisterFormData } from '@/src/hooks/promptRegisterForm';
import React from 'react';
import { Toggle } from 'react-daisyui';
import { Controller, UseFormReturn } from 'react-hook-form';

export interface RegisterFormContentsProps {
	formHandler: UseFormReturn<PromptRegisterFormData>;
}

const RegisterFormContents: React.FC<RegisterFormContentsProps> = ({ formHandler }) => {
	const { control } = formHandler;

	return (
		<div className='w-[1144px] px-6 pt-8 pb-4 bg-neutral-50 rounded-lg flex-col items-center gap-6 flex'>
			<div className='w-[1096px] rounded-2xl flex-col justify-center items-start gap-5 flex'>
				{/* 제목 구간 */}
				<LabelWithFormElement label='제목' required>
					<FormInput control={control} name='title' inputProps={{ placeholder: '제목을 25자 이내로 입력하세요' }} />
				</LabelWithFormElement>

				{/*  페르소나, 카테고리 구간 */}
				<PersonaAndCategory formHandler={formHandler} />

				{/* 사용 AI 구간 */}
				<LabelWithFormElement label='사용 AI 플랫폼' required>
					<AiToggleGroup formHandler={formHandler} />
				</LabelWithFormElement>

				{/* 소개 구간 */}
				<LabelWithFormElement label='소개' labelPosition='start' required>
					<FormTextarea
						control={control}
						name='description'
						inputProps={{ placeholder: '프롬프트 템플릿에 대한 소개를 해주세요', rows: 3 }}
					/>
				</LabelWithFormElement>

				{/* 프롬프트 템플릿 구간  */}
				<LabelWithFormElement label='프롬프트 템플릿' labelPosition='start' required>
					<RegisterFormPromptTemplate formHandler={formHandler} />
				</LabelWithFormElement>
			</div>
			<div className='w-full flex items-center justify-between'>
				<PreviewPromptModal formHandler={formHandler} />
				<div className='flex items-center gap-3'>
					<span className='text-neutral-600 text-[13px] font-medium'>해당 프롬프트를 게시 하시겠습니까?</span>
					<Controller
						name='show'
						control={control}
						render={({ field: { onChange, value } }) => (
							<Toggle color='accent' checked={value} onChange={(e) => onChange(e.target.checked)} />
						)}
					/>
				</div>
			</div>
		</div>
	);
};

export default RegisterFormContents;
