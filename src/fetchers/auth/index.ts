import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { IBaasResponse } from '@/src/fetchers/types';

interface OAuthResult {
	url: string;
}

export const googleAuthApi = (callbackUrl: string) => {
	return callApi<{ callbackUrl: string }, OAuthResult>({
		api: apis.GOOGLE_AUTH_API,
		queryString: { callbackUrl },
	});
};

export const naverAuthApi = () => {
	return callApi<never, OAuthResult>({
		api: apis.NAVER_AUTH_API,
	});
};
