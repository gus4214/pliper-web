import VerticalPromptCard from '@/src/components/molecules/card/VerticalPromptCard';
import CurationPrompts from '@/src/components/molecules/lists/CurationPrompts';
import { PartialPrompt } from '@/src/fetchers/prompt/types';
import { FC } from 'react';

interface DailyCurationPromptsProps {
	prompts: PartialPrompt[];
	onClick: (promptId: number) => void;
}

const DailyCurationPrompts: FC<DailyCurationPromptsProps> = ({ prompts, onClick }) => {
	return (
		<CurationPrompts
			className='gap-x-6 gap-y-6 min-h-[252px]'
			prompts={prompts || []}
			renderCards={(prompt) => <VerticalPromptCard key={prompt.promptId} prompt={prompt} onClick={() => onClick(prompt.promptId)} />}
		/>
	);
};

export default DailyCurationPrompts;
