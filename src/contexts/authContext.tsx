import { createContext, ReactNode } from 'react';

export interface AuthProviderType {}

const defaultProvider: AuthProviderType = {};

type AuthProviderProps = {
	children: ReactNode;
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }: AuthProviderProps) => {
	return <AuthContext.Provider value={''}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
