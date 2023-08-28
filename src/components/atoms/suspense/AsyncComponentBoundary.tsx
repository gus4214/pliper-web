import React, { SuspenseProps } from 'react';
import { ErrorBoundary, ErrorBoundaryPropsWithRender } from 'react-error-boundary';
import ComponentSuspense from '@/src/components/atoms/suspense/ComponentSuspense';
import { ErrorFallback } from '@/src/components/atoms/suspense/fallback/ErrorFallback';
import Skeleton from '@/src/components/atoms/skeleton/Skeleton';

type ExceptFallbackErrorBoundaryAttributes = Omit<ErrorBoundaryPropsWithRender, 'fallbackRender' | 'fallback' | 'FallbackComponent'>;

type AsyncComponentSuspenseProps = {
	children: React.ReactNode;
	errorFallback?: ErrorBoundaryPropsWithRender['fallbackRender'];
	pendingFallback?: SuspenseProps['fallback'];
} & ExceptFallbackErrorBoundaryAttributes;

const AsyncComponentBoundary: React.FC<AsyncComponentSuspenseProps> = ({
	children,
	errorFallback = ErrorFallback,
	pendingFallback = <Skeleton />,
	...restErrorBoundaryAttributes
}) => {
	return (
		<ErrorBoundary fallbackRender={errorFallback} {...restErrorBoundaryAttributes}>
			<ComponentSuspense fallback={pendingFallback}>{children}</ComponentSuspense>
		</ErrorBoundary>
	);
};

export default AsyncComponentBoundary;
