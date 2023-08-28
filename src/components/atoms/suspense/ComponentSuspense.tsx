import React, { Suspense, SuspenseProps } from 'react';
import useMounted from '@/src/hooks/windowMount';
import Skeleton from '@/src/components/atoms/skeleton/Skeleton';

interface ComponentSuspenseProps {
	children: React.ReactNode;
	fallback?: SuspenseProps['fallback'];
}

const ComponentSuspense: React.FC<ComponentSuspenseProps> = ({ children, fallback }) => {
	const isMounted = useMounted();

	if (isMounted) {
		return <Suspense fallback={fallback ? fallback : <Skeleton />}>{children}</Suspense>;
	}

	return <>{fallback}</>;
};

export default ComponentSuspense;
