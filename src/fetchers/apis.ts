type HtmlMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS';

export interface ApiInfo {
	uri: string;
	method: HtmlMethod;
	description?: string;
}

export const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;

console.log('SERVER API HOST = ', SERVER_API);

export const apis: { [k: string]: ApiInfo } = {
	GOOGLE_AUTH_API: { uri: '/v1/auth/google', method: 'GET', description: 'Oauth2.0 구글 인증 API' },
	NAVER_AUTH_API: { uri: '/v1/auth/naver', method: 'GET', description: 'Oauth2.0 네이버 인증 API' },
};
