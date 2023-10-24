import { GetInteractionByPromptsRequest, GetInteractionByPromptsResult } from '@/src/fetchers/prompt/types';
import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { getCookie } from '@/src/utils/cookie';
import { accessTokenKey } from '@/src/configs/auth';
import { useQuery } from 'react-query';
import { UseQueryOptions } from 'react-query/types/react/types';

export const getInteractionByPromptsApi = (input: GetInteractionByPromptsRequest) => {
	return callApi<GetInteractionByPromptsRequest, GetInteractionByPromptsResult>({
		api: apis.GET_INTERACTION_BY_PROMPTS,
		queryString: input,
		token: getCookie(accessTokenKey),
	});
};

const queryKeys = {
	getPromptCategory: (input: GetInteractionByPromptsRequest) => ['my-prompt', 'inter', input] as const,
};

export const useGetInteractionByPrompts = (input: GetInteractionByPromptsRequest, options?: object) => {
	console.log(options);
	return useQuery(queryKeys.getPromptCategory(input), () => getInteractionByPromptsApi(input), {
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
		...options,
	});
};
