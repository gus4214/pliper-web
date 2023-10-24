import PromptDetailInfoHeader from '@/src/components/modules/prompt/detail/PromptDetailInfoHeader';
import PromptTemplateSection from '@/src/components/modules/prompt/detail/PromptTemplateSection';
import { PromptRegisterFormData } from '@/src/components/modules/prompt/register/RegisterFormContainer';
import { parametersAtom, templateValueAtom } from '@/src/stores/prompt/register';
import { X } from 'heroicons-react';
import { useAtomValue } from 'jotai';
import React, { useEffect } from 'react';
import { Button, Modal } from 'react-daisyui';
import { UseFormReturn } from 'react-hook-form';

interface PreviewPromptModalProps {
	formHandler: UseFormReturn<PromptRegisterFormData>;
}

const PreviewPromptModal: React.FC<PreviewPromptModalProps> = ({ formHandler }) => {
	const { Dialog, handleShow, handleHide } = Modal.useDialog();

	const {
		getValues,
		formState: { isValid },
		watch,
	} = formHandler;

	const { personaType, category1Text, category2Text, title, llmModel, description } = watch();

	const parameters = useAtomValue(parametersAtom);
	const template = useAtomValue(templateValueAtom);

	return (
		<>
			<Button className='bg-white' onClick={handleShow} disabled={!isValid}>
				미리보기
			</Button>
			<Dialog
				backdrop
				className='max-w-[976px] max-h-[915px] px-4 py-6 bg-white rounded-lg border border-neutral-200 flex-col justify-start items-center gap-4 flex'
			>
				<Modal.Header className='flex w-full justify-between mb-0'>
					<span className='text-black text-lg font-bold'>미리보기</span>
					<X className='cursor-pointer' onClick={handleHide} />
				</Modal.Header>
				<Modal.Body>
					<PromptDetailInfoHeader
						personaType={personaType}
						category1Text={category1Text}
						category2Text={category2Text}
						title={title}
						llmModel={llmModel}
						description={description}
						preview
					/>
					<div className='mt-12' />
					<PromptTemplateSection parameters={parameters} template={template} preview />
				</Modal.Body>
			</Dialog>
		</>
	);
};

export default PreviewPromptModal;