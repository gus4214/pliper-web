import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { QueryClient, useQuery } from 'react-query';

export interface GetCurationMainRequest {
	dailyCategory?: string | null;
	jobCategory?: string | null;
}

export interface GetCurationMainResult {
	bestClip: BestClip[];
	bestWeekDaily: BestClip[];
	bestWeekJob: BestClip[];
	keywords: Keyword[];
}

export interface Keyword {
	createdAt: string;
	keyword: string;
}

export interface BestClip {
	category1Code: string;
	category1Text: string;
	category2Code: string;
	category2Text: string;
	createDateTime: string;
	description: string;
	likeCount: number;
	llmModel: string;
	parameters: Parameter[];
	percents: number;
	personaType: string;
	precisionDown: number;
	precisionUp: number;
	promptId: number;
	show: boolean;
	template: string;
	title: string;
	updateDateTime: string;
	userEmail: string;
	viewCount: number;
}

export interface Parameter {
	description: string;
	title: string;
	type: string;
	typeValues: string;
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
