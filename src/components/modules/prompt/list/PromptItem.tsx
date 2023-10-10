import LikeAndViewLabel from '@/src/components/atoms/label/LikeAndViewLabel';
import React from 'react';

interface PromptItemProps {
	personaType: string;
	category1Text: string;
	userEmail: string;
	updateDateTime: string;
	likeCount: number;
	viewCount: number;
	percents: number;
	title: string;
}

const PromptItem: React.FC<Partial<PromptItemProps>> = ({
	personaType,
	category1Text,
	userEmail,
	updateDateTime,
	likeCount,
	viewCount,
	percents,
	title,
}) => {
	return (
		<div className='w-[944px] pl-4 pr-8 py-4 bg-white bg-opacity-5 rounded-2xl border border-neutral-200 hover:shadow  hover:border-teal-200 justify-start items-center gap-4 flex cursor-pointer'>
			<div className='w-10 px-2 py-1.5 bg-white rounded flex-col justify-center items-center gap-2 flex'>
				<span className='text-center text-neutral-400 text-[13px] font-semibold'>{personaType}</span>
				<span className='text-center text-neutral-200 text-[13px] font-normal'>/</span>
				<span className='text-center text-teal-200 text-[13px] font-semibold'>{category1Text}</span>
			</div>
			<div className='pl-4 border-l border-neutral-100 justify-start items-center flex'>
				<div className='grow shrink basis-0 justify-start items-center gap-4 flex'>
					<div className='grow shrink basis-0 flex-col justify-start items-start gap-4 flex'>
						<div className='items-center gap-2 flex'>
							<span className='text-center text-neutral-400 text-[13px] font-normal'>{userEmail}</span>
							<div className='w-1 h-1 bg-neutral-200 rounded-full' />
							<span className='text-center text-neutral-400 text-[13px] font-normal'>{updateDateTime}</span>
						</div>
						<span className='text-lg font-medium'>{title}</span>
						<LikeAndViewLabel likeCount={String(likeCount)} viewCount={String(viewCount)} percent='80' />
					</div>
				</div>
				<div className='w-8 h-8 relative' />
			</div>
		</div>
	);
};

export default PromptItem;
