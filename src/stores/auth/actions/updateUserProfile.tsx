import { atom } from 'jotai';
import { userAtom } from '@/src/stores/auth';
import { LoginUser } from '@/src/fetchers/auth';

export const updateProfileAtom = atom(null, (get, set, input: Partial<LoginUser>) => {
	const myUserInfo = get(userAtom);
	if (!myUserInfo) {
		return;
	}

	const newProfile = {
		...myUserInfo,
		...input,
	};

	set(userAtom, newProfile);
});
