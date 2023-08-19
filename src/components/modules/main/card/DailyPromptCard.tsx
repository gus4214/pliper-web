import React from 'react';
import Image from 'next/image';
import { Card, Badge, Avatar } from 'react-daisyui';
import CategoryChip from '@/src/components/atoms/chip/CategoryChip';
import LikeAndViewLabel from '@/src/components/atoms/label/LikeAndViewLabel';

interface DailyPromptCardProps {
	src: string;
	user: string;
	title: string;
	tag: string;
	likeCount: number;
	viewCount: number;
}

const DailyPromptCard: React.FC<DailyPromptCardProps> = ({ src, user, title, tag, likeCount, viewCount }) => {
	return (
		<Card className='w-[576px] p-4 flex flex-row items-center cursor-pointer bg-white gap-4 rounded-lg hover:shadow-lg transition-all duration-300'>
			<Avatar shape='circle' size={4 * 20} src={src} />
			<div className='flex flex-col gap-3 w-full flex-nowrap truncate'>
				<div className='flex justify-between'>
					<span className='text-neutral-400 text-[13px]'>{user}</span>
					<LikeAndViewLabel likeCount={likeCount} viewCount={viewCount} />
				</div>
				<div className='flex gap-2 items-center'>
					<CategoryChip text={tag} />
					<span className='text-black text-lg font-medium truncate'>{title}</span>
				</div>
			</div>
		</Card>
	);
};

export default DailyPromptCard;
