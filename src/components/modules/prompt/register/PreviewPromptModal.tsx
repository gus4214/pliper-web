import PromptDetailInfoHeader from '@/src/components/modules/prompt/detail/PromptDetailInfoHeader';
import PromptTemplateSection from '@/src/components/modules/prompt/detail/PromptTemplateSection';
import { usePromptTemplateCreate } from '@/src/hooks/promptDetailTemplate';
import { PromptRegisterFormData } from '@/src/hooks/promptRegisterForm';
import { closePreviewModalAtom, previewModalAtom } from '@/src/stores/prompt/previewModal';
import { parametersAtom, templateValueAtom } from '@/src/stores/prompt/register';
import { X } from 'heroicons-react';
import { useAtomValue, useSetAtom } from 'jotai';
import React from 'react';
import { Button, Modal } from 'react-daisyui';
import { UseFormReturn } from 'react-hook-form';

interface PreviewPromptModalProps {
	formHandler: UseFormReturn<PromptRegisterFormData>;
}

const PreviewPromptModal: React.FC<PreviewPromptModalProps> = ({ formHandler }) => {
	const { open } = useAtomValue(previewModalAtom);
	const close = useSetAtom(closePreviewModalAtom);

	const { watch } = formHandler;

	const { personaType, category1Text, category2Text, title, llmModel, description } = watch();
	const parameters = useAtomValue(parametersAtom);
	const template = useAtomValue(templateValueAtom);

	const {
		filledTemplate,
		createPrompt,
		formHandler: { control },
	} = usePromptTemplateCreate({ parameters, template });

	return (
		<>
			<Modal.Legacy
				onClickBackdrop={close}
				open={open}
				className='max-w-[976px] p-6 bg-white rounded-lg border border-neutral-200 flex-col justify-start items-center gap-4 flex overflow-y-auto overflow-x-hidden'
			>
				<Modal.Header className='flex justify-between w-full mb-0'>
					<span className='text-lg font-bold text-black'>미리보기</span>
					<X className='cursor-pointer' onClick={close} />
				</Modal.Header>
				<Modal.Body className='px-4 pb-4 border rounded-lg border-neutral-200'>
					<PromptDetailInfoHeader
						personaType={personaType}
						category1Text={category1Text}
						category2Text={category2Text}
						title={title}
						llmModel={llmModel}
						description={description}
						preview
					/>
					<PromptTemplateSection parameters={parameters} filledTemplate={filledTemplate} control={control} preview />
				</Modal.Body>
				<div className='w-[225px] gap-3 flex'>
					<Button
						className='bg-white rounded border border-neutral-200 w-16 h-[48px] whitespace-nowrap text-neutral-400 text-lg font-medium'
						onClick={close}
					>
						닫기
					</Button>
					<Button
						color='accent'
						className='h-12 text-lg font-medium text-white rounded'
						onClick={(e) => {
							e.preventDefault();
							createPrompt();
						}}
					>
						프롬프트 생성하기
					</Button>
				</div>
			</Modal.Legacy>
		</>
	);
};

export default PreviewPromptModal;
