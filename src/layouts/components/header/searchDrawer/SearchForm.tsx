import FormInput from '@/src/components/modules/form/FormInput';
import { getPromptsApi } from '@/src/fetchers/prompt';
import { useRouter } from 'next/router';
import React, { ChangeEvent } from 'react';
import { Input } from 'react-daisyui';
import { useController, useForm } from 'react-hook-form';

interface BaseFormFields {
	title: string;
}

interface SearchFormProps {
	onClose?: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onClose }) => {
	const router = useRouter();
	const formHandler = useForm<BaseFormFields>({
		mode: 'onChange',
		defaultValues: {
			title: '',
		},
	});

	const { control, handleSubmit, setValue } = formHandler;

	const { field: inputField } = useController({
		name: 'title',
		control,
	});

	const onSubmit = async (data: BaseFormFields) => {
		const { title } = data;
		const result = await getPromptsApi({ title });
		router.push('/prompt');
		onClose && onClose();
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		inputField.onChange(e.target.value);
	};

	return (
		<form className='w-full' onSubmit={handleSubmit(onSubmit)}>
			<Input
				className='rounded-[130px] shadow border-none w-full'
				placeholder='뭐든 적어주세요, 원하시는 내용을 보여드릴게요!'
				onChange={onChange}
			/>
		</form>
	);
};

export default SearchForm;
