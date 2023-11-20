import React from 'react';

interface LabelWithFormElementProps {
	label: string;
	required?: boolean
	labelPosition?: 'center' | 'start';
	children: React.ReactNode;
}

const LabelWithFormElement: React.FC<LabelWithFormElementProps> = ({ label, required, labelPosition = 'center', children }) => {
	return (
		<div className={`w-full flex justify-start items-${labelPosition} gap-3`}>
			<div className='w-[150px] p-2'>
				<span className='text-black text-[13px] font-medium'>{label} { required && <span className={'text-teal-200'}>*</span> }</span>

			</div>
			<div className='grow shrink basis-0 flex'>{children}</div>
		</div>
	);
};

export default LabelWithFormElement;
