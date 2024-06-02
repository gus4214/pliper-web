import { useRouter } from 'next/router';
import { Button } from 'react-daisyui';

const NavBar = () => {
	const router = useRouter();

	return (
		<div className='flex-1 ml-[159px] w-[190px]'>
			<Button color='ghost' onClick={() => router.push('/about')}>
				서비스 소개
			</Button>
			<Button color='ghost' onClick={() => router.push('/prompt')}>
				프롬프트
			</Button>
		</div>
	);
};

export default NavBar;
