import { useGetTopSearched } from '@/src/fetchers/search';
import { searchInputAtom } from '@/src/stores/searchForm';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/router';

const PopularSearchList = () => {
	const { data } = useGetTopSearched();
	const router = useRouter();
	const setSearchInputValue = useSetAtom(searchInputAtom);

	const dataArray = data ? Object.values(data) : [];

	const onClick = async (keyword: string) => {
		await setSearchInputValue(keyword);
		router.push('/prompt');
	};

	return (
		<div className='flex flex-col justify-start items-start gap-3'>
			{dataArray.map((v, i) => (
				<span className='text-neutral-800 text-sm font-normal cursor-pointer hover:underline' onClick={() => onClick(v.keyword)} key={i}>
					{v.keyword}
				</span>
			))}
		</div>
	);
};

export default PopularSearchList;
