import MyPageCreatedPromptTemplate from '@/src/components/templates/mypage/MyPageCreatedPromptTemplate';
import {Seo} from "@/src/components/modules/@common/seo/Seo";
import React from "react";

const MyCreatedPromptPage = () => {
	return (
		<>
			<Seo title={'내가 작성한 프롬프트 템플릿 목록'} />
			<MyPageCreatedPromptTemplate />
		</>
	);
};

MyCreatedPromptPage.grant = 'user';

export default MyCreatedPromptPage;
