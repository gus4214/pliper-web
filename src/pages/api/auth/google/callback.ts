import { SERVER_API } from '@/src/fetchers/apis';
import { OAuthCallbackResult } from '@/src/fetchers/auth';
import { IResponse } from '@/src/fetchers/types';
import axios, { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
	const code = req.query.code;

	try {
		const response = await axios.request<OAuthCallbackResult>({
			method: 'GET',
			baseURL: `${SERVER_API}`,
			url: '/v1/auth/google/callback',
			params: {
				code: code as string,
			},
			timeout: 30 * 1000,
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				Accept: 'application/json',
			},
			withCredentials: true,
		});

		const tokenResponse = response.data;

		if (tokenResponse) {
			const currentTimeInSeconds = Math.floor(Date.now() / 1000);
			const durationInSeconds = tokenResponse.expires_in - currentTimeInSeconds;
			res.setHeader('Set-Cookie', `accessToken=${tokenResponse.token}; Path=/; Max-Age=${durationInSeconds}`);
			res.redirect('/');
		}
	} catch (error) {
		const axiosError = error as AxiosError<IResponse<OAuthCallbackResult>>;

		if (axiosError.response) {
			switch (axiosError.response.status) {
				case 401:
					// res.status(401).json({ error: 'code_already_used_or_expired' });
					// break;
					return res.redirect('/login?error=code_already_used_or_expired');
				case 402:
					console.log(axiosError.response.data);
					res.setHeader('Set-Cookie', `temporaryToken=${axiosError.response.data.message}; Path=/; Max-Age=3600`);
					res.redirect('/signup');
					break;
				default:
				// 다른 HTTP 에러 처리
			}
		}
		console.error('Error in googleAuthCallback:', error);
		res.status(500).send('An error occurred during authentication.');
	}
};
