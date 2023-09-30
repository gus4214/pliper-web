import React from 'react';
import FormTextarea from '@/src/components/modules/@common/form/FormTextarea';
import { PromptRegisterFormData } from '@/src/components/modules/prompt/register/RegisterContainer';
import { LabelWithTemplateFormElement } from '@/src/components/modules/prompt/register/RegisterForm';
import { useState } from 'react';
import { Input, Select } from 'react-daisyui';
import { UseFormReturn } from 'react-hook-form';

interface RegisterFormPromptTemplateProps {
	formHandler: UseFormReturn<PromptRegisterFormData>;
}

const RegisterFormPromptTemplate: React.FC<RegisterFormPromptTemplateProps> = ({ formHandler }) => {
	const { control } = formHandler;

	// 템플릿 상태 및 로직
	const [titleValue, setTitleValue] = useState<string>('');
	const [voiceValue, setVoiceValue] = useState<string>('');
	const [userValue, setUserValue] = useState<string>('');

	return (
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
	);
};

export default RegisterFormPromptTemplate;
