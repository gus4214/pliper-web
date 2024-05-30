import MyPageProfileTemplate from '@/src/components/templates/mypage/MyPageProfileTemplate';
import { NextPage } from 'next';
import { Seo } from '@/src/components/molecules/seo/Seo';
import React from 'react';

const MyPage: NextPage = () => {
	return (
		<>
			<Seo title={'마이페이지'} />
			<MyPageProfileTemplate />
		</>
	);
};

MyPage.grant = 'user';

export default MyPage;
