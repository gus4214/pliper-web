import React from 'react';
import { Card } from 'react-daisyui';
import CategoryChip from '@/src/components/atoms/chip/CategoryChip';
import LikeAndViewLabel from '@/src/components/atoms/label/LikeAndViewLabel';
import Image from 'next/image';
import { PartialPrompt } from '@/src/fetchers/prompt/types';
import { addHttpsPrefix, formatNumber } from '@/src/utils/utils';
import { promptKoTextOfPersona } from '@/src/configs/prompt';

interface VerticalPromptCardProps {
	prompt: PartialPrompt;
	onClick?: () => void;
}

const VerticalPromptCard: React.FC<VerticalPromptCardProps> = ({ prompt, onClick }) => {
	const { imageUrl, userNickname, title, personaType, likeCount, viewCount } = prompt;

	return (
		<Card
			className='w-[576px] max-h-[112px] p-4 flex flex-row items-center cursor-pointer bg-white gap-4 rounded-lg hover:shadow-lg transition-all duration-300'
			onClick={onClick}
		>
			<Image
				className='rounded-full Thumb'
				width={80}
				height={80}
				src={addHttpsPrefix(imageUrl) || '/images/sample/3.jpeg'}
				alt={title}
				quality={75}
				sizes=' (min-width: 786px) 30vw'
			/>
			<div className='flex flex-col w-full gap-3 truncate flex-nowrap'>
				<div className='flex justify-between'>
					<span className='text-neutral-400 text-[13px]'>{userNickname}</span>
					<LikeAndViewLabel likeCount={formatNumber(likeCount)} viewCount={formatNumber(viewCount)} />
				</div>
				<div className='flex items-center gap-2'>
					<CategoryChip text={promptKoTextOfPersona[personaType]} />
					<span className='text-lg font-medium text-black truncate'>{title}</span>
				</div>
			</div>
		</Card>
	);
};

export default VerticalPromptCard;
