import { atom } from 'jotai';
import { ReactNode } from 'react';

export interface AppToastProps {
	open: boolean;
	message?: string;
	icon?: ReactNode;
	delayHideDuration?: number;
	onClose?: () => void;
	action?: Action;
}

interface Action {
	message: string;
	onAction: () => void;
}

export const initAppToast: AppToastProps = {
	open: false,
	onClose: () => {},
};

export const appToastAtom = atom<AppToastProps>(initAppToast);
