import { GetInteractionByPromptsRequest, GetInteractionByPromptsResult, GetPromptsRequest, GetPromptsResult } from '@/src/fetchers/prompt/types';
import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { getCookie } from '@/src/utils/cookie';
import { accessTokenKey } from '@/src/configs/auth';
import { useInfiniteQuery, useQuery } from 'react-query';
import { UseQueryOptions } from 'react-query/types/react/types';

export const getInteractionByPromptsApi = (input: GetInteractionByPromptsRequest) => {
	return callApi<GetInteractionByPromptsRequest, GetInteractionByPromptsResult>({
		api: apis.GET_INTERACTION_BY_PROMPTS,
		queryString: input,
		token: getCookie(accessTokenKey),
	});
};

export const getMyPromptsApi = (input: GetPromptsRequest) => {
	return callApi<GetPromptsRequest, GetPromptsResult>({
		api: apis.GET_PROMPT,
		queryString: input,
		token: getCookie(accessTokenKey),
	});
};

export const getMyPromptsByLikeApi = (input: GetPromptsRequest) => {
	return callApi<GetPromptsRequest, GetPromptsResult>({
		api: apis.GET_MY_PROMPT_LIKE,
		queryString: input,
		token: getCookie(accessTokenKey),
	});
};

export const getMyPromptsByReliabilityApi = (input: GetPromptsRequest) => {
	return callApi<GetPromptsRequest, GetPromptsResult>({
		api: apis.GET_MY_PROMPT_RELIABILITY,
		queryString: input,
		token: getCookie(accessTokenKey),
	});
};

export const getMyPromptsByViewApi = (input: GetPromptsRequest) => {
	return callApi<GetPromptsRequest, GetPromptsResult>({
		api: apis.GET_MY_PROMPT_VIEW,
		queryString: input,
		token: getCookie(accessTokenKey),
	});
};

const queryKeys = {
	getPromptCategory: (input: GetInteractionByPromptsRequest) => ['my-prompt', 'inter', input] as const,
	getMyPrompts: (input: GetPromptsRequest) => ['prompt', 'user', input] as const,
	getMyPromptsByLike: (input: GetPromptsRequest) => ['prompt', 'user', 'like', input] as const,
	getMyPromptsByReliability: (input: GetPromptsRequest) => ['prompt', 'user', 'reliability', input] as const,
	getMyPromptsByView: (input: GetPromptsRequest) => ['prompt', 'user', 'view', input] as const,
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

export const useGetMyPrompts = (input: GetPromptsRequest) => {
	return useQuery(queryKeys.getMyPrompts(input), () => getMyPromptsByLikeApi(input), {
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};

export const useGetMyPromptsByLike = (input: GetPromptsRequest) => {
	return useQuery(queryKeys.getMyPromptsByLike(input), () => getMyPromptsByLikeApi(input), {
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};

export const useGetMyPromptsByReliability = (input: GetPromptsRequest) => {
	return useQuery(queryKeys.getMyPromptsByReliability(input), () => getMyPromptsByReliabilityApi(input), {
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};

export const useGetMyPromptsByView = (input: GetPromptsRequest) => {
	return useQuery(queryKeys.getMyPromptsByView(input), () => getMyPromptsByViewApi(input), {
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};

export const useInfiniteGetMyPromptsByView = (input: GetPromptsRequest) => {
	const myPromptsByView = async ({ pageParam = 1 }) => {
		const data = await getMyPromptsByViewApi({ ...input, page: pageParam });

		return {
			...data,
			currentPage: pageParam,
		};
	};

	return useInfiniteQuery(queryKeys.getMyPromptsByView(input), myPromptsByView, {
		getNextPageParam: (lastPage, allPages) => {
			// 마지막 페이지가 아닐 경우 다음 페이지 번호를 반환
			if (lastPage.page !== lastPage.totalPages) {
				return lastPage.currentPage + 1;
			}
			// 마지막 페이지일 경우 undefined 반환
			return undefined;
		},
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};
