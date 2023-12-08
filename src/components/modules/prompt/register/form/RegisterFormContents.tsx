import FormInput from '@/src/components/modules/@common/form/FormInput';
import FormTextarea from '@/src/components/modules/@common/form/FormTextarea';
import PreviewPromptModal from '@/src/components/modules/prompt/register/PreviewPromptModal';
import AiToggleGroup from '@/src/components/modules/prompt/register/form/AiToggleGroup';
import PersonaAndCategory from '@/src/components/modules/prompt/register/form/PersonaAndCategory';
import RegisterFormPromptTemplate from '@/src/components/modules/prompt/register/form/RegisterFormPromptTemplate';
import LabelWithFormElement from '@/src/components/modules/prompt/register/form/elements/LabelWithFormElement';
import NoticeTooltip from '@/src/components/modules/prompt/register/form/elements/NoticeTooltip';
import { PromptRegisterFormData } from '@/src/hooks/promptRegisterForm';
import { openPreviewModalAtom } from '@/src/stores/prompt/previewModal';
import { useSetAtom } from 'jotai';
import React, { useState } from 'react';
import { Button, Toggle } from 'react-daisyui';
import { Controller, UseFormReturn } from 'react-hook-form';

export interface RegisterFormContentsProps {
	formHandler: UseFormReturn<PromptRegisterFormData>;
}

const RegisterFormContents: React.FC<RegisterFormContentsProps> = ({ formHandler }) => {
	const {
		control,
		formState: { errors, isValid },
	} = formHandler;

	const handlePreviewModalOpen = useSetAtom(openPreviewModalAtom);

	return (
		<div className='w-[1144px] pt-8 pb-6 mb-4 rounded-lg flex-col items-center gap-6 flex'>
			<div className='w-full rounded-2xl flex-col justify-center items-start gap-10 flex'>
				{/* 제목 구간 */}
				<LabelWithFormElement label='제목' required className='gap-3'>
					<div className='flex flex-col'>
						<FormInput
							control={control}
							name='title'
							inputProps={{ className: 'w-[720px]', placeholder: '제목을 100자 이내로 입력하세요' }}
						/>
						{!errors.title && <span className='text-right text-neutral-400 text-[11px] font-medium leading-[17.60px]'>100자 이내</span>}
					</div>
				</LabelWithFormElement>

				{/*  페르소나, 카테고리 구간 */}
				<PersonaAndCategory formHandler={formHandler} />

				{/* 사용 AI 구간 */}
				<LabelWithFormElement
					label='플랫폼 선택'
					subLabel='해당 프롬프트가 어떤 모델에 가장 적합한지 한개의 플랫폼을 선택해주세요.'
					required
					className='gap-[14px]'
				>
					<AiToggleGroup formHandler={formHandler} />
				</LabelWithFormElement>

				{/* 소개 구간 */}
				<LabelWithFormElement
					label='소개'
					labelPosition='start'
					subLabel='프롬프트 템플릿에 대해 소개 내용을 작성합니다.'
					required
					className='gap-[14px]'
					labelRightComponent={
						<NoticeTooltip className='w-[209px] leading-[19px]'>
							<span className='text-teal-400 text-[12px] font-normal'>
								어떤 용도로 작성 하였는지, 어떤 상황에서 사용하면 좋은지 사용자들이 이해하기 쉽게 작성해주세요 🙂
							</span>
						</NoticeTooltip>
					}
				>
					<div className='flex flex-col'>
						<FormTextarea
							control={control}
							name='description'
							inputProps={{
								className: 'w-[720px] min-h-[100px] placeholder:text-neutral-400',
								placeholder: '프롬프트 템플릿에 대한 소개를 해주세요',
								rows: 3,
							}}
						/>
						{!errors.description && (
							<span className='text-right text-neutral-400 text-[11px] font-medium leading-[17.60px]'>500자 이내</span>
						)}
					</div>
				</LabelWithFormElement>

				{/* 프롬프트 템플릿 구간  */}
				<LabelWithFormElement
					label='프롬프트 템플릿'
					labelPosition='start'
					subLabel='템플릿으로 만들 프롬프트를 작성해주세요.'
					required
					className='gap-[14px]'
				>
					<RegisterFormPromptTemplate formHandler={formHandler} />
				</LabelWithFormElement>
				<LabelWithFormElement label='프롬프트 미리보기' subLabel='작성한 내용에 대한 화면을 미리 확인해 보세요.'>
					<Button
						className='bg-white rounded border border-neutral-200 w-[81px] min-h-[40px] h-[40px] whitespace-nowrap mt-[14px]'
						onClick={handlePreviewModalOpen}
						disabled={!isValid}
					>
						미리보기
					</Button>
				</LabelWithFormElement>
			</div>
			<div className='w-full flex items-center justify-end gap-3'>
				<span className='text-neutral-600 text-[13px] font-medium'>해당 프롬프트를 게시 하시겠습니까?</span>
				<Controller
					name='show'
					control={control}
					render={({ field: { onChange, value } }) => (
						<Toggle color='accent' checked={value} onChange={(e) => onChange(e.target.checked)} />
					)}
				/>
			</div>
			<PreviewPromptModal formHandler={formHandler} />
		</div>
	);
};

export default RegisterFormContents;
