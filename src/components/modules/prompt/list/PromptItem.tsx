import PlipNoneIcon from '@/src/components/atoms/icons/PlipNoneIcon';
import LikeAndViewLabel from '@/src/components/atoms/label/LikeAndViewLabel';
import React from 'react';
import { InteractionByPrompt } from "@/src/fetchers/prompt/types";
import PlipIcon from "@/src/components/atoms/icons/PlipIcon";

interface InteractionProps {
	IsLike: boolean;
	IsPlip: boolean;
}

interface PromptItemProps {
	personaType: string;
	category1Text: string;
	userEmail: string;
	updateDateTime: string;
	likeCount: number;
	viewCount: number;
	percents: number;
	title: string;
	onClick?: () => void;
	interaction?: InteractionByPrompt;
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
	onClick,
	interaction,
}) => {
	return (
		<div
			className='w-[944px] pl-4 pr-8 py-4 bg-white bg-opacity-5 rounded-2xl border border-neutral-200 hover:shadow  hover:border-teal-200 justify-start items-center gap-4 flex cursor-pointer'
			onClick={onClick}
		>
			<div className='w-20 py-1.5 bg-white rounded flex-col justify-center items-center gap-2 flex'>
				<span className='text-center text-neutral-400 text-[13px] font-semibold'>{personaType}</span>
				<span className='text-center text-neutral-200 text-[13px] font-normal'>/</span>
				<span className='text-center text-teal-200 text-[13px] font-semibold'>{category1Text}</span>
			</div>
			<div className='pl-4 border-l border-neutral-100 justify-start items-center flex'>
				<div className='grow shrink basis-0 justify-start items-center gap-4 flex w-[776px]'>
					<div className='grow shrink basis-0 flex-col justify-start items-start gap-4 flex'>
						<div className='items-center gap-2 flex'>
							<span className='text-center text-neutral-400 text-[13px] font-normal'>{userEmail}</span>
							<div className='w-1 h-1 bg-neutral-200 rounded-full' />
							<span className='text-center text-neutral-400 text-[13px] font-normal'>{updateDateTime}</span>
						</div>
						<span className='text-lg font-medium'>{title}</span>
						<LikeAndViewLabel likeCount={String(likeCount)} viewCount={String(viewCount)} percents={percents} isLikeAuthUser={interaction?.isLike}/>
					</div>
				</div>
				<div className='w-8 h-8 relative'>
					{interaction?.isClip ? <PlipIcon /> : <PlipNoneIcon /> }
				</div>
			</div>
		</div>
	);
};

export default PromptItem;
