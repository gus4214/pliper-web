import { searchInputAtom } from '@/src/stores/searchForm';
import { Search } from 'heroicons-react';
import { useAtom } from 'jotai';
import React, { ChangeEvent, useEffect } from 'react';
import { Input } from 'react-daisyui';
import { useController, useForm } from 'react-hook-form';

interface BaseFormFields {
	title: string;
}

interface SearchFormProps {
	placeholder?: string;
	onEnter?: () => void;
	twStyle?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ placeholder = '뭐든 적어주세요, 원하시는 내용을 보여드릴게요!', onEnter, twStyle }) => {
	const [searchInputValue, setSearchInputValue] = useAtom(searchInputAtom);

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
			<div
				className={`${twStyle} focus-within:border-teal-200 rounded-[130px] border border-transparent w-[750px] h-[60px] py-2 bg-neutral-50 flex justify-center items-center`}
			>
				<Search />
				<Input
					defaultValue={searchInputValue}
					placeholder={placeholder}
					className='w-[374px] border-none bg-neutral-50 focus:outline-none'
					onChange={onChange}
				/>
			</div>
		</form>
	);
};

export default SearchForm;
