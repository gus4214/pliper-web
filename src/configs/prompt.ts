import { PersonaType, PromptCategories } from '@/src/fetchers/prompt/types';

export type PromptSortType = 'LATEST' | 'ACCURACY' | 'LIKE';

export type KeyofPromptPersona = keyof PromptCategories;

export const promptSortCategory = {
	ACCURACY: '🎯 정확도순',
	LIKE: '❤️ 좋아요 순',
	LATEST: '✨ 최신 순',
};

export const promptKoTextOfPersona: Record<PersonaType, string> = {
	JOB: '업무',
	DAILY: '일상',
};

export const promptKoTextKeyOfPersona: Record<KeyofPromptPersona, string> = {
	jobCategories: '업무',
	dailyCategories: '일상',
};

export const keyOfPersonaCategory: Record<PersonaType, KeyofPromptPersona> = {
	JOB: 'jobCategories',
	DAILY: 'dailyCategories',
};
