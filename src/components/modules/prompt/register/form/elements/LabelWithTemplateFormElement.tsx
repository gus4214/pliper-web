import React from 'react';

interface LabelWithTemplateFormElementProps {
	leftLabel: string;
	leftElement: React.ReactNode;
	rightElement?: React.ReactNode;
}

const LabelWithTemplateFormElement: React.FC<LabelWithTemplateFormElementProps> = ({ leftLabel, leftElement, rightElement }) => {
	return (
		<div className='w-[934px] flex p-4 bg-neutral-100 rounded-2xl gap-6'>
			<div className='flex items-center gap-8'>
				<div className='w-[80px] flex px-4 py-2'>
					<h1 className='text-black text-[13px] font-medium whitespace-nowrap'>{leftLabel}</h1>
				</div>
				{leftElement}
			</div>
			<div className='max-w-[558px] row shrink basis-0 items-center gap-3 flex'>
				<div className='px-4 py-2 flex'>
					<h1 className='text-black text-sm font-normal whitespace-nowrap'>타입 별 옵션 추가</h1>
				</div>
				{rightElement}
			</div>
		</div>
	);
};

export default LabelWithTemplateFormElement;
