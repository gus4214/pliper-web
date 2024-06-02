import NotificationDropdown from '@/src/layouts/components/header/appBar/notification/NotificationDropdown';
import { useAuthContext } from '@/src/hooks/context';
import SearchDropdown from '@/src/layouts/components/header/appBar/dropdowns/SearchDropdown';
import UserDropdown from '@/src/layouts/components/header/appBar/dropdowns/UserDropdown';
import SearchDrawer from '@/src/layouts/components/header/appBar/searchDrawer/SearchDrawer';
import { searchInputAtom } from '@/src/stores/searchForm';
import { useSetAtom } from 'jotai';
import { useState } from 'react';

const AppBar = () => {
	// * States
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const setSearchInputValue = useSetAtom(searchInputAtom);

	// * Hook
	const { user, logout } = useAuthContext();

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
		<>
			<div className='flex gap-4' role='listbox' id='top-dropdown' aria-label='top-dropdown'>
				<SearchDropdown onClick={handleSearchClick} />
				<NotificationDropdown />
				<UserDropdown loggedIn={!!user} onLogout={logout} />
			</div>
			<SearchDrawer isOpen={isSearchOpen} onClose={handleCloseSearch} />
		</>
	);
};

export default AppBar;
