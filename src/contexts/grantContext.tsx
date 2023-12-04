import { createContext, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/src/hooks/context';
import { PageGrantType } from '@/src/types/global';
import { useLoginModal } from '@/src/hooks/modal';

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
	const [open, close] = useLoginModal();

	const handleReturnToHome = async () => {
		await router.replace({
			pathname: '/',
			query: { returnUrl: router.asPath },
		});
		open();
	};

	useEffect(() => {
		if (!router.isReady) {
			return;
		}
		if (pageGrantType === 'user' && !user) {
			handleReturnToHome();
		}
	}, [router.route]);

	return <GrantContext.Provider value=''>{children}</GrantContext.Provider>;
};

export { GrantProvider, GrantContext };
