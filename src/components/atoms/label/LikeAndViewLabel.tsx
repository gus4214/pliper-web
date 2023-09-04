import React from 'react';

interface LikeAndViewLabelProps {
	likeCount: string;
	viewCount: string;
	percent?: string;
}

const LikeAndViewLabel: React.FC<LikeAndViewLabelProps> = ({ likeCount, viewCount, percent }) => {
	return (
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
			{percent && (
				<>
					<div className='w-1 h-1 bg-stone-300 rounded-full' />
					<div className='flex items-center gap-1.5'>
						<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'>
							<path
								d='M10.7188 1.3125C10.1147 1.3125 9.625 1.80219 9.625 2.40625V11.5938C9.625 12.1978 10.1147 12.6875 10.7188 12.6875H11.1562C11.7603 12.6875 12.25 12.1978 12.25 11.5938V2.40625C12.25 1.80219 11.7603 1.3125 11.1562 1.3125H10.7188Z'
								fill='#A3A3A3'
							/>
							<path
								d='M5.6875 5.03125C5.6875 4.42719 6.17719 3.9375 6.78125 3.9375H7.21875C7.82281 3.9375 8.3125 4.42719 8.3125 5.03125V11.5938C8.3125 12.1978 7.82281 12.6875 7.21875 12.6875H6.78125C6.17719 12.6875 5.6875 12.1978 5.6875 11.5938V5.03125Z'
								fill='#A3A3A3'
							/>
							<path
								d='M1.75 7.65625C1.75 7.05219 2.23969 6.5625 2.84375 6.5625H3.28125C3.88531 6.5625 4.375 7.05219 4.375 7.65625V11.5938C4.375 12.1978 3.88531 12.6875 3.28125 12.6875H2.84375C2.23969 12.6875 1.75 12.1978 1.75 11.5938V7.65625Z'
								fill='#A3A3A3'
							/>
						</svg>
						<p className='text-neutral-400 text-xs'>{`${percent}%`}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default LikeAndViewLabel;
