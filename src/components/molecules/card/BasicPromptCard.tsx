import CategoryChip from '@/src/components/atoms/chip/CategoryChip';
import LikeAndViewLabel from '@/src/components/atoms/label/LikeAndViewLabel';
import { promptKoTextOfPersona } from '@/src/configs/prompt';
import { PartialPrompt } from '@/src/fetchers/prompt/types';
import { addHttpsPrefix, formatNumber } from '@/src/utils/utils';
import Image from 'next/image';
import React from 'react';
import { Card } from 'react-daisyui';

interface BasicPromptCardProps {
	prompt: PartialPrompt;
	onClick?: () => void;
}

const BasicPromptCard: React.FC<BasicPromptCardProps> = ({ onClick, prompt }) => {
	const { imageUrl, userNickname, title, personaType, likeCount, viewCount } = prompt;

	return (
		<Card className='w-[376px] cursor-pointer hover:shadow-lg transition-all duration-300' onClick={onClick}>
			<div className='w-full h-[164px] relative'>
				<Image
					src={addHttpsPrefix(imageUrl) || '/images/sample/6.gif'}
					alt='Card Image'
					fill
					className='absolute z-0 object-cover rounded-lg'
					sizes=' (min-width: 786px) 30vw'
					quality={75}
				/>
			</div>
			<Card.Body className='flex flex-col gap-4 px-3 py-4 truncate rounded-bl-lg rounded-br-lg'>
				<div className='flex flex-col gap-2'>
					<p className='text-xs text-neutral-400'>{userNickname}</p>
					<span className='text-base font-medium text-black truncate'>{title}</span>
				</div>
				<div className='flex justify-between w-full'>
					<CategoryChip text={promptKoTextOfPersona[personaType]} />
					<LikeAndViewLabel likeCount={formatNumber(likeCount)} viewCount={formatNumber(viewCount)} />
				</div>
			</Card.Body>
		</Card>
	);
};

export default BasicPromptCard;
