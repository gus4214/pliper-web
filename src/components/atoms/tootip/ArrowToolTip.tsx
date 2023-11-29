import React, { FC, ReactNode } from 'react';

interface NoticeTooltipProps {
	children: ReactNode;
	tooltip: ReactNode;
	width: number
	position: 'bottom';
}

const ArrowToolTip: FC<NoticeTooltipProps> = ({  children, tooltip, position, width = 300 }) => {
	const positionToCss = () => {
		switch (position) {
			case 'bottom':
				return `arrow-bottom right-0 top-8`;
		}
	};

	const widthCss = `w-[${width}px]`

	return (
		<>
			<div className='group w-[31px] h-4 px-2 py-[3px] rounded justify-center items-center flex cursor-pointer relative'>
				<div className={''}>
					{' '}
					{children}
					<div
						className={`arrow-tooltip  ${widthCss} bg-white border-[1.5px] border-solid p-2.5 border-[#39cccc] absolute ${positionToCss()} hidden rounded-sm  group-hover:block`}
					>
						{tooltip}
					</div>
				</div>
			</div>
		</>
	);
};

export default ArrowToolTip;
