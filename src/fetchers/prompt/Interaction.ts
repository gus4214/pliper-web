import { IBaasResponse } from '@/src/fetchers/types';
import { GetPromptsRequest, GetPromptsResult } from '@/src/fetchers/prompt/types';
import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { getCookie } from '@/src/utils/cookie';
import { accessTokenKey } from '@/src/configs/auth';

export type ClipAndPromptResult = never & IBaasResponse;

// 클립
export const clipPromptApi = (promptId: number | string) => {
	return callApi<GetPromptsRequest, ClipAndPromptResult>({
		api: apis.CLIP_PROMPT,
		slug: { id: promptId },
		token: getCookie(accessTokenKey),
	});
};

// 클립 취소
export const cancelClipPromptApi = (promptId: number | string) => {
	return callApi<GetPromptsRequest, ClipAndPromptResult>({
		api: apis.CANCEL_CLIP_PROMPT,
		slug: { id: promptId },
		token: getCookie(accessTokenKey),
	});
};

// 좋아요
export const likePromptApi = (promptId: number | string) => {
	return callApi<GetPromptsRequest, ClipAndPromptResult>({
		api: apis.LIKE_PROMPT,
		slug: { id: promptId },
		token: getCookie(accessTokenKey),
	});
};

// 좋아요 취소
export const cancelLikePromptApi = (promptId: number | string) => {
	return callApi<GetPromptsRequest, ClipAndPromptResult>({
		api: apis.CANCEL_LIKE_PROMPT,
		slug: { id: promptId },
		token: getCookie(accessTokenKey),
	});
};

// 정확도
export const reliabilityPromptApi = (promptId: number | string, reliability: 'UP' | 'DOWN') => {
	return callApi<{ reliability: 'UP' | 'DOWN' }, ClipAndPromptResult>({
		api: apis.RELIABILITY_PROMPT,
		slug: { id: promptId },
		body: {
			reliability,
		},
		token: getCookie(accessTokenKey),
	});
};

// 정확도 취소
export const cancelReliabilityPromptApi = (promptId: number | string) => {
	return callApi<GetPromptsRequest, ClipAndPromptResult>({
		api: apis.CANCEL_RELIABILITY_PROMPT,
		slug: { id: promptId },
		token: getCookie(accessTokenKey),
	});
};
