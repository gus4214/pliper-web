import { ModalConfirmOptions, confirmModalAtom } from '@/src/stores/modal';
import { atom } from 'jotai';

export interface ConfirmModalOpenOptions {
	title?: React.ReactNode | null;
	description?: React.ReactNode;
	onConfirm?: (options: ModalConfirmOptions) => void;
	onCancel?: () => void;
	hideConfirm?: boolean;
	hideCancel?: boolean;
	loading?: boolean;
}

export const openConfirmModalAtom = atom(null, (get, set, options: ConfirmModalOpenOptions) => {
	set(confirmModalAtom, {
		open: true,
		...options,
	});
});

export const closeConfirmModalAtom = atom(null, (get, set) => {
	set(confirmModalAtom, {
		open: false,
		loading: false,
	});
	const onCancel = get(confirmModalAtom)?.onCancel;
	onCancel && onCancel();
});
