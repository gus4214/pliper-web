import NotificationDropdown from '@/src/layouts/components/header/dropdowns/NotificationDropdown';
import SearchDropdown from '@/src/layouts/components/header/dropdowns/SearchDropdown';
import UserDropdown from '@/src/layouts/components/header/dropdowns/UserDropdown';
import { Button, Navbar } from 'react-daisyui';
import Image from 'next/image';
import Link from 'next/link';
import { useAuthContext } from '@/src/hooks/context';

interface MainHeaderProps {
	position: 'fixed' | 'static';
}

const MainHeader: React.FC<MainHeaderProps> = ({ position }) => {
	const barPosition = position === 'fixed' ? 'sticky' : 'static';

	const { user, logout } = useAuthContext();
	console.log('🚀 ~ file: MainHeader.tsx:17 ~ r:', user);

	return (
		<Navbar className={`px-10 top-0 ${barPosition} bg-base-100 shadow-md round-box z-20`}>
			<Link href={'/'}>
				<Image src={'/images/pliper.png'} alt='logo' width={96} height={24} />
			</Link>
			<div className='flex-1 ml-[159px]'>
				<Button color='ghost'>메뉴명 1</Button>
				<Button color='ghost'>메뉴명 2</Button>
			</div>
			<div className='flex gap-4'>
				<SearchDropdown />
				<NotificationDropdown />
				<UserDropdown loggedIn={!!user} handleLogout={logout} />
			</div>
		</Navbar>
	);
};

export default MainHeader;
