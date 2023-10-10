import { atom } from 'jotai';
import React from 'react';

export interface ModalConfirmOptions {
	// 로딩 상태 부여 가능
	loading?: (title?: string) => void;
	clearLoading?: () => void;
}

export interface ModalAtomProps {
	open: boolean;
	onConfirm?: (options: ModalConfirmOptions) => void;
}

export interface LoginModalAtomProps extends ModalAtomProps {
	onCancel?: () => void;
}

export interface ConfirmModalAtomProps extends ModalAtomProps {
	title?: React.ReactNode | null;
	description?: React.ReactNode;
	onCancel?: () => void;
	hideConfirm?: boolean;
	hideCancel?: boolean;
	loading?: boolean;
}

export const loginModalAtom = atom<LoginModalAtomProps>({ open: false });

export const confirmModalAtom = atom<ConfirmModalAtomProps>({ open: false });

export * from './actions/login';
// export * from './actions/confirm';
