import PlipNoneIcon from '@/src/components/atoms/icons/PlipNoneIcon';
import LikeAndViewLabel from '@/src/components/atoms/label/LikeAndViewLabel';
import React, { useEffect, useState } from 'react';
import { InteractionByPrompt } from '@/src/fetchers/prompt/types';
import PlipIcon from '@/src/components/atoms/icons/PlipIcon';
import { motion } from 'framer-motion';
import { cancelClipPromptApi, clipPromptApi } from '@/src/fetchers/prompt/Interaction';
import PlipAnimation, { usePlipAnimation } from '@/src/components/modules/prompt/animation/PlipAnimation';

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
	layoutWidthClassName?: string;
	titleWidthClassName?: string;
}

const PromptItem: React.FC<PromptItemProps> = ({
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
	layoutWidthClassName = 'w-[944px]',
	titleWidthClassName = 'w-[750px]',
}) => {
	const [plip, setPlip] = useState<boolean | undefined>(interaction?.isClip);

	const { active, disable, control } = usePlipAnimation();

	const handlePlipPrompt = (plip?: boolean) => {
		if (!interaction) return;
		if (plip) {
			active();
			clipPromptApi(interaction?.promptId);
			interaction.isClip = true;
		} else {
			disable();
			cancelClipPromptApi(interaction?.promptId);
			interaction.isClip = false;
		}
		setPlip(!!plip);
	};

	return (
		<div
			className={`${layoutWidthClassName} pl-4 pr-6 py-4 bg-white bg-opacity-5 rounded-2xl border border-neutral-200 hover:shadow  hover:border-teal-200 justify-start items-center gap-4 flex cursor-pointer`}
			onClick={onClick}
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
							<span className='text-center text-neutral-400 text-[13px] font-normal'>{userEmail}</span>
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
				<div className='w-8 h-8 relative'>
					<div
						className={'hover:opacity-70 opacity-100 transition duration-300 ease-in-out'}
						onClick={(e) => {
							e.stopPropagation();
							handlePlipPrompt(!interaction?.isClip);
						}}
					>
						<motion.div
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
							transition={{
								type: 'spring',
								stiffness: 400,
								damping: 10,
							}}
						>
							{plip ? <PlipIcon /> : <PlipNoneIcon />}
						</motion.div>
					</div>
				</div>
			</div>
			<PlipAnimation control={control} />
		</div>
	);
};

export default PromptItem;
