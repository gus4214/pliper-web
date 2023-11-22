import {DependencyList, useEffect, useState} from 'react';

function useMounted() {
	const [mounted, setMounted] = useState(false);
	
	useEffect(() => {
		setMounted(true);
	}, []);

	return mounted;
}

export function useMountedEffect(effect:() => void, deps: DependencyList = []) {
	const isMounted = useMounted();
	useEffect(() => {
		if (isMounted) effect();
	}, [isMounted, ...deps]);
}

export default useMounted;
