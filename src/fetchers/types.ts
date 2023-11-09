import { ApiInfo } from '@/src/fetchers/apis';

export interface IBaasResponse {
	isError?: boolean;
	errorMessage?: string;
	errorStatus?: number;
}

export interface IPageRequest {
	limit?: number;
	page?: number;
}

export interface IResponse<T> {
	apiId: string;
	code: number;
	message: string;
	serverTime: number;
	traceId: string;
	data?: T;
	error?: IApiError;
	errorCode?: string;
}

export interface IApiError {
	errors: Array<IApiErrorMessage>;
	message: string;
}

export interface IApiErrorMessage {
	domain: string;
	message: string;
	reason: string;
	sendReport?: unknown;
}

export interface IRequest<T = object, R = object> {
	api: ApiInfo;
	body?: T;
	slug?: Record<string, string | number>;
	queryString?: T;
	defaultData?: R;
	header?: object;
	token?: string;
	locale?: string;
}
