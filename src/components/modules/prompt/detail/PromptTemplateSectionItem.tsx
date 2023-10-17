import React from 'react';

interface PromptTemplateSectionItemProps {
	title: string;
	element: React.ReactNode;
}

const PromptTemplateSectionItem: React.FC<PromptTemplateSectionItemProps> = ({ title, element }) => {
	return (
		<div className='w-[556px] flex p-4 bg-neutral-100 rounded-lg'>
			<div className='flex items-center gap-6 w-full'>
				<div className='w-[80px] flex'>
					<h1 className='text-black text-sm font-medium whitespace-wrap'>{title}</h1>
				</div>
				<div className='w-[420px]'>{element}</div>
			</div>
		</div>
	);
};

export default PromptTemplateSectionItem;
