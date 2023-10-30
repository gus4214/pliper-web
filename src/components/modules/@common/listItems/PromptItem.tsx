import LikeAndViewLabel from '@/src/components/atoms/label/LikeAndViewLabel';
import { InteractionByPrompt } from '@/src/fetchers/prompt/types';
import React from 'react';

export interface PromptItemProps {
	personaType: string;
	category1Text: string;
	userNickname: string;
	updateDateTime: string;
	likeCount: number;
	viewCount: number;
	percents: number;
	title: string;
	onClick?: () => void;
	interaction?: InteractionByPrompt;
	layoutWidthClassName?: string;
	titleWidthClassName?: string;
	action?: React.ReactNode;
}

const PromptItem: React.FC<PromptItemProps> = ({
	personaType,
	category1Text,
	userNickname,
	updateDateTime,
	likeCount,
	viewCount,
	percents,
	title,
	onClick,
	interaction,
	layoutWidthClassName = 'w-[944px]',
	titleWidthClassName = 'w-[750px]',
	action,
}) => {
	return (
		<div
			className={`${layoutWidthClassName} pl-4 pr-6 py-4 bg-white bg-opacity-5 rounded-2xl border border-neutral-200 hover:shadow  hover:border-teal-200 justify-start items-center gap-4 flex cursor-pointer`}
			onClick={onClick && onClick}
		>
			<div className='w-20 py-1.5 bg-white rounded flex-col justify-center items-center gap-2 flex'>
				<span className='text-center text-neutral-400 text-[13px] font-semibold'>{personaType}</span>
				<span className='text-center text-neutral-200 text-[13px] font-normal'>/</span>
				<span className='text-center text-teal-200 text-[13px] font-semibold'>{category1Text}</span>
			</div>
			<div className='pl-4 justify-between items-center flex w-full'>
				<div className='justify-start items-center gap-4 flex'>
					<div className='flex-col justify-start items-start gap-4 flex'>
						<div className='items-center gap-2 flex'>
							<span className='text-center text-neutral-400 text-[13px] font-normal'>{userNickname}</span>
							<div className='w-1 h-1 bg-neutral-200 rounded-full' />
							<span className='text-center text-neutral-400 text-[13px] font-normal'>{updateDateTime}</span>
						</div>
						<span className={`${titleWidthClassName} text-lg font-medium truncate`}>{title}</span>
						<LikeAndViewLabel
							likeCount={String(likeCount)}
							viewCount={String(viewCount)}
							percents={percents}
							isLikeAuthUser={interaction?.isLike}
						/>
					</div>
				</div>
				{action}
			</div>
		</div>
	);
};

export default PromptItem;
