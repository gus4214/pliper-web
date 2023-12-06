import MyPagePlipTemplate from '@/src/components/templates/mypage/MyPagePlipTemplate';
import {Seo} from "@/src/components/modules/@common/seo/Seo";
import React from "react";

const MyPlipPage = () => {
	return (
		<>
			<Seo title={'마이플립 - 내가 북마크한 프롬프트'} />
			<MyPagePlipTemplate />
		</>
	);
};

MyPlipPage.grant = 'user';

export default MyPlipPage;
