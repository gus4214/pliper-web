import { accessTokenKey } from '@/src/configs/auth';
import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { GetPromptsRequest, GetPromptsResult } from '@/src/fetchers/prompt/types';
import { getCookie } from '@/src/utils/cookie';
import { useInfiniteQuery } from 'react-query';

export const getMyPromptClipsApi = (input: GetPromptsRequest) => {
	return callApi<GetPromptsRequest, GetPromptsResult>({
		api: apis.GET_MY_CLIPS,
		queryString: input,
		token: getCookie(accessTokenKey),
	});
};

const queryKeys = {
	getMyPromptClips: (input: GetPromptsRequest) => ['prompt', 'clip', input] as const,
};

export const useInfiniteGetMyPromptClips = (input: GetPromptsRequest) => {
	const myPromptClips = async ({ pageParam = 1 }) => {
		const data = await getMyPromptClipsApi({ ...input, page: pageParam });

		return {
			...data,
			currentPage: pageParam,
		};
	};

	return useInfiniteQuery(queryKeys.getMyPromptClips(input), myPromptClips, {
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
