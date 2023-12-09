import { useGetTopSearched } from '@/src/fetchers/search';
import { searchInputAtom } from '@/src/stores/searchForm';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

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
		<PerfectScrollbar
			options={{ wheelPropagation: false }}
			className='w-full max-h-[118px] flex flex-col justify-start items-start gap-3 overflow-y-auto'
		>
			{dataArray.map((v, i) => (
				<span
					className='text-neutral-800 text-sm font-normal leading-[14px] cursor-pointer hover:underline'
					onClick={() => onClick(v.keyword)}
					key={i}
				>
					{v.keyword}
				</span>
			))}
		</PerfectScrollbar>
	);
};

export default PopularSearchList;
