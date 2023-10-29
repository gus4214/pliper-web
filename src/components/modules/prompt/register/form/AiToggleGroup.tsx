import FormToggleChipGroup from '@/src/components/modules/@common/form/FormToggleChipGroup';
import { useGetAiTools } from '@/src/fetchers/prompt';
import { PromptRegisterFormData } from '@/src/hooks/promptRegisterForm';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';

interface AiToggleGroupProps {
	formHandler: UseFormReturn<PromptRegisterFormData>;
}

const AiToggleGroup: React.FC<AiToggleGroupProps> = ({ formHandler }) => {
	const { control } = formHandler;

	const { data } = useGetAiTools({ type: 'LLM' });

	const aiPlatformChipOptions = data?.tools.map((tool) => ({
		code: tool.name,
		label: tool.name,
	}));

	return <FormToggleChipGroup name='llmModel' control={control} options={aiPlatformChipOptions || []} color='secondary' chipClassName='bg-white' />;
};

export default AiToggleGroup;
