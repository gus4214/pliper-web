import Footer from '@/src/layouts/components/footer/Footer';
import MainHeader from '@/src/layouts/components/header/MainHeader';
import LoginModal from '@/src/components/modules/modals/LoginModal';

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className='flex h-full'>
			<div className='grow flex flex-col min-w-0 min-h-screen'>
				<MainHeader />
				<main className='grow w-full'>{children}</main>
				<LoginModal />
				<Footer />
			</div>
		</div>
	);
};

export default MainLayout;
