import MyPageEditTemplate from '@/src/components/templates/mypage/MyPageEditTemplate';
import {Seo} from "@/src/components/modules/@common/seo/Seo";
import React from "react";

const MyProfileEditPage = () => {
	return (
		<>
			<Seo title={'프로플 관리'} />
			<MyPageEditTemplate />
		</>
	);
};

MyProfileEditPage.grant = 'user';

export default MyProfileEditPage;
