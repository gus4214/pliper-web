import { PersonaType } from '@/src/fetchers/prompt/types';
import { atom } from 'jotai';

export const personaTypesAtom = atom<PersonaType | undefined>(undefined);
export const category1TextsAtom = atom<string[]>([]);
export const category2TextsAtom = atom<string[]>([]);
export const llmModelsAtom = atom<string[]>([]);

export const promptMenuAtom = atom((get) => ({
	personaTypes: get(personaTypesAtom),
	category1Texts: get(category1TextsAtom),
	category2Texts: get(category2TextsAtom),
	llmModel: get(llmModelsAtom),
}));
