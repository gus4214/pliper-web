import React from 'react';

interface LabelWithTemplateFormElementProps {
	leftLabel: string;
	leftElement: React.ReactNode;
	rightElement?: React.ReactNode;
}

const LabelWithTemplateFormElement: React.FC<LabelWithTemplateFormElementProps> = ({ leftLabel, leftElement, rightElement }) => {
	return (
		<div className='w-full flex py-4 px-6 bg-neutral-100 rounded-2xl gap-6'>
			<div className='flex items-center gap-6'>
				<div className='w-[120px] flex py-2'>
					<h1 className='text-black text-[13px] font-medium whitespace-wrap'>{leftLabel}</h1>
				</div>
				{leftElement}
			</div>
			<div className='w-full row shrink basis-0 items-center gap-3 flex'>
				<div className='px-4 py-2 flex'>
					<h1 className='text-black text-sm font-normal whitespace-nowrap'>타입 별 옵션 추가</h1>
				</div>
				<div className='w-[420px]'>{rightElement}</div>
			</div>
		</div>
	);
};

export default LabelWithTemplateFormElement;
