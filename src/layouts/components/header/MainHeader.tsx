import NotificationDropdown from '@/src/components/organisms/notification/NotificationDropdown';
import SearchDropdown from '@/src/layouts/components/header/dropdowns/SearchDropdown';
import UserDropdown from '@/src/layouts/components/header/dropdowns/UserDropdown';
import { Button, Navbar } from 'react-daisyui';
import Image from 'next/image';
import Link from 'next/link';
import { useAuthContext } from '@/src/hooks/context';
import { useRef, useState } from 'react';
import SearchDrawer from '@/src/layouts/components/header/searchDrawer/SearchDrawer';
import { searchInputAtom } from '@/src/stores/searchForm';
import { useSetAtom } from 'jotai';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import { useRouter } from 'next/router';

interface MainHeaderProps {
	position: 'fixed' | 'static';
}

const MainHeader: React.FC<MainHeaderProps> = ({ position }) => {
	const barPosition = position === 'fixed' ? 'sticky' : 'static';
	const router = useRouter();

	const { user, logout } = useAuthContext();

	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const setSearchInputValue = useSetAtom(searchInputAtom);

	const navbarRef = useRef<HTMLDivElement>(null);

	const handleNavbarClick = (event: React.MouseEvent) => {
		if (isSearchOpen && navbarRef.current) {
			handleCloseSearch();
		}
	};

	const handleSearchClick = () => {
		if (isSearchOpen) {
			setIsSearchOpen(false);
			return;
		}
		setIsSearchOpen(true);
		setSearchInputValue('');
	};

	const handleCloseSearch = () => {
		setIsSearchOpen(false);
	};

	return (
		<Navbar
			ref={navbarRef}
			onClick={handleNavbarClick}
			className={`px-10 top-0 ${barPosition} h-[60px] bg-base-100 shadow-md round-box z-20 flex justify-center flex-nowrap`}
		>
			<div className='w-[1200px] flex flex-nowrap'>
				<Link href={'/'}>
					<Image src={'/images/logo/pliper.svg'} alt='logo' width={96} height={24} />
				</Link>
				<div className='flex-1 ml-[159px] w-[190px]'>
					<Button color='ghost' onClick={() => router.push('/about')}>
						서비스 소개
					</Button>
					<Button color='ghost' onClick={() => router.push('/prompt')}>
						프롬프트
					</Button>
				</div>
				<div className='flex gap-4' role='listbox' id='top-dropdown' aria-label='top-dropdown'>
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
