import DailyCurationPrompts from '@/src/components/organisms/main/mainDailyPromptsWithCategory/DailyCurationPrompts';
import { useGetCurationWeek } from '@/src/fetchers/main';
import { dailyCategoryAtom } from '@/src/stores/main';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/router';

const DailyCurationPromptsContainer = () => {
	const dailyCategory = useAtomValue(dailyCategoryAtom);

	const router = useRouter();
	const { data } = useGetCurationWeek({ persona: 'DAILY', category: dailyCategory! }, { enable: !!dailyCategory });

	const handleClick = (promptId: number) => {
		router.push(`/prompt/${promptId}`);
	};

	return <DailyCurationPrompts prompts={data?.prompts || []} onClick={handleClick} />;
};

export default DailyCurationPromptsContainer;
