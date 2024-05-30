import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import MyPlipList from '@/src/components/organisms/mypage/plip/MyPlipList';
import PromptListSkeleton from '@/src/components/organisms/prompt/list/PromptListSkeleton';

const MyPlipListContainer = () => {
	return (
		<AsyncComponentBoundary pendingFallback={<PromptListSkeleton />}>
			<MyPlipList />
		</AsyncComponentBoundary>
	);
};

export default MyPlipListContainer;
