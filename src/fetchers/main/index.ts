import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { QueryClient, useQuery } from 'react-query';
import { Prompt } from "@/src/fetchers/prompt/types";

export interface GetCurationMainRequest {
	dailyCategory?: string | null;
	jobCategory?: string | null;
}

export interface GetCurationMainResult {
	bestClip: Prompt[];
	bestWeekDaily: Prompt[];
	bestWeekJob: Prompt[];
	keywords: Keyword[];
}

export interface Keyword {
	createdAt: string;
	keyword: string;
}

export const getCurationMain = (filter: GetCurationMainRequest) => {
	return callApi<GetCurationMainRequest, GetCurationMainResult>({
		api: apis.GET_CURATION_MAIN,
		queryString: filter,
	});
};

const queryKeys = {
	getCurationMainKey: (filter: GetCurationMainRequest) => ['curation', 'main', filter] as const,
};

export const useGetCurationMain = (filter: GetCurationMainRequest) => {
	return useQuery(queryKeys.getCurationMainKey(filter), () => getCurationMain(filter), {
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};

export const prefetchGetCurationMain = (client: QueryClient, filter: GetCurationMainRequest) => {
	return client.prefetchQuery(queryKeys.getCurationMainKey(filter), () => getCurationMain(filter));
};
