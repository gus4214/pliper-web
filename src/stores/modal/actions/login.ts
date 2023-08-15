import { atom } from 'jotai';
import { loginModalAtom } from '@/src/stores/modal';

export const openLoginModalAtom = atom(null, (get, set) => {
	set(loginModalAtom, {
		open: true,
	});
});

export const closeLoginModalAtom = atom(null, (get, set) => {
	set(loginModalAtom, {
		open: false,
	});
});
