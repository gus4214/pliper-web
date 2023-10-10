import React from 'react';

interface LabelWithFormElementProps {
	label: string;
	labelPosition?: 'center' | 'start';
	children: React.ReactNode;
}

const LabelWithFormElement: React.FC<LabelWithFormElementProps> = ({ label, labelPosition = 'center', children }) => {
	return (
		<div className={`w-full flex justify-start items-${labelPosition} gap-3`}>
			<div className='w-[150px] p-2'>
				<h1 className='text-black text-[13px] font-medium'>{label}</h1>
			</div>
			<div className='grow shrink basis-0 flex'>{children}</div>
		</div>
	);
};

export default LabelWithFormElement;
