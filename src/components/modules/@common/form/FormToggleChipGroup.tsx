import SelectChip from '@/src/components/atoms/chip/SelectChip';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';

interface ChipOption {
	code: string;
	label: string;
}

interface FormToggleChipGroupProps<TFieldValues extends FieldValues = FieldValues> {
	name: Path<TFieldValues>;
	control: Control<TFieldValues>;
	options: ChipOption[];
	rounded?: boolean;
	color?: 'primary' | 'secondary';
	className?: string;
}

const FormToggleChipGroup = <TFieldValues extends FieldValues = FieldValues>({
	name,
	control,
	options,
	rounded,
	color,
	className,
}: FormToggleChipGroupProps<TFieldValues>) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { value, onChange } }) => (
				<div className={`${className} flex items-center gap-2`}>
					{options.map((option) => (
						<SelectChip
							key={option.code}
							label={option.label}
							color={color}
							rounded={rounded}
							selected={value === option.code}
							onClick={() => {
								if (value === option.code) {
									onChange(''); // 이미 선택된 항목을 클릭한 경우 선택을 해제합니다.
								} else {
									onChange(option.code); // 그렇지 않으면 현재 클릭한 항목만 선택합니다.
								}
							}}
						/>
					))}
				</div>
			)}
		/>
	);
};

export default FormToggleChipGroup;
