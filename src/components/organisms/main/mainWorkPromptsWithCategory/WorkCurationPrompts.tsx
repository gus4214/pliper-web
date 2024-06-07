import BasicPromptCard from '@/src/components/molecules/card/BasicPromptCard';
import CurationPrompts from '@/src/components/molecules/lists/CurationPrompts';
import { PartialPrompt } from '@/src/fetchers/prompt/types';
import { FC } from 'react';

interface WorkCurationPromptsProps {
	prompts: PartialPrompt[];
	onClick: (promptId: number) => void;
}

const WorkCurationPrompts: FC<WorkCurationPromptsProps> = ({ prompts, onClick }) => {
	return (
		<CurationPrompts
			className='gap-x-6 gap-y-10 min-h-[286px]'
			prompts={prompts}
			renderCards={(prompt) => <BasicPromptCard key={prompt.promptId} prompt={prompt} onClick={() => onClick(prompt.promptId)} />}
		/>
	);
};

export default WorkCurationPrompts;
