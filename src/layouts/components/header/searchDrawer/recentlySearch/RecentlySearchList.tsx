import { deleteAllSearchedByUserApi, deleteSearchedByUserApi, useGetSearchedByUser } from '@/src/fetchers/search';
import RecentlySearchItem from '@/src/layouts/components/header/searchDrawer/recentlySearch/RecentlySearchItem';
import { searchInputAtom } from '@/src/stores/searchForm';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

const RecentlySearchList = () => {
	const { data, refetch } = useGetSearchedByUser();
	const router = useRouter();
	const setSearchInputValue = useSetAtom(searchInputAtom);

	const dataArray = data ? Object.values(data) : [];

	const handleClick = async (text: string) => {
		await setSearchInputValue(text);
		router.push('/prompt');
	};

	const handleDelete = async (historyId: number) => {
		try {
			await deleteSearchedByUserApi({ historyId });
			await refetch();
		} catch (error) {
			console.error('Error deleting search item:', error);
			// TODO : 에러에 관한 유저 노티
		}
	};

	const handleAllDelete = async () => {
		try {
			await deleteAllSearchedByUserApi();
			await refetch();
		} catch (error) {
			console.error('Error deleting all search item:', error);
		}
	};

	return (
		<>
			<div className='w-full justify-between items-center gap-6 flex'>
				<div className='text-black text-base font-semibold'>최근 검색어</div>
				{dataArray.length > 0 && (
					<span className='text-neutral-400 text-[13px] font-medium cursor-pointer' onClick={handleAllDelete}>
						모두 지우기
					</span>
				)}
			</div>
			<PerfectScrollbar
				options={{ wheelPropagation: false }}
				className='w-full max-h-[148px] flex flex-col justify-start items-start gap-3 overflow-y-auto'
			>
				{dataArray.map((v) => (
					<RecentlySearchItem
						text={v.keyword}
						key={v.historyId}
						historyId={v.historyId}
						onDeleteClick={handleDelete}
						onClick={handleClick}
					/>
				))}
			</PerfectScrollbar>
		</>
	);
};

export default RecentlySearchList;
