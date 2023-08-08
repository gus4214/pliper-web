import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { IBaasResponse } from '@/src/fetchers/types';

interface OAuthResult {
	url: string;
}

export const googleAuthApi = () => {
	return callApi<never, IBaasResponse<OAuthResult>>({
		api: apis.GOOGLE_AUTH_API,
	});
};

export const naverAuthApi = () => {
	return callApi<never, IBaasResponse<OAuthResult>>({
		api: apis.NAVER_AUTH_API,
	});
};
