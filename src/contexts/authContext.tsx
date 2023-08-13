import { accessTokenKey } from '@/src/configs/auth';
import { profileApi } from '@/src/fetchers/auth';
import { userAtom } from '@/src/stores/auth';
import { saveUserAtom } from '@/src/stores/auth/login';
import { initializedAtom } from '@/src/stores/initialization';
import { clearCookie, getCookie } from '@/src/utils/cooke';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { createContext, ReactNode, useEffect, useState } from 'react';

export interface AuthProviderType {}

const defaultProvider: AuthProviderType = {};

type AuthProviderProps = {
	children: ReactNode;
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [initialized, setInitialized] = useAtom(initializedAtom);
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useAtom(userAtom);

	const saveUser = useSetAtom(saveUserAtom);

	useEffect(() => {
		const initAuth = async () => {
			console.log('authContext: 신규 진입');
			const storedAccessToken = getCookie('accessToken');
			console.log(`authContext: Token 확인 - ${storedAccessToken}`);
			if (storedAccessToken) {
				try {
					const userProfile = await profileApi(storedAccessToken);
					console.log(userProfile, '프로파일 확인 완료');
					await saveUser(userProfile);
				} catch (error) {
					console.log('Error 유저 프로파일 요청', error);
					clearCookie(accessTokenKey);
				}
			}
			setInitialized(true);
			setLoading(false);
		};
		initialized || initAuth();
	}, [initialized]);

	return <AuthContext.Provider value={{ user, initialized, loading }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
