import { atom } from 'jotai';

import { saveAccessToken, setCookie } from '@/src/utils/cookie';
import { userAtom } from '@/src/stores/auth';
import { LoginUser } from '@/src/fetchers/auth';

export interface AuthenticationEvent {
	nickname: string;
	accessToken: string;
	refreshToken: string;
	accessTokenExpiresIn: number;
	refreshTokenExpiresIn: number;
}

export const saveUserAtom = atom(null, async (get, set, user: LoginUser | undefined) => {
	set(userAtom, user);
});

export const saveTokenAndUserAtom = atom(null, async (_get, set, auth: AuthenticationEvent) => {
	set(userAtom, {
		nickname: auth.nickname,
	});
	saveAccessToken(auth.accessToken, auth.accessTokenExpiresIn);
});
