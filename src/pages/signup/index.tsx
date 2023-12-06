import SignupTemplate from '@/src/components/templates/SignupTemplate';
import BlankLayout from '@/src/layouts/BlankLayout';
import { NextPage } from 'next';
import React, { ReactNode } from 'react';
import {Seo} from "@/src/components/modules/@common/seo/Seo";

const SignupPage: NextPage = () => {
	return (
		<>
			<Seo title={'회원가입'} />
			<SignupTemplate />
		</>
	);
};

SignupPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default SignupPage;
