import PromptEmptyText from '@/src/components/atoms/text/PromptEmptyText';
import { PartialPrompt } from '@/src/fetchers/prompt/types';
import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CurationPromptCardsProps {
	prompts: PartialPrompt[];
	renderCards: (prompt: PartialPrompt) => ReactNode;
	className?: string;
}

const CurationPromptCards: FC<CurationPromptCardsProps> = ({ prompts, renderCards, className }) => {
	return (
		<div className={twMerge(`flex flex-wrap justify-center ${className}`)}>
			{prompts.length === 0 && <PromptEmptyText />}
			{prompts?.slice(0, 6).map(renderCards)}
		</div>
	);
};

export default CurationPromptCards;
