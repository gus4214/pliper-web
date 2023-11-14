import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import PromptMenuList from '@/src/components/modules/prompt/menu/PromptMenuList';
import PromptMenuListSkeleton from '@/src/components/modules/prompt/menu/PromptMenuListSkeleton';

const PromptMenuListContainer = () => {
	return (
		<AsyncComponentBoundary pendingFallback={<PromptMenuListSkeleton />}>
			<PromptMenuList />
		</AsyncComponentBoundary>
	);
};

export default PromptMenuListContainer;
