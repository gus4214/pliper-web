import FallbackSpinner from '@/src/components/atoms/fallback/FallbackSpinner';
import { accessTokenKey } from '@/src/configs/auth';
import { useGetUserSummary } from '@/src/fetchers/auth';
import { myPageUserSummaryAtom } from '@/src/stores/mypage';
import { getCookie } from '@/src/utils/cookie';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';

interface MyPageUserSummaryLoaderProps {
	children: ReactNode;
}

const MyPageUserSummaryLoader: React.FC<MyPageUserSummaryLoaderProps> = ({ children }) => {
	const [myPageUserSummary, setMyPageUserSummary] = useAtom(myPageUserSummaryAtom);

	const router = useRouter();
	const storedAccessToken = getCookie(accessTokenKey);
	const { data, isLoading, refetch } = useGetUserSummary(storedAccessToken, { enabled: myPageUserSummary === undefined });

	const isEmptyData = JSON.stringify(data) === '{}';

	useEffect(() => {
		if (myPageUserSummary || isLoading || isEmptyData) return;

		setMyPageUserSummary({
			clipCount: data?.clipCount || 0,
			createdPrompts: data?.createdPrompts || [],
			createdPromptsCount: data?.createdPromptsCount || 0,
			likeCount: data?.likeCount || 0,
			precisionUpCount: data?.precisionUpCount || 0,
			promptClips: data?.promptClips || [],
			userEmail: data?.userEmail || '',
		});
	}, [myPageUserSummary, isLoading]);

	if (isEmptyData) {
		router.push('/');
		return <FallbackSpinner />;
	}

	if (!myPageUserSummary) {
		return <FallbackSpinner />;
	}

	return <>{children}</>;
};

export default MyPageUserSummaryLoader;
