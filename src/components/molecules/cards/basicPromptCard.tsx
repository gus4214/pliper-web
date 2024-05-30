import React from 'react';
import Image from 'next/image';
import { Card, Badge } from 'react-daisyui';
import CategoryChip from '@/src/components/atoms/chip/CategoryChip';
import LikeAndViewLabel from '@/src/components/atoms/label/LikeAndViewLabel';

interface BasicPromptCardProps {
	src: string;
	user: string;
	title: string;
	tag: string;
	likeCount: string;
	viewCount: string;
	onClick?: () => void;
}

const BasicPromptCard: React.FC<BasicPromptCardProps> = ({ src, user, title, tag, likeCount, viewCount, onClick }) => {
	return (
		<Card className='w-[376px] cursor-pointer hover:shadow-lg transition-all duration-300' onClick={onClick}>
			<div className='w-full h-[164px] relative'>
				<Image
					src={src}
					alt='Card Image'
					fill
					className='absolute z-0 object-cover rounded-lg'
					sizes=' (min-width: 786px) 30vw'
					quality={75}
				/>
			</div>
			<Card.Body className='flex flex-col gap-4 px-3 py-4 truncate rounded-bl-lg rounded-br-lg'>
				<div className='flex flex-col gap-2'>
					<p className='text-xs text-neutral-400'>{user}</p>
					<span className='text-base font-medium text-black truncate'>{title}</span>
				</div>
				<div className='flex justify-between w-full'>
					<CategoryChip text={tag} />
					<LikeAndViewLabel likeCount={likeCount} viewCount={viewCount} />
				</div>
			</Card.Body>
		</Card>
	);
};

export default BasicPromptCard;
