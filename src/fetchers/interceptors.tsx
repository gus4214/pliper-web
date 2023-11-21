import axios, { AxiosInstance } from 'axios';
import { getCookie, saveAccessToken, saveRefreshToken } from '@/src/utils/cookie';
import { refreshTokenKey } from '@/src/configs/auth';
import AsyncLock from 'async-lock';
import { OAuthCallbackResult } from '@/src/fetchers/auth';

const lock = new AsyncLock();

export const refreshAccessToken = async (refreshToken: string): Promise<OAuthCallbackResult | null> => {
	try {
		const response = await axios.post<OAuthCallbackResult>('/api/auth/refreshToken', { refreshToken });
		if (response.status === 200 && response.data.token) {
			return response.data;
		}
		return null;
	} catch (error) {
		console.log('새로운 액세스 토큰을 받아오는데 실패했습니다.', error);
		return null;
	}
};

export const createAuthInterceptor = (client: AxiosInstance) => {
	if (typeof window !== 'undefined') {
		client.interceptors.response.use(
			(response) => {
				return response;
			},
			async (error) => {
				const originalRequest = error.config;

				if (error.response.status === 401 && !originalRequest._retry) {
					originalRequest._retry = true;

					await lock.acquire('refreshToken', async () => {
						const refreshToken = getCookie(refreshTokenKey);
						if (refreshToken) {
							const newAccessToken = await refreshAccessToken(refreshToken);
							if (newAccessToken) {
								saveAccessToken(newAccessToken.token, newAccessToken.expiresIn);
								saveRefreshToken(newAccessToken.refreshToken, newAccessToken.refreshTokenExpiresIn);

								client.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken.token}`;
								originalRequest.headers['Authorization'] = `Bearer ${newAccessToken.token}`;
							}
						}
					});

					return client(originalRequest);
				}

				return Promise.reject(error);
			}
		);
	}
};