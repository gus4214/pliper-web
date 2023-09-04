import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { QueryClient, useQuery } from 'react-query';

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

export const getCurationMain = () => {
	return callApi<never, GetCurationMainResult>({
		api: apis.GET_CURATION_MAIN,
	});
};

const queryKeys = {
	getCurationMainKey: () => ['curation', 'main'] as const,
};

export const useGetCurationMain = () => {
	return useQuery(queryKeys.getCurationMainKey(), () => getCurationMain(), {
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};

export const prefetchGetCurationMain = (client: QueryClient) => {
	return client.prefetchQuery(queryKeys.getCurationMainKey(), () => getCurationMain());
};
