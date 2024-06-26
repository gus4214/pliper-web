import PromptEmptyText from '@/src/components/atoms/text/PromptEmptyText';
import DailyPromptCard from '@/src/components/modules/main/card/DailyPromptCard';
import { promptKoTextOfPersona } from '@/src/configs/prompt';
import { useGetCurationWeek } from '@/src/fetchers/main';
import { dailyCategoryAtom } from '@/src/stores/main';
import { addHttpsPrefix, formatNumber } from '@/src/utils/utils';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/router';

const MainDailyPromptList = () => {
	const router = useRouter();
	const dailyCategory = useAtomValue(dailyCategoryAtom);
	const { data } = useGetCurationWeek({ persona: 'DAILY', category: dailyCategory! }, { enable: !!dailyCategory });

	return (
		<div className='w-full gap-x-6 gap-y-6 flex flex-wrap min-h-[252px]'>
			{!data?.prompts?.length && <PromptEmptyText />}
			{data?.prompts?.slice(0, 4).map((prompt) => {
				return (
					<DailyPromptCard
						key={prompt.promptId}
						src={addHttpsPrefix(prompt.imageUrl) || '/images/sample/3.jpeg'}
						user={prompt.userNickname}
						title={prompt.title}
						tag={promptKoTextOfPersona[prompt.personaType]}
						likeCount={formatNumber(prompt.likeCount)}
						viewCount={formatNumber(prompt.viewCount)}
						onClick={() => router.push(`/prompt/${prompt.promptId}`)}
					/>
				);
			})}
		</div>
	);
};

export default MainDailyPromptList;
