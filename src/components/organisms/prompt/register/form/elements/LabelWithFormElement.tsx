import React from 'react';
import { Button, Tooltip } from 'react-daisyui';

interface LabelWithFormElementProps {
	label: string;
	subLabel?: string;
	required?: boolean;
	labelPosition?: 'center' | 'start';
	className?: string;
	labelRightComponent?: React.ReactNode;
	children: React.ReactNode;
}

const LabelWithFormElement: React.FC<LabelWithFormElementProps> = ({
	label,
	required,
	labelPosition = 'start',
	subLabel,
	className,
	labelRightComponent,
	children,
}) => {
	return (
		<div className={`${className} w-full flex flex-col justify-start items-${labelPosition}`}>
			<div className='flex flex-col gap-1'>
				<div className='w-[150px] flex gap-4 items-center relative'>
					<span className='text-black text-[15px] font-semibold'>
						{label} {required && <span className={'text-teal-200'}>*</span>}
					</span>
					{labelRightComponent}
				</div>
				{subLabel && <span className='text-neutral-600 text-xs font-normal'>{subLabel}</span>}
			</div>
			<div className='flex w-full'>{children}</div>
		</div>
	);
};

export default LabelWithFormElement;
