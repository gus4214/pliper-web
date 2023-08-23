type HtmlMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS';

export interface ApiInfo {
	uri: string;
	method: HtmlMethod;
	description?: string;
}

export const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;

console.log('SERVER API HOST = ', SERVER_API);

export const apis: { [k: string]: ApiInfo } = {
	// 인증
	GOOGLE_AUTH_API: { uri: '/v1/auth/google', method: 'GET', description: 'Oauth2.0 구글 인증 API' },
	GOOGLE_AUTH_CALLBACK_API: { uri: '/v1/auth/google/callback', method: 'GET', description: 'Oauth2.0 구글 인증 완료 처리 API' },
	NAVER_AUTH_API: { uri: '/v1/auth/naver', method: 'GET', description: 'Oauth2.0 네이버 인증 API' },
	NAVER_AUTH_CALLBACK_API: { uri: '/v1/auth/naver/callback', method: 'GET', description: 'Oauth2.0 네이버 인증 완료 처리 API' },
	REGISTER_API: { uri: '/v1/join', method: 'POST', description: '회원가입 요청 API' },

	// 유저정보
	PROFILE_API: { uri: '/v1/user/profile', method: 'GET', description: 'JWT 기반 유저 정보 조회 요청 API' },

	// 프롬프트
	GET_CATEGORY_API: { uri: '/v1/category', method: 'GET', description: '프롬프트 카테고리 호출 API' },
	GET_PROMPT: { uri: 'v1/prompt', method: 'GET', description: '프롬프트 템플릿 목록 요청 API' },
	GET_PROMPT_DETAIL: { uri: 'v1/prompt/{promptId}', method: 'GET', description: '프롬프트 템플릿 상세 요청 API' },
};
