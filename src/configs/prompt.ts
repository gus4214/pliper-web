import {PersonaType} from "@/src/fetchers/prompt/types";

export type PromptSortType = 'LATEST' | 'ACCURACY' | 'LIKE';

export const promptSortCategory = {
	ACCURACY: '🎯 정확도순',
	LIKE: '❤️ 좋아요 순',
	LATEST: '✨ 최신 순',
};

export const promptKoTextOfPersona: Record<PersonaType, string> = {
	'JOB': '업무',
	'DAILY': '일상',
}