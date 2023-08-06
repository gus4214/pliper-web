import React from 'react';
import Image from 'next/image';
import { Card, Badge } from 'react-daisyui';

interface PromptCardProps {
	src: string;
	user: string;
	title: string;
	tag: string;
	likeCount: number;
	viewCount: number;
}

const PromptCard: React.FC<PromptCardProps> = ({ src, user, title, tag, likeCount, viewCount }) => {
	return (
		<Card className='w-[376px] cursor-pointer hover:shadow-lg transition-all duration-300'>
			<Image src={src} alt='Card Image' width={376} height={164} className='rounded-t-lg' />
			<Card.Body className='px-3 py-4 rounded-bl-lg rounded-br-lg flex flex-col gap-4'>
				<div className='flex flex-col gap-2'>
					<p className='text-neutral-400 text-xs'>{user}</p>
					<span className='text-black text-base'>{title}</span>
				</div>
				<div className='w-full flex justify-between'>
					<div className='w-[39px] h-6 px-2 py-1.5 bg-emerald-300 bg-opacity-20 rounded justify-center items-center gap-2 inline-flex'>
						<div className='text-center text-teal-400 text-[13px]'>{tag}</div>
					</div>
					<div className='flex items-center gap-1.5'>
						<div className='flex items-center gap-1.5'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5 fill-neutral-400'>
								<path d='M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z' />
							</svg>
							<p className='text-center text-neutral-400 text-xs'>{likeCount}</p>
						</div>
						<div className='w-1 h-1 bg-stone-300 rounded-full' />
						<div className='flex items-center gap-1.5'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5 fill-neutral-400'>
								<path d='M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z' />
								<path
									fillRule='evenodd'
									d='M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
									clipRule='evenodd'
								/>
							</svg>
							<p className='text-center text-neutral-400 text-xs'>{viewCount}</p>
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

export default PromptCard;
