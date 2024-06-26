import React, { FC } from "react";

// <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="#39CCCC"/>

interface PlipOutlineIconProps {
	isPlip?: boolean;
}
const PlipOutlineIcon: FC<PlipOutlineIconProps> = ({isPlip}) => {

  const backgroundColor = isPlip ? '#39CCCC' : 'white'
	const fountColor = isPlip ? 'white' :  '#39CCCC'

	return (
		<>
			<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none' className='cursor-pointer'>
				<g clipPath='url(#clip0_1083_2683)'>
					<path
						d='M30.125 0H9.875C4.42119 0 0 4.42119 0 9.875V30.125C0 35.5788 4.42119 40 9.875 40H30.125C35.5788 40 40 35.5788 40 30.125V9.875C40 4.42119 35.5788 0 30.125 0Z'
						fill={backgroundColor}
					/>
					<path
						d='M22.9754 7.5H17.0254C13.8379 7.5 11.2504 10.0125 11.1504 13.175V21.125C11.2629 24.2875 13.8504 26.8125 17.0254 26.8125C20.2004 26.8125 22.9129 24.175 22.9129 20.925V15.4375H20.7004V20.925C20.7004 22.9625 19.0504 24.6 17.0254 24.6C14.9879 24.6 13.3504 22.95 13.3504 20.925V13.3875C13.3504 11.3875 14.9504 9.7625 16.9379 9.7125H22.9879C25.0254 9.7125 26.6629 11.35 26.6629 13.3875V26.6125C26.6629 28.65 25.0129 30.2875 22.9879 30.2875V32.5C26.2379 32.5 28.8754 29.8625 28.8754 26.6125V13.3875C28.8754 10.1375 26.2379 7.5 22.9879 7.5H22.9754Z'
						fill={fountColor}
					/>
				</g>
				{!isPlip && <rect x='0.5' y='0.5' width='39' height='39' rx='7.5' stroke='#39CCCC' strokeOpacity='0.2' /> }
				<defs>
					<clipPath id='clip0_1083_2683'>
						<rect width='40' height='40' rx='8' fill='white' />
					</clipPath>
				</defs>
			</svg>
		</>
	);
};

export default PlipOutlineIcon;
