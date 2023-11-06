import { accessTokenKey } from '@/src/configs/auth';
import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { UserSummary } from '@/src/fetchers/auth/types';
import { getCookie } from '@/src/utils/cookie';
import { useQuery } from 'react-query';

export interface OAuthResult {
	url: string;
}

export interface OAuthCallbackResult {
	expires_in: number;
	token: string;
}

export interface LoginUser {
	nickname: string;
	oauthEmail: string;
	oauthSub: string;
	oauthType: string;
	taste: string;
	userID: number;
}

export interface RegisterUserRequest {
	nickname: string;
	taste: string[];
}

export interface UpdateUserProfileResult {
	nickname: string;
	notificationCount: number;
	oauthEmail: string;
	oauthSub: string;
	oauthType: string;
	taste: string;
	userID: number;
}

export const googleAuthApi = (callbackUrl: string) => {
	return callApi<{ callbackUrl: string }, OAuthResult>({
		api: apis.GOOGLE_AUTH_API,
		queryString: { callbackUrl },
	});
};

export const naverAuthApi = (callbackUrl: string) => {
	return callApi<{ callbackUrl: string }, OAuthResult>({
		api: apis.NAVER_AUTH_API,
		queryString: { callbackUrl },
	});
};

export const profileApi = (token: string) => {
	return callApi<never, LoginUser>({
		api: apis.PROFILE_API,
		token: token,
	});
};

export const registerUserApi = (data: RegisterUserRequest, token: string) => {
	return callApi<RegisterUserRequest, OAuthCallbackResult>({
		api: apis.REGISTER_API,
		body: data,
		token: token,
	});
};

export const updateUserProfileApi = (data: RegisterUserRequest) => {
	return callApi<RegisterUserRequest, UpdateUserProfileResult>({
		api: apis.UPDATE_PROFILE_API,
		body: data,
		token: getCookie(accessTokenKey),
	});
};

export const getUserSummaryApi = (token?: string) => {
	return callApi<never, UserSummary>({
		api: apis.GET_USER_SUMMARY,
		token: token || getCookie(accessTokenKey),
	});
};

const queryKeys = {
	getUserSummary: () => ['user', 'summary'] as const,
};

export const useGetUserSummary = (token?: string, options?: object) => {
	return useQuery(queryKeys.getUserSummary(), () => getUserSummaryApi(token), {
		suspense: false,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
		...options,
	});
};
