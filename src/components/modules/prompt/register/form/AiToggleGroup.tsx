import FormToggleChipGroup from '@/src/components/modules/@common/form/FormToggleChipGroup';
import { PromptRegisterFormData } from '@/src/components/modules/prompt/register/RegisterContainer';
import { useGetAiTools } from '@/src/fetchers/prompt';
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

	return <FormToggleChipGroup name='limModel' control={control} options={aiPlatformChipOptions || []} color='secondary' className='bg-white' />;
};

export default AiToggleGroup;
