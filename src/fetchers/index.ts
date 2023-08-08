import axios, { AxiosError, AxiosInstance, AxiosResponse, Method, RawAxiosRequestHeaders } from 'axios';
import { SERVER_API } from '@/src/fetchers/apis';
import { IBaasResponse, IRequest, IResponse } from '@/src/fetchers/types';

export const apiClient: AxiosInstance = axios.create({
	baseURL: `${SERVER_API}`,
	timeout: 30 * 1000,
	headers: {
		'Content-Type': `application/json;charset=UTF-8`,
		Accept: 'application/json',
	},
});

const parseUriBySlug = (baseUri: string, slugs: Record<string, string | number>): string => {
	let replacedUri = baseUri;
	if (slugs) {
		for (const s in slugs) {
			replacedUri = replacedUri.replace(`{${s}}`, String(slugs[s]));
		}
	}
	return replacedUri;
};

export const toQueryString = <T extends Record<string, unknown>>(payload: T): string => {
	return (
		'?' +
		Object.entries(payload)
			.filter(([key, value]) => !!value)
			.map((e) => e.join('='))
			.join('&')
	);
};

export const callApi = <T, R extends IBaasResponse<unknown>>(request: IRequest<T, R>, options?: RawAxiosRequestHeaders): Promise<R> => {
	console.log('====== [INFO] request =====', request);

	return apiClient
		.request<T, AxiosResponse<R>>({
			method: request.api.method as Method,
			url: `${request.slug ? parseUriBySlug(request.api.uri, request.slug) : request.api.uri}${toQueryString({
				...request.queryString,
				locale: request.locale ?? '',
			})}`,
			data: request.body,
			withCredentials: true,
			headers: {
				Authorization: `Bearer ${request?.token}`,
				...options,
			},
		})
		.then((res) => {
			console.log('====== [INFO] response success ======', res.data);
			return {
				...res.data,
			};
		})
		.catch((e) => {
			const result = !request.defaultData ? ({} as R) : request.defaultData;
			const error = e as AxiosError<IResponse<R>>;
			if (error.response?.data?.error) {
				result.errorCode = error.response?.data.errorCode;
				result.errorMessage = error.response?.data.error.errors
					? error.response?.data.error.errors[0].message
					: error.response?.data.error.message;
			}
			result.errorStatus = error.response?.status || 500;
			result.isError = true;
			console.log('====== [WARN] request fail ======', result, error.response?.data);
			return result;
		});
};
