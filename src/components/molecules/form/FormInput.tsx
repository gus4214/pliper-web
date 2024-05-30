import { UseControllerProps } from '@/src/types/formTypes';
import { Input, InputProps } from 'react-daisyui';
import { FieldPath, FieldValues, useController } from 'react-hook-form';

interface FormTextFieldProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>
	extends UseControllerProps<TFieldValues, TName> {
	inputProps?: InputProps;
	label?: string;
	errorClassName?: string;
}

const FormInput = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
	label,
	inputProps,
	errorClassName,
	...props
}: FormTextFieldProps<TFieldValues, TName>) => {
	const {
		field: { value, onChange, onBlur, ref },
		fieldState: { error },
	} = useController(props);

	return (
		<div className='form-control w-full relative'>
			{label && (
				<label className='label'>
					<span className='label-text'>{label}</span>
				</label>
			)}
			<Input value={value} onChange={onChange} onBlur={onBlur} ref={ref} {...inputProps} />
			{error && (
				<label className={`${errorClassName} label`}>
					<span className='label-text-alt text-red-500'>{error.message}</span>
				</label>
			)}
		</div>
	);
};

export default FormInput;
