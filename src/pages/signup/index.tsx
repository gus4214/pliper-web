import SignupTemplate from '@/src/components/templates/SignupTemplate';
import BlankLayout from '@/src/layouts/BlankLayout';
import { NextPage } from 'next';
import { ReactNode } from 'react';

const SignupPage: NextPage = () => {
	return <SignupTemplate />;
};

SignupPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default SignupPage;
