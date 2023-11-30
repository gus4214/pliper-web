import RegisterTemplate from '@/src/components/templates/prompt/RegisterTemplate';
import { NextPage } from 'next';
import React from 'react';

const RegisterPage: NextPage = () => {
	return <RegisterTemplate />;
};

RegisterPage.grant = 'user';

export default RegisterPage;
