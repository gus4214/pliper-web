import NotificationDropdown from '@/src/layouts/components/header/NotificationDropdown';
import SearchDropdown from '@/src/layouts/components/header/SearchDropdown';
import UserDropdown from '@/src/layouts/components/header/UserDropdown';
import { Navbar } from 'react-daisyui';

interface MainHeaderProps {}

const MainHeader: React.FC<MainHeaderProps> = () => {
	return (
		<Navbar className='px-10 top-0 sticky bg-base-100 shadow-md round-box'>
			<div className='flex-1'>
				<div className='w-[82px] h-[31px] px-4 py-2 justify-start items-start gap-2.5 inline-flex'>
					<span className='text-black text-[15px] font-medium leading-[15px]'>메뉴명 1</span>
				</div>
				<div className='w-[84px] h-[31px] px-4 py-2 justify-start items-start gap-2.5 inline-flex'>
					<div className='text-black text-[15px] font-medium leading-[15px]'>메뉴명 2</div>
				</div>
			</div>
			<div className='flex gap-4'>
				<SearchDropdown />
				<NotificationDropdown />
				<UserDropdown />
			</div>
		</Navbar>
	);
};

export default MainHeader;
