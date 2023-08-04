interface BlankLayoutProps {
	children: React.ReactNode;
}

const BlankLayout: React.FC<BlankLayoutProps> = ({ children }) => {
	return <div className='flex flex-col h-screen'>{children}</div>;
};

export default BlankLayout;
