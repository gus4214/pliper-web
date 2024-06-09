import BookMarkPrompts from '@/src/components/organisms/main/curations/bookmark/BookMarkPrompts';
import { useGetCurationMain } from '@/src/fetchers/main';
import { useRouter } from 'next/router';

const BookMarkPromptsContainer = () => {
	const { data } = useGetCurationMain({ dailyCategory: null, jobCategory: null });
	const router = useRouter();

	const handlePromptClick = (promptId: number) => {
		router.push(`/prompt/${promptId}`);
	};

	return <BookMarkPrompts prompts={data?.bestClip || []} onPromptClick={handlePromptClick} />;
};

export default BookMarkPromptsContainer;
