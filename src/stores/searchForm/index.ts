import { PromptSortType } from '@/src/configs/prompt';
import { atom } from 'jotai';

export const searchInputAtom = atom<string>('');
export const category1CodesAtom = atom<string[]>([]);
export const category2CodesAtom = atom<string[]>([]);
export const promptSortAtom = atom<PromptSortType>('ACCURACY');
export const lmModelAtom = atom<string[]>([]);
export const personaTypesAtom = atom<string | undefined>('일상');

export const searchFilterAtom = atom((get) => ({
	title: get(searchInputAtom),
	category1Texts: get(category1CodesAtom),
	category2Texts: get(category2CodesAtom),
	promptSort: get(promptSortAtom),
	lmModel: get(lmModelAtom),
	personaTypes: get(personaTypesAtom),
}));
