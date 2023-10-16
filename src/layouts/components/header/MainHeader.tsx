import NotificationDropdown from '@/src/components/modules/notification/NotificationDropdown';
import SearchDropdown from '@/src/layouts/components/header/dropdowns/SearchDropdown';
import UserDropdown from '@/src/layouts/components/header/dropdowns/UserDropdown';
import { Button, Navbar } from 'react-daisyui';
import Image from 'next/image';
import Link from 'next/link';
import { useAuthContext } from '@/src/hooks/context';
import { useState } from 'react';
import SearchDrawer from '@/src/layouts/components/header/searchDrawer/SearchDrawer';
import { searchInputAtom } from '@/src/stores/searchForm';
import { useSetAtom } from 'jotai';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';

interface MainHeaderProps {
	position: 'fixed' | 'static';
}

const MainHeader: React.FC<MainHeaderProps> = ({ position }) => {
	const barPosition = position === 'fixed' ? 'sticky' : 'static';

	const { user, logout } = useAuthContext();

	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const setSearchInputValue = useSetAtom(searchInputAtom);

	const handleSearchClick = () => {
		setIsSearchOpen(true);
		setSearchInputValue('');
	};

	const handleCloseSearch = () => {
		setIsSearchOpen(false);
	};

	return (
		<Navbar className={`px-10 top-0 ${barPosition} h-[60px] bg-base-100 shadow-md round-box z-20 flex justify-center flex-nowrap`}>
			<div className='w-[1200px] flex flex-nowrap'>
				<Link href={'/'}>
					<Image src={'/images/logo/pliper.svg'} alt='logo' width={96} height={24} />
				</Link>
				<div className='flex-1 ml-[159px] w-[190px]'>
					<Button color='ghost'>프롬프트</Button>
					<Button color='ghost'>메뉴명 2</Button>
				</div>
				<div className='flex gap-4'>
					<SearchDropdown onClick={handleSearchClick} />
					<NotificationDropdown />
					<UserDropdown loggedIn={!!user} handleLogout={logout} />
				</div>
				<SearchDrawer isOpen={isSearchOpen} onClose={handleCloseSearch} />
			</div>
		</Navbar>
	);
};

export default MainHeader;
