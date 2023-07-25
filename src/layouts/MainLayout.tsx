import LoginModal from '@/src/components/modules/modals/LoginModal';

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className='flex h-full'>
			<div className='grow flex flex-col h-screen m-0-auto relative'>
				{/* Header */}
				<div className='grow w-full'>{children}</div>
				<LoginModal />
				{/* Footer */}
			</div>
		</div>
	);
};

export default MainLayout;
