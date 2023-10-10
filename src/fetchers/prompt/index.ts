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
	RegisterPromptRequest,
	RegisterPromptResult,
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

export const registerPromptApi = (data: RegisterPromptRequest) => {
	return callApi<RegisterPromptRequest, RegisterPromptResult>({
		api: apis.REGISTER_PROMPT_TEMPLATE,
		body: data,
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
			try {
				const result = await getPromptsApi({ ...input, page: pageParam });
				return result;
			} catch (error) {
				return undefined;
			}
		},
		{
			getNextPageParam: (lastPage, allPages) => {
				// 마지막 페이지가 아닐 경우 다음 페이지 번호를 반환
				if (!lastPage?.last) {
					return (lastPage?.page ?? 0) + 1;
				}
				// 마지막 페이지일 경우 undefined 반환
				return undefined;
			},
			suspense: true,
			refetchOnReconnect: false,
			refetchOnWindowFocus: false,
		}
	);
};
