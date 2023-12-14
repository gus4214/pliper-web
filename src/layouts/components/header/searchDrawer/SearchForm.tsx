import { searchInputAtom } from '@/src/stores/searchForm';
import { Search } from 'heroicons-react';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Input } from 'react-daisyui';
import { useForm } from 'react-hook-form';

interface BaseFormFields {
	title: string;
}

interface SearchFormProps {
	placeholder?: string;
	onEnter?: () => void;
	defaultValue?: string;
	twStyle?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ placeholder = '뭐든 적어주세요, 원하시는 내용을 보여드릴게요!', onEnter, twStyle }) => {
	const router = useRouter();
	const [searchInputValue, setSearchInputValue] = useAtom(searchInputAtom);
	const [searchText, setSearchText] = useState(searchInputValue);

	const formHandler = useForm<BaseFormFields>({
		mode: 'onChange',
		defaultValues: {
			title: searchInputValue,
		},
	});

	const { control, handleSubmit } = formHandler;

	const onSubmit = async (data: BaseFormFields) => {
		const { title } = data;
		setSearchInputValue(searchText);
		onEnter && onEnter();
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
	};

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			if (url !== '/prompt') {
				setSearchInputValue('');
			}
		};
		router.events.on('routeChangeComplete', handleRouteChange);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events, setSearchInputValue]);

	useEffect(() => {
		setSearchText(searchInputValue);
	}, [searchInputValue]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div
				className={`${twStyle} focus-within:border-teal-200 focus-within:bg-white rounded-[130px] border border-transparent w-[750px] h-[60px] py-2 bg-neutral-50 flex justify-center items-center`}
			>
				<Search />
				<Input
					value={searchText}
					placeholder={placeholder}
					className='w-[374px] border-none bg-neutral-50 focus:outline-none focus:bg-white'
					onChange={onChange}
				/>
			</div>
		</form>
	);
};

export default SearchForm;
