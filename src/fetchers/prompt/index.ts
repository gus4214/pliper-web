import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { accessTokenKey } from '@/src/configs/auth';
import { getCookie } from '@/src/utils/cookie';
import { useInfiniteQuery, useQuery } from 'react-query';
import {
	GetAiToolsRequest,
	GetAiToolsResult,
	GetAiToolsType,
	GetPromptCategoryResult,
	GetPromptsRequest,
	GetPromptsResult,
} from '@/src/fetchers/prompt/types';

export const getPromptsApi = (input: GetPromptsRequest) => {
	return callApi<GetPromptsRequest, GetPromptsResult>({
		api: apis.GET_PROMPT,
		queryString: input,
		token: getCookie(accessTokenKey),
	});
};

export const getPromptCategoryApi = () => {
	return callApi<never, GetPromptCategoryResult>({
		api: apis.GET_CATEGORY_API,
		token: getCookie(accessTokenKey),
	});
};

export const getAiToolsApi = (type: GetAiToolsRequest) => {
	return callApi<GetAiToolsRequest, GetAiToolsResult>({
		api: apis.GET_AI_TOOLS_API,
		queryString: type,
		token: getCookie(accessTokenKey),
	});
};

const queryKeys = {
	getPromptCategory: () => ['prompt', 'category'] as const,
	getPromptList: (input: GetPromptsRequest) => ['prompt', input] as const,
	getAiTools: (type: GetAiToolsRequest) => ['aiTools', type] as const,
};

export const useGetPrompts = (input: GetPromptsRequest) => {
	return useQuery(queryKeys.getPromptList(input), () => getPromptsApi(input), {
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};

export const useGetPromptCategory = () => {
	return useQuery(queryKeys.getPromptCategory(), () => getPromptCategoryApi(), {
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};

export const useGetAiTools = (type: GetAiToolsRequest) => {
	return useQuery(queryKeys.getAiTools(type), () => getAiToolsApi(type), {
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};

export const useInfiniteGetPrompts = (input: GetPromptsRequest) => {
	return useInfiniteQuery(
		queryKeys.getPromptList(input),
		async ({ pageParam = 1 }) => {
			const result = await getPromptsApi({ ...input, page: pageParam });

			// if (result.isError) {
			// 	return undefined;
			// }

			return {
				...result,
			};
		}
		// {
		// 	getNextPageParam: (data) => {
		// 		if (!data || data?.last) {
		// 			return undefined;
		// 		}
		// 		return (data?.pageable?.pageNumber || 0) + 2;
		// 	},
		// 	suspense: true,
		// 	refetchOnReconnect: false,
		// 	refetchOnWindowFocus: false,
		// }
	);
};
