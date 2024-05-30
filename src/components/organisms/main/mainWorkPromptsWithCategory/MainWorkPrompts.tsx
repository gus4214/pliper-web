import PromptEmptyText from '@/src/components/atoms/text/PromptEmptyText';
import BasicPromptCard from '@/src/components/molecules/cards/basicPromptCard';
import { promptKoTextOfPersona } from '@/src/configs/prompt';
import { useGetCurationWeek } from '@/src/fetchers/main';
import { workCategoryAtom } from '@/src/stores/main';
import { addHttpsPrefix, formatNumber } from '@/src/utils/utils';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/router';

const MainWorkPrompts = () => {
	const router = useRouter();
	const jobCategory = useAtomValue(workCategoryAtom);
	const { data } = useGetCurationWeek({ persona: 'JOB', category: jobCategory! }, { enable: !!jobCategory });

	return (
		<div className='w-full gap-x-6 gap-y-10 flex flex-wrap min-h-[286px]'>
			{!data?.prompts?.length && <PromptEmptyText />}
			{data?.prompts?.slice(0, 6).map((prompt) => {
				return (
					<BasicPromptCard
						key={prompt.promptId}
						src={addHttpsPrefix(prompt.imageUrl) || '/images/sample/6.gif'}
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

export default MainWorkPrompts;
