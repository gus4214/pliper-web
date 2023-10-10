import { NextComponentType, NextPageContext } from 'next/dist/shared/lib/utils';

declare module 'next' {
	export declare type NextPage<P = object, IP = P> = NextComponentType<NextPageContext, IP, P> & {
		getLayout?: (page: ReactElement) => ReactNode;
	};
}

declare module '*.svg' {
	import type { ReactElement, SVGProps } from 'react';

	const content: (props: SVGProps<SVGElement>) => ReactElement;
	export default content;
}
