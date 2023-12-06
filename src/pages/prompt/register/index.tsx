import RegisterTemplate from '@/src/components/templates/prompt/RegisterTemplate';
import { NextPage } from 'next';
import React from 'react';
import {Seo} from "@/src/components/modules/@common/seo/Seo";

const RegisterPage: NextPage = () => {
	return (
		<>
			<Seo title={'프롬프트 템플릿 작성'} />
			<RegisterTemplate />
		</>
	);
};

RegisterPage.grant = 'user';

export default RegisterPage;
