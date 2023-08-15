import { accessTokenKey } from '@/src/configs/auth';
import { useSetAtom } from 'jotai';
import { Cookies } from 'react-cookie';

export interface SetCookieOptions {
	path?: string;
	expires?: Date;
	maxAge?: number;
	domain?: string;
	secure?: boolean;
	httpOnly?: boolean;
	sameSite?: boolean | 'none' | 'lax' | 'strict';
}

const cookies = new Cookies();

export const setCookie = (name: string, value: string, option?: SetCookieOptions) => {
	return cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
	return cookies.get(name);
};

export const clearCookie = (name: string) => {
	return cookies.remove(name);
};
export const saveAccessToken = (accessToken: string, expiresIn: number) => {
	const expires = new Date();
	expires.setTime(expiresIn);
	setCookie(accessTokenKey, accessToken, {
		path: '/',
		secure: true,
		sameSite: 'none',
		expires,
	});
};