import ToastPlipIcon from '@/src/components/atoms/icons/ToastPlipIcon';
import FormInput from '@/src/components/modules/@common/form/FormInput';
import FormToggleMultiChipGroup from '@/src/components/modules/@common/form/FormToggleMultiChipGroup';
import PromptInteractionButtonGroup from '@/src/components/modules/prompt/detail/PromptInteractionButtonGroup';
import PromptTemplateSectionItem from '@/src/components/modules/prompt/detail/PromptTemplateSectionItem';
import { Parameter } from '@/src/fetchers/prompt/types';
import { usePromptTemplateCreate } from '@/src/hooks/promptDetailTemplate';
import { useAppToast } from '@/src/hooks/toast';
import { stringToArray } from '@/src/utils/conversionUtils';
import { handleCopyClipBoard } from '@/src/utils/utils';
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { DocumentDuplicateIcon as DocumentDuplicateSolidIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Button, Select } from 'react-daisyui';
import { Controller } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';

interface PromptTemplateSectionProps {
	parameters: Parameter[];
	template: string;
	promptId?: number;
	preview?: boolean;
}

const PromptTemplateSection: React.FC<PromptTemplateSectionProps> = ({ parameters = [], template, promptId, preview }) => {
	const { openToast } = useAppToast();
	const [isHovering, setIsHovering] = useState(false);

	const {
		filledTemplate,
		createPrompt,
		formHandler: { control },
	} = usePromptTemplateCreate({ parameters, template });

	const layoutWidth = preview ? 'w-[440px]' : 'w-[556px]';
	const promptTextArea = filledTemplate ? 'bg-white' : 'bg-[#FAFFFF]';

	const handleMouseEnter = () => setIsHovering(true);
	const handleMouseLeave = () => setIsHovering(false);

	const handleCopyIconClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		openToast({
			message: '프롬프트가 클립보드에 복사되었습니다.',
			open: true,
			icon: <ToastPlipIcon />,
		});
		handleCopyClipBoard(filledTemplate);
	};

	return (
		<div className='flex flex-col gap-6 items-center'>
			<div className='flex gap-4 w-full'>
				<div className='flex flex-col gap-4'>
					<h1 className='pl-2 text-neutral-500 text-[13px] font-semibold'>내용</h1>
					<div className={`flex flex-col gap-2.5 ${layoutWidth}`}>
						{parameters?.map((parameter, i) => {
							let element; // 이 변수에 각 type에 따른 컴포넌트를 저장할 예정입니다.

							switch (parameter.type) {
								case 'TEXT':
									element = (
										<FormInput
											name={parameter.title}
											control={control}
											inputProps={{ placeholder: parameter.description, className: 'w-full h-10 rounded' }}
										/>
									);
									break;
								case 'SELECT':
									element = (
										<Controller
											name={parameter.title}
											control={control}
											render={({ field }) => (
												<Select {...field} className='w-[240px] min-h-[40px] h-[40px] rounded'>
													<Select.Option value={'선택하기'}>선택하기</Select.Option>
													{(stringToArray(parameter.typeValues) as any).map((typeValue: string, i: string) => (
														<Select.Option key={i} value={typeValue}>
															{typeValue}
														</Select.Option>
													))}
												</Select>
											)}
										/>
									);
									break;
								case 'MULTI_SELECT':
									element = (
										<FormToggleMultiChipGroup
											name={parameter.title}
											control={control}
											options={parameter.typeValues.split(',').map((value) => ({ code: value, label: value }))}
											color='secondary'
											className='w-full flex flex-wrap p-2.5 bg-neutral-100 rounded'
											chipClassName='bg-white whitespace-nowrap h-8 text-black text-sm font-normal'
										/>
									);
									break;
								default:
									element = null;
							}

							return (
								<PromptTemplateSectionItem
									key={i}
									title={parameter.title}
									element={element} // 변경된 element를 여기에 전달합니다.
								/>
							);
						})}
					</div>
				</div>
				<div className='flex flex-col gap-4 relative'>
					<h1 className={`pl-2 text-neutral-500 text-[13px] font-semibold`}>프롬프트</h1>
					<div className='relative'>
						<TextareaAutosize
							readOnly
							value={filledTemplate}
							className={`${layoutWidth} p-2.5 border border-teal-200 rounded-lg ${promptTextArea} focus:outline-none`}
							minRows={5}
							placeholder='생성 버튼 누를 시 왼쪽 입력값 기반으로 해당 프롬프트가 작성됩니다.'
						/>
						{filledTemplate && (
							<div
								className={`absolute right-[7px] bottom-4 cursor-pointer`}
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
								onClick={(e) => handleCopyIconClick(e)}
							>
								<motion.div
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
									transition={{
										stiffness: 400,
										damping: 10,
									}}
								>
									{isHovering ? (
										<DocumentDuplicateSolidIcon className='text-teal-200 w-6 h-6' />
									) : (
										<DocumentDuplicateIcon className='text-teal-200 w-6 h-6' />
									)}
								</motion.div>
							</div>
						)}
					</div>
				</div>
			</div>
			{preview ? (
				<div className='w-[225px] gap-3 flex'>
					<Button className='bg-white rounded border border-neutral-200 w-16 h-[48px] whitespace-nowrap text-neutral-400 text-lg font-medium'>
						닫기
					</Button>
					<Button
						color='accent'
						className='h-12 rounded text-white text-lg font-medium'
						onClick={(e) => {
							e.preventDefault();
							createPrompt();
						}}
					>
						프롬프트 생성하기
					</Button>
				</div>
			) : (
				<PromptInteractionButtonGroup onCreateClick={createPrompt} promptId={promptId!} />
			)}
		</div>
	);
};

export default PromptTemplateSection;
