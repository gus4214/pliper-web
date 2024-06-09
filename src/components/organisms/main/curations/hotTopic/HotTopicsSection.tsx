import Skeleton from '@/src/components/atoms/skeleton/Skeleton';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import HotTopicsContainer from '@/src/containers/main/HotTopicsContainer';

const HotTopicsSection = () => {
	return (
		<div className='max-w-[1200px] w-full flex flex-col items-center gap-8'>
			<h1 className='text-2xl font-bold leading-normal text-center text-black'>이번 한 주, 가장 인기있는 검색어</h1>
			<AsyncComponentBoundary pendingFallback={<Skeleton height='h-8' />}>
				<HotTopicsContainer />
			</AsyncComponentBoundary>
		</div>
	);
};

export default HotTopicsSection;
