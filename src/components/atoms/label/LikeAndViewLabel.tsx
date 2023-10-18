import PercentsBar from '@/src/components/atoms/percentsBar/PercentsBar';
import React from 'react';

interface LikeAndViewLabelProps {
	likeCount: string;
	viewCount: string;
	percents?: number;
	isLikeAuthUser?: boolean;
}

const LikeAndViewLabel: React.FC<LikeAndViewLabelProps> = ({ likeCount, viewCount, percents, isLikeAuthUser }) => {
	const isPercentsBarShow = percents !== null && percents !== undefined;
	const color = isLikeAuthUser ? 'teal-200' : 'neutral-400'

	return (
		<>
			<div className='flex items-center gap-1.5'>
				<div className='flex items-center gap-1'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={`w-3.5 h-3.5 fill-${color}`}>
						<path d='M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z' />
					</svg>
					<p className='text-center text-neutral-400 text-xs font-normal'>{likeCount}</p>
				</div>
				<div className='w-1 h-1 bg-stone-300 rounded-full' />
				<div className='flex items-center gap-1'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-3.5 h-3.5 fill-neutral-400'>
						<path d='M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z' />
						<path
							fillRule='evenodd'
							d='M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
							clipRule='evenodd'
						/>
					</svg>
					<p className='text-center text-neutral-400 text-xs font-normal'>{viewCount}</p>
				</div>
				{isPercentsBarShow && (
					<>
						<div className='w-1 h-1 bg-stone-300 rounded-full' />
						<PercentsBar percents={percents!} />
					</>
				)}
			</div>
		</>
	);
};

export default LikeAndViewLabel;
