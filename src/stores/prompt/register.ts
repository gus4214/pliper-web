import { atom } from 'jotai';

export const parametersAtom = atom<Array<{ description: string; title: string; type: string; typeValues?: string[] }>>([]);

export const templateValueAtom = atom<string>('');
