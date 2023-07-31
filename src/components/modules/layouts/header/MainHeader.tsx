import NotificationIcon from '@/src/components/atoms/icons/NotificationIcon';
import SearchIcon from '@/src/components/atoms/icons/SearchIcon';
import HeaderDropdown from '@/src/components/modules/layouts/header/HeaderDropdown';

const MainHeader = () => {
	return (
		<header className='flex justify-center items-center '>
			<div className='flex py-4 px-4 w-full'>
				<div className='flex'>
					<div className='w-[82px] h-[31px] px-4 py-2 justify-start items-start gap-2.5 inline-flex'>
						<span className='text-black text-[15px] font-medium leading-[15px]'>메뉴명 1</span>
					</div>
					<div className='w-[84px] h-[31px] px-4 py-2 justify-start items-start gap-2.5 inline-flex'>
						<div className='text-black text-[15px] font-medium leading-[15px]'>메뉴명 2</div>
					</div>
				</div>
				<div className='flex-1' />
				<div className='flex gap-6 items-center w-[152px]'>
					<SearchIcon />
					<NotificationIcon />
					<HeaderDropdown />
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
