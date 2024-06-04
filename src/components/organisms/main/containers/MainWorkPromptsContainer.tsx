import MainWorkPrompts from '@/src/components/organisms/main/mainWorkPromptsWithCategory/MainWorkPrompts';
import { useGetCurationWeek } from '@/src/fetchers/main';
import { workCategoryAtom } from '@/src/stores/main';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/router';

const MainWorkPromptsContainer = () => {
	const jobCategory = useAtomValue(workCategoryAtom);

	const router = useRouter();
	const { data } = useGetCurationWeek({ persona: 'JOB', category: jobCategory! }, { enable: !!jobCategory });

	const handleClick = (promptId: number) => {
		router.push(`/prompt/${promptId}`);
	};

	return <MainWorkPrompts prompts={data?.prompts || []} onClick={handleClick} />;
};

export default MainWorkPromptsContainer;
