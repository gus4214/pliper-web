import NotificationDropdown from '@/src/layouts/components/header/dropdowns/NotificationDropdown';
import SearchDropdown from '@/src/layouts/components/header/dropdowns/SearchDropdown';
import UserDropdown from '@/src/layouts/components/header/dropdowns/UserDropdown';
import { Button, Navbar } from 'react-daisyui';
import Image from 'next/image';
import Link from 'next/link';

interface MainHeaderProps {
	position: 'fixed' | 'static';
	onClick: () => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({ position, onClick }) => {
	const barPosition = position === 'fixed' ? 'sticky' : 'static';

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
				<UserDropdown onClick={onClick} />
			</div>
		</Navbar>
	);
};

export default MainHeader;
