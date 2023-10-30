import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import MyCreatedPromptList from '@/src/components/modules/mypage/created-prompt/MyCreatedPromptList';

const MyCreatedPromptListContainer = () => {
	return (
		<AsyncComponentBoundary>
			<MyCreatedPromptList />
		</AsyncComponentBoundary>
	);
};

export default MyCreatedPromptListContainer;
