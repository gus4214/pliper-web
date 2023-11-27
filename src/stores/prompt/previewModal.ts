import { atom } from 'jotai';

export const previewModalAtom = atom<{ open: boolean }>({ open: false });

export const openPreviewModalAtom = atom(null, (get, set) => {
	set(previewModalAtom, { open: true });
});

export const closePreviewModalAtom = atom(null, (get, set) => {
	set(previewModalAtom, { open: false });
});
