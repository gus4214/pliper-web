import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import MyPlipList from '@/src/components/modules/mypage/plip/MyPlipList';
import PromptListSkeleton from '@/src/components/modules/prompt/list/PromptListSkeleton';

const MyPlipListContainer = () => {
	return (
		<AsyncComponentBoundary pendingFallback={<PromptListSkeleton />}>
			<MyPlipList />
		</AsyncComponentBoundary>
	);
};

export default MyPlipListContainer;
