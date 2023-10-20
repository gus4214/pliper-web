import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import PromptMenuList from '@/src/components/modules/prompt/menu/PromptMenuList';

const PromptMenuListContainer = () => {
	return (
		<AsyncComponentBoundary>
			<PromptMenuList />
		</AsyncComponentBoundary>
	);
};

export default PromptMenuListContainer;
