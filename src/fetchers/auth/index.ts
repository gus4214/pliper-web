import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { IBaasResponse } from '@/src/fetchers/types';

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

interface RegisterUserRequest {
	nickname: string;
	taste: string[];
}

export const googleAuthApi = (callbackUrl: string) => {
	return callApi<{ callbackUrl: string }, OAuthResult>({
		api: apis.GOOGLE_AUTH_API,
		queryString: { callbackUrl },
	});
};

// export const googleAuthCallbackApi = (code: string) => {
// 	return callApi<{ code: string }, OAuthCallbackResult>({
// 		api: apis.GOOGLE_AUTH_CALLBACK_API,
// 		queryString: { code },
// 	});
// };

export const naverAuthApi = (callbackUrl: string) => {
	return callApi<{ callbackUrl: string }, OAuthResult>({
		api: apis.NAVER_AUTH_API,
		queryString: { callbackUrl },
	});
};

// export const naverAuthCallbackApi = (code: string) => {
// 	return callApi<{ code: string }, OAuthResult>({
// 		api: apis.NAVER_AUTH_CALLBACK_API,
// 		queryString: { code },
// 	});
// };

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
