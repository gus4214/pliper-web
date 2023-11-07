import {callApi} from '@/src/fetchers';
import {apis} from '@/src/fetchers/apis';
import {QueryClient, useQuery} from 'react-query';
import {PersonaType, Prompt} from "@/src/fetchers/prompt/types";
import {UseBaseQueryOptions, UseQueryOptions} from "react-query/types/react/types";
import {QueryObserverOptions} from "react-query/types/core/types";

export interface GetCurationMainRequest {
    dailyCategory?: string | null;
    jobCategory?: string | null;
}

export interface GetCurationWeekRequest {
    persona: PersonaType;
    category: string;
}

export interface GetCurationMainResult {
    bestClip: Prompt[];
    bestWeekDaily: Prompt[];
    bestWeekJob: Prompt[];
    keywords: Keyword[];
}

export interface GetCurationWeekResult {
    prompts: Prompt[];
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

export const getCurationWeek = (filter: GetCurationWeekRequest) => {
    return callApi<GetCurationWeekRequest, GetCurationWeekResult>({
        api: apis.GET_CURATION_WEEK,
        queryString: filter,
    });
};

const queryKeys = {
    getCurationMainKey: (filter: GetCurationMainRequest) => ['curation', 'main', filter] as const,
    getCurationWeekKey: (filter: GetCurationWeekRequest) => ['curation', 'week', filter] as const,
};

export const useGetCurationMain = (filter: GetCurationMainRequest) => {
    return useQuery(queryKeys.getCurationMainKey(filter), () => getCurationMain(filter), {
        suspense: true,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
    });
};

export const useGetCurationWeek = (filter: GetCurationWeekRequest, options?: any) => {
    return useQuery(queryKeys.getCurationWeekKey(filter), () => getCurationWeek(filter), {
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
		suspense: true,
		...options,
	});
};

export const prefetchGetCurationMain = (client: QueryClient, filter: GetCurationMainRequest) => {
    return client.prefetchQuery(queryKeys.getCurationMainKey(filter), () => getCurationMain(filter));
};
