import ModalProvider from '@/src/components/modules/modals/ModalProvider';
import Footer from '@/src/layouts/components/footer/Footer';
import MainHeader from '@/src/layouts/components/header/MainHeader';

export interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className='flex h-full'>
			<div className='grow flex flex-col min-w-0 min-h-screen'>
				<MainHeader position='fixed' />
				<main className='grow w-full'>{children}</main>
				<ModalProvider />
				<Footer />
			</div>
		</div>
	);
};

export default MainLayout;
