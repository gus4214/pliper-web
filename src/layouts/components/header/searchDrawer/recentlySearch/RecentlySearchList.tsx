import { deleteAllSearchedByUserApi, deleteSearchedByUserApi, useGetSearchedByUser } from '@/src/fetchers/search';
import RecentlySearchItem from '@/src/layouts/components/header/searchDrawer/recentlySearch/RecentlySearchItem';

const RecentlySearchList = () => {
	const { data, refetch } = useGetSearchedByUser();

	const dataArray = data ? Object.values(data) : [];

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
			<div className='flex-col justify-start items-start gap-3 flex'>
				{dataArray.map((v) => (
					<RecentlySearchItem text={v.keyword} key={v.historyId} historyId={v.historyId} onClick={handleDelete} />
				))}
			</div>
		</>
	);
};

export default RecentlySearchList;
