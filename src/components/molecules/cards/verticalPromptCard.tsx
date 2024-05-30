import React from 'react';
import { Card } from 'react-daisyui';
import CategoryChip from '@/src/components/atoms/chip/CategoryChip';
import LikeAndViewLabel from '@/src/components/atoms/label/LikeAndViewLabel';
import Image from 'next/image';

interface VerticalPromptCardProps {
	src: string;
	user: string;
	title: string;
	tag: string;
	likeCount: string;
	viewCount: string;
	onClick?: () => void;
}

const VerticalPromptCard: React.FC<VerticalPromptCardProps> = ({ src, user, title, tag, likeCount, viewCount, onClick }) => {
	return (
		<Card
			className='w-[576px] max-h-[112px] p-4 flex flex-row items-center cursor-pointer bg-white gap-4 rounded-lg hover:shadow-lg transition-all duration-300'
			onClick={onClick}
		>
			<Image className='rounded-full Thumb' width={80} height={80} src={src} alt={title} quality={75} sizes=' (min-width: 786px) 30vw' />
			<div className='flex flex-col w-full gap-3 truncate flex-nowrap'>
				<div className='flex justify-between'>
					<span className='text-neutral-400 text-[13px]'>{user}</span>
					<LikeAndViewLabel likeCount={likeCount} viewCount={viewCount} />
				</div>
				<div className='flex items-center gap-2'>
					<CategoryChip text={tag} />
					<span className='text-lg font-medium text-black truncate'>{title}</span>
				</div>
			</div>
		</Card>
	);
};

export default VerticalPromptCard;
