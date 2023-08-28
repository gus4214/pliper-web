import Skeleton from '@/src/components/atoms/skeleton/Skeleton';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import RecentlySearchList from '@/src/layouts/components/header/searchDrawer/recentlySearch/RecentlySearchList';

const RecentlySearchListContainer = () => {
	return (
		<div className='w-full flex-col justify-start items-start gap-6 flex'>
			<div className='w-full justify-between items-center gap-6 flex'>
				<div className='text-black text-base font-semibold'>최근 검색어</div>
				<div className='text-neutral-400 text-[13px] font-medium cursor-pointer'>모두 지우기</div>
			</div>
			<AsyncComponentBoundary pendingFallback={<Skeleton />}>
				<RecentlySearchList />
			</AsyncComponentBoundary>
		</div>
	);
};

export default RecentlySearchListContainer;
