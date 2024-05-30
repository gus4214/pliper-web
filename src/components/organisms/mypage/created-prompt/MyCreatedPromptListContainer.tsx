import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import MyCreatedPromptList from '@/src/components/organisms/mypage/created-prompt/MyCreatedPromptList';
import PromptListSkeleton from '@/src/components/organisms/prompt/list/PromptListSkeleton';

const MyCreatedPromptListContainer = () => {
	return (
		<AsyncComponentBoundary pendingFallback={<PromptListSkeleton />}>
			<MyCreatedPromptList />
		</AsyncComponentBoundary>
	);
};

export default MyCreatedPromptListContainer;
