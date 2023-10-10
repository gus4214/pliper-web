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
	GET_AI_TOOLS_API: { uri: '/v1/ai-tools', method: 'GET', description: 'AI 관련된 도구 리스트(LLM, 이미지생성) 조회' },
	GET_CATEGORY_API: { uri: '/v1/category', method: 'GET', description: '프롬프트 카테고리 호출 API' },
	GET_PROMPT: { uri: 'v1/prompt', method: 'GET', description: '프롬프트 템플릿 목록 요청 API' },
	GET_PROMPT_DETAIL: { uri: 'v1/prompt/{promptId}', method: 'GET', description: '프롬프트 템플릿 상세 요청 API' },

	// 프롬프트 템플릿 검색
	GET_SEARCHED_BY_USER: { uri: '/v1/search', method: 'GET', description: '유저 검색 히스토리 요청 API' },
	DELETE_SEARCHED_BY_USER: { uri: '/v1/search/{historyId}', method: 'DELETE', description: '유저 검색 히스토리 삭제 요청 API' },
	DELETE_ALL_SEARCHED_BY_USER: { uri: '/v1/search', method: 'DELETE', description: '유저 검색 히스토리 전체 삭제 요청 API' },
	GET_TOP_SEARCHED: { uri: '/v1/search/top', method: 'GET', description: '검색어 랭킹 탑 10 요청 API' },

	// 메인
	GET_CURATION_MAIN: {
		uri: '/v1/aggregate/main',
		method: 'GET',
		description: '메인에서 노출 될 큐레이션(키워드, 주간 베스트, 클립 베스트) 요청 API',
	},

	GET_NOTIFICATIONS_API: { uri: '/v1/notification', method: 'GET', description: '알림 내역 요청 API' },

	// 마이 프롬프트
	REGISTER_PROMPT_TEMPLATE: { uri: '/v1/my-prompt', method: 'POST', description: '프롬프트 템플릿 등록 API' },
};
