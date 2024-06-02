import Skeleton from '@/src/components/atoms/skeleton/Skeleton';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import RecentlySearchList from '@/src/layouts/components/header/appBar/searchDrawer/recentlySearch/RecentlySearchList';
import RecentlySearchListSkeleton from '@/src/layouts/components/header/appBar/searchDrawer/recentlySearch/RecentlySearchListSkeleton';

const RecentlySearchListContainer = () => {
	return (
		<div className='w-full max-h-[220px] flex-col justify-start items-start gap-6 flex'>
			<AsyncComponentBoundary pendingFallback={<RecentlySearchListSkeleton />}>
				<RecentlySearchList />
			</AsyncComponentBoundary>
		</div>
	);
};

export default RecentlySearchListContainer;
