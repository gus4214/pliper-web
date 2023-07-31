import { FC } from 'react';

interface NotificationIconProps {
	active?: boolean;
}

const NotificationIcon: FC<NotificationIconProps> = ({ active }) => {
	return (
		<svg
			className='shrink-0 relative overflow-visible'
			style={{}}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<mask id='mask0_178_479' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
				<rect width='24' height='24' fill='#D9D9D9' />
			</mask>
			<g mask='url(#mask0_178_479)'>
				<path
					d='M4.25 18.8654V17.3654H6.25V10.1154C6.25 8.75771 6.66987 7.5574 7.5096 6.51446C8.34935 5.47151 9.42948 4.80261 10.75 4.50774V3.80774C10.75 3.45517 10.8702 3.1587 11.1106 2.91831C11.3509 2.67793 11.6474 2.55774 12 2.55774C12.3525 2.55774 12.649 2.67793 12.8894 2.91831C13.1298 3.1587 13.25 3.45517 13.25 3.80774V4.50774C14.5705 4.80261 15.6506 5.47151 16.4904 6.51446C17.3301 7.5574 17.75 8.75771 17.75 10.1154V17.3654H19.75V18.8654H4.25ZM12 21.8077C11.5077 21.8077 11.0833 21.6327 10.7269 21.2827C10.3705 20.9327 10.1923 20.5051 10.1923 20H13.8077C13.8077 20.5051 13.6327 20.9327 13.2827 21.2827C12.9327 21.6327 12.5051 21.8077 12 21.8077Z'
					fill='black'
				/>
				{active && <circle cx='17' cy='5' r='3' fill='#FF0000' />}
			</g>
		</svg>
	);
};

export default NotificationIcon;
