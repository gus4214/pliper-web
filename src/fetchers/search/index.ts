import { IBaasResponse } from '@/src/fetchers/types';
import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { accessTokenKey } from '@/src/configs/auth';
import { getCookie } from '@/src/utils/cookie';
import { useQuery } from 'react-query';

export interface GetSearchedByUserItem {
	createDateTime: string;
	historyId: number;
	keyword: string;
}

export interface GetTopSearchedItem {
	keyword: string;
	score: number;
}

export type GetSearchedByUserResult = GetSearchedByUserItem[] & IBaasResponse;

export type GetTopSearchedResult = GetTopSearchedItem & IBaasResponse;

export type GetDeleteSearchedByUser = never & IBaasResponse;

export const getSearchedByUserApi = () => {
	return callApi<never, GetSearchedByUserResult>({
		api: apis.GET_SEARCHED_BY_USER,
		token: getCookie(accessTokenKey),
	});
};

export const deleteSearchedByUserApi = ({ historyId }: { historyId: number }) => {
	return callApi<number, GetDeleteSearchedByUser>({
		api: apis.DELETE_SEARCHED_BY_USER,
		slug: { historyId },
		token: getCookie(accessTokenKey),
	});
};

export const deleteAllSearchedByUserApi = () => {
	return callApi<never, GetDeleteSearchedByUser>({
		api: apis.DELETE_ALL_SEARCHED_BY_USER,
		token: getCookie(accessTokenKey),
	});
};

export const getTopSearchedApi = () => {
	return callApi<never, GetTopSearchedResult>({
		api: apis.GET_TOP_SEARCHED,
		token: getCookie(accessTokenKey),
	});
};

export const useGetSearchedByUser = () => {
	return useQuery(['searched', 'user'], () => getSearchedByUserApi(), {
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};

export const useGetTopSearched = () => {
	return useQuery(['searched', 'top'], () => getTopSearchedApi(), {
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};
