import Footer from '@/src/layouts/components/footer/Footer';
import MainHeader from '@/src/layouts/components/header/MainHeader';
import LoginModal from '@/src/components/modules/modals/LoginModal';
import SignupModal from '@/src/components/modules/modals/SignupModal';
import { useState } from 'react';

export interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	const [open, setOpen] = useState<boolean>(false);

	const toggleOpen = () => {
		setOpen(!open);
	};

	return (
		<div className='flex h-full'>
			<div className='grow flex flex-col min-w-0 min-h-screen'>
				<MainHeader position='fixed' onClick={() => setOpen(true)} />
				<main className='grow w-full'>{children}</main>
				<LoginModal open={open} toggleOpen={toggleOpen} />
				<SignupModal />
				<Footer />
			</div>
		</div>
	);
};

export default MainLayout;
