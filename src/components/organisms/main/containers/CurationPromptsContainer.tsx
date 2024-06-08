import CurationPrompts from '@/src/components/molecules/lists/CurationPrompts';
import { useGetCurationWeek } from '@/src/fetchers/main';
import { PartialPrompt, PersonaType } from '@/src/fetchers/prompt/types';
import { FC, ReactNode } from 'react';

interface CurationPromptsContainerProps {
	persona: PersonaType;
	selectedCategory?: string;
	renderPromptCards: (prompt: PartialPrompt) => ReactNode;
	className?: string;
}

const CurationPromptsContainer: FC<CurationPromptsContainerProps> = ({ persona, selectedCategory, renderPromptCards, className }) => {
	const { data } = useGetCurationWeek({ persona, category: selectedCategory! }, { enable: !!selectedCategory });

	return <CurationPrompts className={className} prompts={data?.prompts || []} renderCards={renderPromptCards} />;
};

export default CurationPromptsContainer;
