import { IPageResponse } from './../types';
import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { accessTokenKey } from '@/src/configs/auth';
import { getCookie } from '@/src/utils/cookie';
import { useQuery } from 'react-query';
import { GetPromptsRequest, GetPromptsResult } from '@/src/fetchers/prompt/types';

export const getPromptsApi = (input: GetPromptsRequest) => {
	return callApi<GetPromptsRequest, GetPromptsResult>({
		api: apis.GET_PROMPT,
		queryString: input,
		token: getCookie(accessTokenKey),
	});
};
