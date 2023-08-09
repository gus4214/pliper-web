import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const callback = () => {
	const router = useRouter();

	useEffect(() => {
		let code = new URL(window.location.href).searchParams.get('code');
		console.log('🚀 ~ file: callback.tsx:9 ~ useEffect ~ code:', code);

		router.push('/');
	});

	return <div>구글 로그인 후 redirect</div>;
};

export default callback;
