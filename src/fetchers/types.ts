import { ApiInfo } from '@/src/fetchers/apis';

export interface IBaasError {
	isError?: boolean;
	errorCode?: string;
	errorMessage?: string;
	errorStatus?: number;
}

export interface IBaasResponse<T> extends IBaasError {
	data: T;
}
export interface IPageRequest {
	limit?: number;
	page?: number;
}
export interface IPageResponse<T> {
	content: T[];
	pageable: IPageable;
	empty: boolean;
	first: boolean;
	last: boolean;
	number: number;
	numberOfElements: number;
	size: number;
	sort?: ISort;
	totalElements: number;
	totalPages: number;
}
export interface ISort {
	empty: boolean;
	sorted: boolean;
	unsorted: boolean;
}
export interface IPageable {
	offset?: number;
	pageNumber?: number;
	pageSize?: number;
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
	sendReport?: any;
}
export interface IRequest<T, R> {
	api: ApiInfo;
	body?: T;
	slug?: Record<string, string | number>;
	queryString?: T;
	defaultData?: R;
	header?: object;
	token?: string;
	locale?: string;
}
