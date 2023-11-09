import { IBaasResponse } from '@/src/fetchers/types';

export const serverErrorText = (response: IBaasResponse) => {
	if (response.errorStatus === 409) {
		return '요청하신 값이 올바르지 않습니다. 확인 부탁드려요';
	}

	return response.errorMessage;
};
