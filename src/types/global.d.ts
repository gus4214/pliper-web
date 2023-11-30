import { NextComponentType, NextPageContext } from 'next/dist/shared/lib/utils';

export type PageGrantType = 'guest' | 'user';

declare module 'next' {
	export declare type NextPage<P = object, IP = P> = NextComponentType<NextPageContext, IP, P> & {
		layout?: 'blank' | 'default';
		getLayout?: (page: ReactElement) => ReactNode;
		grant?: PageGrantType;
	};
}

declare module '*.svg' {
	import type { ReactElement, SVGProps } from 'react';

	const content: (props: SVGProps<SVGElement>) => ReactElement;
	export default content;
}
