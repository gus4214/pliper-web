import { closeLoginModalAtom, openLoginModalAtom } from '@/src/stores/modal';
import { ConfirmModalOpenOptions, closeConfirmModalAtom, openConfirmModalAtom } from '@/src/stores/modal/actions/confirm';
import { useSetAtom } from 'jotai';

export const useLoginModal = (): [() => void, () => void] => {
	const openModal = useSetAtom(openLoginModalAtom);
	const closeModal = useSetAtom(closeLoginModalAtom);

	return [openModal, closeModal];
};

export const useConfirmModal = (): [(options: ConfirmModalOpenOptions) => void, () => void] => {
	const openModal = useSetAtom(openConfirmModalAtom);
	const closeModal = useSetAtom(closeConfirmModalAtom);

	return [openModal, closeModal];
};

export const useFailModal = () => {
	const openModal = useSetAtom(openConfirmModalAtom);
	const closeModal = useSetAtom(closeConfirmModalAtom);
	return ({ title, description, onConfirm }: { title: string; description?: string | React.ReactNode; onConfirm?: () => void }) => {
		openModal({
			title,
			description,
			onConfirm: () => {
				onConfirm && onConfirm();
				closeModal();
			},
			hideCancel: true,
		});
	};
};
