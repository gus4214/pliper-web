import AppBar from '@/src/layouts/components/header/appBar/AppBar';
import Logo from '@/src/layouts/components/header/logo/Logo';
import NavBar from '@/src/layouts/components/header/navBar/NavBar';

interface MainHeaderProps {
	position: 'fixed' | 'static';
}

const MainHeader: React.FC<MainHeaderProps> = ({ position }) => {
	const barPosition = position === 'fixed' ? 'sticky' : 'static';

	return (
		<div className={`px-10 top-0 ${barPosition} h-[64px] bg-base-100 shadow-md round-box z-20 flex justify-center`}>
			<div className='w-[1200px] flex items-center flex-nowrap'>
				<Logo />
				<NavBar />
				<AppBar />
			</div>
		</div>
	);
};

export default MainHeader;
