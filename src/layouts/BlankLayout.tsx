interface BlankLayoutProps {
	children: React.ReactNode;
}

const BlankLayout: React.FC<BlankLayoutProps> = ({ children }) => {
	return <main className='flex flex-col h-screen'>{children}</main>;
};

export default BlankLayout;
