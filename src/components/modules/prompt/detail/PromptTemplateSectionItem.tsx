import React from 'react';

interface PromptTemplateSectionItemProps {
	title: string;
	element: React.ReactNode;
}

const PromptTemplateSectionItem: React.FC<PromptTemplateSectionItemProps> = ({ title, element }) => {
	return (
		<div className='w-full flex flex-col p-4 bg-neutral-50 rounded-lg gap-2.5'>
			<h1 className='text-black text-[13px] font-semibold whitespace-wrap'>{title}</h1>
			<div className='w-full'>{element}</div>
		</div>
	);
};

export default PromptTemplateSectionItem;
