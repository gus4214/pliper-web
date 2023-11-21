import { UseControllerProps } from '@/src/types/formTypes';
import { Textarea, TextareaProps } from 'react-daisyui';
import { FieldPath, FieldValues, useController } from 'react-hook-form';
import { ChangeEvent } from 'react';

interface FormTextFieldProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>
	extends UseControllerProps<TFieldValues, TName> {
	inputProps?: TextareaProps;
	label?: string;
	errorClassName?: string;
	onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextarea = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
	label,
	inputProps,
	errorClassName,
	onChange: onInputChange,
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
			<Textarea
				value={value}
				onChange={(e) => {
					onChange(e);
					onInputChange && onInputChange(e);
				}}
				onBlur={onBlur}
				ref={ref}
				{...inputProps}
			/>
			{error && (
				<label className={`${errorClassName} label`}>
					<span className='label-text-alt text-red-500'>{error.message}</span>
				</label>
			)}
		</div>
	);
};

export default FormTextarea;
