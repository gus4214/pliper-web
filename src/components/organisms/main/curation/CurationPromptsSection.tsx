import { FC, ReactNode, memo } from 'react';

interface CurationPromptsSectionProps {
	title: string;
	children: ReactNode;
}

const CurationPromptsSection: FC<CurationPromptsSectionProps> = ({ title, children }) => {
	return (
		<div className='max-w-[1200px] w-full flex flex-col items-center gap-8'>
			<h1 className='text-center text-black text-[28px] font-bold'>{title}</h1>
			{children}
		</div>
	);
};

export default memo(CurationPromptsSection);
