import { createContext, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/src/hooks/context';
import { PageGrantType } from '@/src/types/global';

export interface GrantProviderType {}

const defaultProvider: GrantProviderType = {};

const GrantContext = createContext(defaultProvider);

type GrantProviderProps = {
	children: ReactNode;
	pageGrantType?: PageGrantType;
};

const GrantProvider = ({ children, pageGrantType }: GrantProviderProps) => {
	const { user } = useAuthContext();
	const router = useRouter();

	useEffect(() => {
		if (!router.isReady) {
			return;
		}
		if (pageGrantType === 'user' && !user) {
			router.replace({
				pathname: '/',
				query: { returnUrl: router.asPath },
			});
		}
	}, [router.route]);

	return <GrantContext.Provider value=''>{children}</GrantContext.Provider>;
};

export { GrantProvider, GrantContext };
