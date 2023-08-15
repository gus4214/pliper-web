import { LoginUser } from '@/src/fetchers/auth';
import { atom } from 'jotai';

export interface AuthenticationUser extends Partial<LoginUser> {
	nickName?: string;
}

export const userAtom = atom<AuthenticationUser | undefined>(undefined);
