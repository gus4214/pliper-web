import FormToggleChipCodeGroup from '@/src/components/modules/@common/form/FormToggleChipCodeGroup';
import { PromptRegisterFormData } from '@/src/hooks/promptRegisterForm';
import { UseFormReturn } from 'react-hook-form';

interface PersonaToggleGroupProps {
	formHandler: UseFormReturn<PromptRegisterFormData>;
	onChange: (value: string) => void;
}

const PersonaToggleGroup: React.FC<PersonaToggleGroupProps> = ({ formHandler, onChange }) => {
	const { control, setValue } = formHandler;

	// useEffect(() => {
	// 	setValue('personaType', '업무');
	// }, []);

	return (
		<FormToggleChipCodeGroup
			name='personaType'
			control={control}
			options={[
				{ code: '업무', label: '📝 업무' },
				{ code: '일상', label: '☕️ 일상' },
			]}
			color='secondary'
			chipClassName='bg-white'
			onChange={onChange}
		/>
	);
};

export default PersonaToggleGroup;
