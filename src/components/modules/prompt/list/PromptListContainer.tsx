import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import PromptList from '@/src/components/modules/prompt/list/PromptList';
import PromptListSkeleton from '@/src/components/modules/prompt/list/PromptListSkeleton';

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
