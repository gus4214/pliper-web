import { atom } from 'jotai/index';
import { ReactNode } from 'react';

export interface AppToastProps {
	open: boolean;
	message?: string;
	icon?: ReactNode;
	delayHideDuration?: number;
	onClose?: () => void;
}

export const initAppToast: AppToastProps = {
	open: false,
	onClose: () => {},
};

export const appToastAtom = atom<AppToastProps>(initAppToast);
