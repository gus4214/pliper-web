import { atom } from 'jotai';

export const workCategoryAtom = atom<string | undefined>(undefined);
export const dailyCategoryAtom = atom<string | null>(null);
