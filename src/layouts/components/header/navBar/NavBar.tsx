import { appGnbNavigation } from '@/src/navigation';
import { useRouter } from 'next/router';
import { Button } from 'react-daisyui';

const NavBar = () => {
	const router = useRouter();

	const navigationItems = appGnbNavigation();

	const handleRoute = (path: string) => {
		router.push(path);
	};

	return (
		<div className='flex flex-nowrap flex-1 md:ml-[159px]'>
			{navigationItems.map((v, i) => (
				<Button key={i} color='ghost' onClick={() => handleRoute(v.path)}>
					{v.title}
				</Button>
			))}
		</div>
	);
};

export default NavBar;
