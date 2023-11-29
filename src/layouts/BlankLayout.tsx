import ScrollToTopButton from '@/src/components/atoms/buttons/ScrollToTopButton';

interface BlankLayoutProps {
	children: React.ReactNode;
}

const BlankLayout: React.FC<BlankLayoutProps> = ({ children }) => {
	return (
		<main className='flex flex-col h-screen'>
			{children}
			<ScrollToTopButton showY={700} />
		</main>
	);
};

export default BlankLayout;
