import { PromptSortType } from '@/src/configs/prompt';
import { atom } from 'jotai';

export const searchInputAtom = atom<string>('');
export const promptSortAtom = atom<PromptSortType>('ACCURACY');

export const searchFilterAtom = atom((get) => ({
	title: get(searchInputAtom),
	promptSort: get(promptSortAtom),
}));
