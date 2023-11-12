import FloatButtonGroup from '@/src/components/modules/@common/floatButton/FloatButtonGroup';
import RegisterFormContainer from '@/src/components/modules/prompt/register/RegisterFormContainer';

const RegisterTemplate = () => {
	return (
		<div className='pt-8 pb-17 flex flex-col items-center relative'>
			<FloatButtonGroup className='top-[192px] mr-[-600px]' />
			<RegisterFormContainer />
		</div>
	);
};

export default RegisterTemplate;
