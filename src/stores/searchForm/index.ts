import { atom } from 'jotai';

export const searchInputAtom = atom<string>('');

export const searchFilterAtom = atom((get) => ({
	title: get(searchInputAtom),
}));
