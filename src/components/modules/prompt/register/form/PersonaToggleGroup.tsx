import FormToggleChipCodeGroup from '@/src/components/modules/@common/form/FormToggleChipCodeGroup';
import { PromptRegisterFormData } from '@/src/components/modules/prompt/register/RegisterFormContainer';
import { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface PersonaToggleGroupProps {
	formHandler: UseFormReturn<PromptRegisterFormData>;
	onChange: (value: string) => void;
}

const PersonaToggleGroup: React.FC<PersonaToggleGroupProps> = ({ formHandler, onChange }) => {
	const { control, setValue } = formHandler;

	useEffect(() => {
		setValue('personaType', 'work');
	}, []);

	return (
		<FormToggleChipCodeGroup
			name='personaType'
			control={control}
			options={[
				{ code: 'work', label: '📝 업무' },
				{ code: 'daily', label: '☕️ 일상' },
			]}
			color='secondary'
			className='bg-white'
			onChange={onChange}
		/>
	);
};

export default PersonaToggleGroup;
