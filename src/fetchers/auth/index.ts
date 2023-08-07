import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { IBaasResponse } from '@/src/fetchers/types';

interface GoogleAuthResult {
	url: string;
}
export const googleAuthApi = () => {
	return callApi<never, IBaasResponse<GoogleAuthResult>>({
		api: apis.GOOGLE_AUTH_API,
	});
};
