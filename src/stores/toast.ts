import { atom } from 'jotai/index';
import { ReactNode } from 'react';

export interface AppToastProps {
	open: boolean;
	message?: string;
	icon?: ReactNode;
	delayHideDuration?: number;
}

export const appToastAtom = atom<AppToastProps>({ open: false });
