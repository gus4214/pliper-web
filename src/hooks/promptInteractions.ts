import { useGetInteractionByPrompts } from '@/src/fetchers/prompt/my-prompt';
import { InteractionByPrompt } from '@/src/fetchers/prompt/types';
import { useAuthContext } from '@/src/hooks/context';
import { useQuery } from 'react-query';

export const usePromptInteractions = (promptIds: number[]) => {
	const { user } = useAuthContext();
	const { data: interactions } = useGetInteractionByPrompts({ promptIds }, { enabled: !!promptIds?.length && !!user });

	const mapOfPromptInteraction = interactions?.interactions.reduce((acc, curr) => {
		acc.set(curr.promptId, curr);
		return acc;
	}, new Map<number, InteractionByPrompt>());

	const getInteractionByPromptId = (promptId: number) => {
		return mapOfPromptInteraction?.get(promptId);
	};

	return {
		getInteractionByPromptId,
	};
};
