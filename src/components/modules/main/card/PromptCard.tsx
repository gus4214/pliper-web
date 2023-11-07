import React from 'react';
import Image from 'next/image';
import { Card, Badge } from 'react-daisyui';
import CategoryChip from '@/src/components/atoms/chip/CategoryChip';
import LikeAndViewLabel from '@/src/components/atoms/label/LikeAndViewLabel';

interface PromptCardProps {
	src: string;
	user: string;
	title: string;
	tag: string;
	likeCount: string;
	viewCount: string;
	onClick?: () => void;
}

const PromptCard: React.FC<PromptCardProps> = ({ src, user, title, tag, likeCount, viewCount, onClick }) => {
	return (
		<Card className='w-[376px] cursor-pointer hover:shadow-lg transition-all duration-300' >
			<div className='w-full h-[164px] relative'>
				<Image src={src} alt='Card Image' fill className='absolute z-0 rounded-lg object-cover' />
			</div>
			<Card.Body className='px-3 py-4 rounded-bl-lg rounded-br-lg flex flex-col gap-4 truncate'>
				<div className='flex flex-col gap-2'>
					<p className='text-neutral-400 text-xs'>{user}</p>
					<span className='text-black text-base font-medium truncate'>{title}</span>
				</div>
				<div className='w-full flex justify-between'>
					<CategoryChip text={tag} />
					<LikeAndViewLabel likeCount={likeCount} viewCount={viewCount} />
				</div>
			</Card.Body>
		</Card>
	);
};

export default PromptCard;
