import RegisterForm from '@/src/components/modules/prompt/register/RegisterForm';
import RegisterHeader from '@/src/components/modules/prompt/register/RegisterHeader';

const RegisterContainer = () => {
	return (
		<div className='w-[1200px] pt-6 bg-white flex-col justify-start gap-6 flex'>
			<RegisterHeader />
			<RegisterForm />
		</div>
	);
};

export default RegisterContainer;
