import axios, { AxiosError, AxiosInstance, AxiosResponse, Method, RawAxiosRequestHeaders } from 'axios';
import { SERVER_API } from '@/src/fetchers/apis';
import { IBaasResponse, IRequest, IResponse } from '@/src/fetchers/types';
import {createAuthInterceptor} from "@/src/fetchers/interceptors";

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
			.filter(([value]) => !!value)
			.map((e) => {
				const value = e[1];
				if (Array.isArray(e[1])) {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					value.join(',');
				} else {
					value;
				}
				return `${e[0]}=${e[1]}`;
			})
			.join('&')
	);
};

export const callApi = <T, R extends IBaasResponse>(request: IRequest<T, R>, options?: RawAxiosRequestHeaders): Promise<R> => {
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
			result.errorMessage = error.response?.data.message;
			result.errorStatus = error.response?.status || 500;
			result.isError = true;
			console.log('====== [WARN] request fail ======', result, error.response?.data);
			return result;
		});
};

createAuthInterceptor(apiClient);

