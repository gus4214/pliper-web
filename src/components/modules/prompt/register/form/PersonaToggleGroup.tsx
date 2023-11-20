import FormToggleChipCodeGroup from '@/src/components/modules/@common/form/FormToggleChipCodeGroup';
import { PromptRegisterFormData } from '@/src/hooks/promptRegisterForm';
import {Control, UseFormReturn} from 'react-hook-form';

interface PersonaToggleGroupProps {
	control: Control<PromptRegisterFormData>;
	onChange: (value: string) => void;
}

const PersonaToggleGroup: React.FC<PersonaToggleGroupProps> = ({ control, onChange }) => {

	// useEffect(() => {
	// 	setValue('personaType', '업무');
	// }, []);

	return (
		<FormToggleChipCodeGroup
			name='personaType'
			control={control}
			options={[
				{ code: 'JOB', label: '📝 업무' },
				{ code: 'DAILY', label: '☕️ 일상' },
			]}
			color='secondary'
			chipClassName='bg-white'
			onChange={onChange}
		/>
	);
};

export default PersonaToggleGroup;
