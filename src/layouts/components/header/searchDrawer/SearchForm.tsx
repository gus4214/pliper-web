import FormInput from '@/src/components/modules/form/FormInput';
import { getPromptsApi } from '@/src/fetchers/prompt';
import { searchInputAtom } from '@/src/stores/searchForm';
import { Search } from 'heroicons-react';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { ChangeEvent } from 'react';
import { Input } from 'react-daisyui';
import { useController, useForm } from 'react-hook-form';
import tw from 'twin.macro';

interface BaseFormFields {
	title: string;
}

interface SearchFormProps {
	onEnter?: () => void;
	twStyle?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ onEnter, twStyle }) => {
	const setSearchInputValue = useSetAtom(searchInputAtom);

	const formHandler = useForm<BaseFormFields>({
		mode: 'onChange',
		defaultValues: {
			title: '',
		},
	});

	const { control, handleSubmit } = formHandler;

	const { field: inputField } = useController({
		name: 'title',
		control,
	});

	const onSubmit = async (data: BaseFormFields) => {
		const { title } = data;
		setSearchInputValue(title);
		onEnter && onEnter();
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		inputField.onChange(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={`${twStyle} rounded-[130px] border-none w-[750px] h-[60px] py-2 bg-neutral-50 flex justify-center items-center`}>
				<Search />
				<Input
					placeholder='뭐든 적어주세요, 원하시는 내용을 보여드릴게요!'
					className='w-[374px] border-none bg-neutral-50 focus:outline-none'
					onChange={onChange}
				/>
			</div>
		</form>
	);
};

export default SearchForm;
