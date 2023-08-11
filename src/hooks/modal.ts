import { closeLoginModalAtom, openLoginModalAtom } from '@/src/stores/modal';
import { useSetAtom } from 'jotai';

export const useLoginModal = (): [() => void, () => void] => {
	const openModal = useSetAtom(openLoginModalAtom);
	const closeModal = useSetAtom(closeLoginModalAtom);

	return [openModal, closeModal];
};
