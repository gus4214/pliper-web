import { atom } from 'jotai';
import React from 'react';

export interface ModalConfirmOptions {
	loading?: (title?: string) => void;
	clearLoading?: () => void;
}

export interface ModalAtomProps {
	open: boolean;
}

export interface LoginModalAtomProps extends ModalAtomProps {
	onCancel?: () => void;
}

export const loginModalAtom = atom<LoginModalAtomProps>({ open: false });

export const signupModalAtom = atom<ModalAtomProps>({ open: false });

export * from './actions/login';
