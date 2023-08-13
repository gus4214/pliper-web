import { SERVER_API } from '@/src/fetchers/apis';
import { googleAuthCallbackApi, OAuthCallbackResult } from '@/src/fetchers/auth';
import { IResponse } from '@/src/fetchers/types';
import { signupModalAtom } from '@/src/stores/modal';
import { saveAccessToken } from '@/src/utils/cooke';
import axios, { AxiosError } from 'axios';
import { useSetAtom } from 'jotai';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const code = req.query.code;

	try {
		const response = await axios.request<OAuthCallbackResult>({
			method: 'GET', // Or whichever HTTP method your API requires
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
		if (axiosError && axiosError.response) {
			console.log(axiosError.response.data);
			res.setHeader('Set-Cookie', `ephemeralToken=${axiosError.response.data.message}; Path=/; Max-Age=3600`);
			res.redirect('/signup');
		} else {
			console.error('Error in googleAuthCallback:', error);
			res.status(500).send('An error occurred during authentication.');
		}
	}
};
