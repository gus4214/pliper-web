import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import PromptList from '@/src/components/modules/prompt/list/PromptList';

const PromptListContainer = () => {
	return (
		<div className='w-[944px]'>
			<AsyncComponentBoundary>
				<PromptList />
			</AsyncComponentBoundary>
		</div>
	);
};

export default PromptListContainer;
