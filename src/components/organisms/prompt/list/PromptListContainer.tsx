import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import PromptList from '@/src/components/organisms/prompt/list/PromptList';
import PromptListSkeleton from '@/src/components/organisms/prompt/list/PromptListSkeleton';

const PromptListContainer = () => {
	return (
		<div className='w-[944px]'>
			<AsyncComponentBoundary pendingFallback={<PromptListSkeleton />}>
				<PromptList />
			</AsyncComponentBoundary>
		</div>
	);
};

export default PromptListContainer;
