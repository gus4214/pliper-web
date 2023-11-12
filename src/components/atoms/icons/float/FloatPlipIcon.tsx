import React from 'react';

interface FloatPlipIconProps {
	className?: string;
	onClick?: () => void;
}

const FloatPlipIcon: React.FC<FloatPlipIconProps> = ({ onClick, className }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' className={className} onClick={onClick}>
			<path
				d='M14.46 2H9.7C7.15 2 5.08 4.01 5 6.54V12.9C5.09 15.43 7.16 17.45 9.7 17.45C12.24 17.45 14.41 15.34 14.41 12.74V8.35H12.64V12.74C12.64 14.37 11.32 15.68 9.7 15.68C8.07 15.68 6.76 14.36 6.76 12.74V6.71C6.76 5.11 8.04 3.81 9.63 3.77H14.47C16.1 3.77 17.41 5.08 17.41 6.71V17.29C17.41 18.92 16.09 20.23 14.47 20.23V22C17.07 22 19.18 19.89 19.18 17.29V6.71C19.18 4.11 17.07 2 14.47 2H14.46Z'
				fill='white'
			/>
		</svg>
	);
};

export default FloatPlipIcon;
