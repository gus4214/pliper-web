import PromptEmptyText from '@/src/components/atoms/text/PromptEmptyText';
import BasicPromptCard from '@/src/components/molecules/cards/basicPromptCard';
import { promptKoTextOfPersona } from '@/src/configs/prompt';
import { Prompt } from '@/src/fetchers/prompt/types';
import { addHttpsPrefix, formatNumber } from '@/src/utils/utils';
import { FC } from 'react';

export type MainWorkPrompt = Pick<Prompt, 'promptId' | 'imageUrl' | 'userNickname' | 'title' | 'personaType' | 'likeCount' | 'viewCount'>;

interface MainWorkPromptsProps {
	prompts: MainWorkPrompt[];
	onClick: (promptId: number) => void;
}

const MainWorkPrompts: FC<MainWorkPromptsProps> = ({ prompts, onClick }) => {
	return (
		<div className='w-full gap-x-6 gap-y-10 flex flex-wrap min-h-[286px]'>
			{prompts.length === 0 && <PromptEmptyText />}
			{prompts?.slice(0, 6).map((prompt) => {
				return (
					<BasicPromptCard
						key={prompt.promptId}
						src={addHttpsPrefix(prompt.imageUrl) || '/images/sample/6.gif'}
						user={prompt.userNickname}
						title={prompt.title}
						tag={promptKoTextOfPersona[prompt.personaType]}
						likeCount={formatNumber(prompt.likeCount)}
						viewCount={formatNumber(prompt.viewCount)}
						onClick={() => onClick(prompt.promptId)}
					/>
				);
			})}
		</div>
	);
};

export default MainWorkPrompts;
