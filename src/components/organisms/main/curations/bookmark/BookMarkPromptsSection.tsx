import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import BookMarkPromptsContainer from '@/src/containers/main/BookMarkPromptsContainer';
import BookMarkPromptsSkeleton from '@/src/components/organisms/main/curations/bookmark/BookMarkPromptsSkeleton';

const BookMarkPromptsSection = () => {
	return (
		<>
			<div className='max-w-[1200px] w-full flex flex-col items-center gap-14 relative'>
				<h1 className='text-center text-white text-[32px] font-bold'>가장 많은 북마크로 저장된 프롬프트</h1>
				<AsyncComponentBoundary pendingFallback={<BookMarkPromptsSkeleton count={3} />}>
					<BookMarkPromptsContainer />
				</AsyncComponentBoundary>
			</div>
		</>
	);
};

export default BookMarkPromptsSection;
