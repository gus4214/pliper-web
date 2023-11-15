import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import MyCreatedPromptList from '@/src/components/modules/mypage/created-prompt/MyCreatedPromptList';
import PromptListSkeleton from '@/src/components/modules/prompt/list/PromptListSkeleton';

const MyCreatedPromptListContainer = () => {
	return (
		<AsyncComponentBoundary pendingFallback={<PromptListSkeleton />}>
			<MyCreatedPromptList />
		</AsyncComponentBoundary>
	);
};

export default MyCreatedPromptListContainer;
