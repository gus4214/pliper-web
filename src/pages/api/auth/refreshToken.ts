import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { OAuthCallbackResult } from '@/src/fetchers/auth';
import { SERVER_API } from '@/src/fetchers/apis';

const refreshTokenHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const { refreshToken } = req.body;
		try {
			const response = await axios.request<OAuthCallbackResult>({
				method: 'POST',
				baseURL: `${SERVER_API}`,
				url: '/v1/auth/refresh',
				data: {
					refreshToken,
				},
				timeout: 30 * 1000,
				headers: {
					'Content-Type': 'application/json;charset=UTF-8',
					Accept: 'application/json',
				},
				withCredentials: true,
			});


			return res.status(200).json({ ...response.data });
		} catch (error: any) {
			const message = error?.response?.data || 'Refresh 토큰이 만료되었습니다.'
			console.log("리프레쉬 토큰 실패", error);
			return res.status(200).json({ error: message });
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
};

export default refreshTokenHandler;
