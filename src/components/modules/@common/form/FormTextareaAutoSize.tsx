import { UseControllerProps } from '@/src/types/formTypes';
import { Textarea, TextareaProps } from 'react-daisyui';
import { FieldPath, FieldValues, useController } from 'react-hook-form';
import { ChangeEvent } from 'react';
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize';

interface FormTextFieldProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>
	extends UseControllerProps<TFieldValues, TName> {
	inputProps?: TextareaAutosizeProps;
	label?: string;
	errorClassName?: string;
	onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	ActionComponent?: React.ReactNode;
}

const FormTextareaAutoSize = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
	label,
	inputProps,
	errorClassName,
	ActionComponent,
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
			<div className={'relative'}>
				<TextareaAutosize
					value={value}
					onChange={(e) => {
						onChange(e);
						onInputChange && onInputChange(e);
					}}
					onBlur={onBlur}
					ref={ref}
					{...inputProps}
				/>
				{ActionComponent && ActionComponent}
			</div>
			{error && (
				<label className={`${errorClassName ? errorClassName : ''} label pt-0`}>
					<span className='label-text-alt text-red-500'>{error.message}</span>
				</label>
			)}
		</div>
	);
};

export default FormTextareaAutoSize;
