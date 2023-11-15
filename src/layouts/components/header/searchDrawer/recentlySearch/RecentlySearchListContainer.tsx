import Skeleton from '@/src/components/atoms/skeleton/Skeleton';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import RecentlySearchList from '@/src/layouts/components/header/searchDrawer/recentlySearch/RecentlySearchList';
import RecentlySearchListSkeleton from '@/src/layouts/components/header/searchDrawer/recentlySearch/RecentlySearchListSkeleton';

const RecentlySearchListContainer = () => {
	return (
		<div className='w-full flex-col justify-start items-start gap-6 flex'>
			<AsyncComponentBoundary pendingFallback={<RecentlySearchListSkeleton />}>
				<RecentlySearchList />
			</AsyncComponentBoundary>
		</div>
	);
};

export default RecentlySearchListContainer;
