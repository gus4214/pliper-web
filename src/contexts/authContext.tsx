import { accessTokenKey } from '@/src/configs/auth';
import { LoginUser, profileApi } from '@/src/fetchers/auth';
import { AuthenticationUser, userAtom } from '@/src/stores/auth';
import { saveUserAtom } from '@/src/stores/auth/actions/login';
import { initializedAtom } from '@/src/stores/initialization';
import { clearCookie, getCookie } from '@/src/utils/cookie';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useEffect, useState } from 'react';

export interface AuthProviderType {
	loading: boolean;
	initialized: boolean;
	user?: AuthenticationUser;
	logout?: () => void;
}

const defaultProvider: AuthProviderType = {
	loading: false,
	initialized: false,
	logout: () => {},
};

type AuthProviderProps = {
	children: ReactNode;
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [initialized, setInitialized] = useAtom(initializedAtom);
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useAtom(userAtom);

	const saveUser = useSetAtom(saveUserAtom);
	const router = useRouter();

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

	const logout = () => {
		clearCookie(accessTokenKey);
		setUser(undefined);
		router.replace('/');
	};

	return <AuthContext.Provider value={{ user, initialized, loading, logout }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
