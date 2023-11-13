import PromptCard from '@/src/components/modules/main/card/PromptCard';
import { useGetCurationMain, useGetCurationWeek } from '@/src/fetchers/main';
import { workCategoryAtom } from '@/src/stores/main';
import { addHttpsPrefix, formatNumber } from '@/src/utils/utils';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/router';
import { promptKoTextOfPersona } from '@/src/configs/prompt';
import PromptEmptyText from '@/src/components/atoms/text/PromptEmptyText';

const MainWorkPromptList = () => {
	const router = useRouter();
	const jobCategory = useAtomValue(workCategoryAtom);
	const { data } = useGetCurationWeek({ persona: 'JOB', category: jobCategory! }, { enable: !!jobCategory });

	return (
		<div className='w-full gap-x-6 gap-y-10 flex flex-wrap min-h-[286px]'>
			{data!.prompts.length <= 0 && <PromptEmptyText />}
			{data?.prompts?.map((prompt) => {
				return (
					<PromptCard
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

export default MainWorkPromptList;
