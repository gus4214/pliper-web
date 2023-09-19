import SelectChip from '@/src/components/atoms/chip/SelectChip';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';

interface ChipOption {
	code: string;
	label: string;
}

interface FormToggleMultiChipGroupProps<TFieldValues extends FieldValues = FieldValues> {
	name: Path<TFieldValues>;
	control: Control<TFieldValues>;
	options: ChipOption[];
	rounded?: boolean;
	color?: 'primary' | 'secondary';
	className?: string;
}

const FormToggleMultiChipGroup = <TFieldValues extends FieldValues = FieldValues>({
	name,
	control,
	options,
	rounded,
	color,
	className,
}: FormToggleMultiChipGroupProps<TFieldValues>) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { value, onChange } }) => (
				<div className={`${className} flex items-center gap-2`}>
					{options.map((option) => {
						const isSelected = value && Array.isArray(value) ? value.includes(option.code) : false;

						return (
							<SelectChip
								key={option.code}
								label={option.label}
								color={color}
								rounded={rounded}
								selected={isSelected}
								onClick={() => {
									if (isSelected) {
										const updatedValues = value.filter((v: string) => v !== option.code);
										onChange(updatedValues);
									} else {
										onChange([...value, option.code]);
									}
								}}
							/>
						);
					})}
				</div>
			)}
		/>
	);
};

export default FormToggleMultiChipGroup;
