import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import MyPlipList from '@/src/components/modules/mypage/plip/MyPlipList';

const MyPlipListContainer = () => {
	return (
		<AsyncComponentBoundary>
			<MyPlipList />
		</AsyncComponentBoundary>
	);
};

export default MyPlipListContainer;
