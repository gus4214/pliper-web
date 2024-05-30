import React from 'react';

interface LabelWithTemplateFormElementProps {
	leftLabel: string;
	leftElement: React.ReactNode;
	rightElement?: React.ReactNode;
}

const LabelWithTemplateFormElement: React.FC<LabelWithTemplateFormElementProps> = ({ leftLabel, leftElement, rightElement }) => {
	return (
		<div className='w-full flex py-4 px-6 bg-neutral-50 rounded-lg gap-[72px]'>
			<div className='flex items-center gap-6'>
				<div className='w-[160px] flex py-2'>
					<h1 className='text-black text-[13px] font-semibold whitespace-wrap'>{leftLabel}</h1>
				</div>
				{leftElement}
			</div>
			<div className='w-full row shrink basis-0 items-center gap-8 flex'>
				<div className='w-[80px] flex py-2'>
					<h1 className='text-neutral-500 text-[13px] font-semibold whitespace-nowrap'>추가사항</h1>
				</div>
				<div className='w-[496px]'>{rightElement}</div>
			</div>
		</div>
	);
};

export default LabelWithTemplateFormElement;
