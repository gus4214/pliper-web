import { ArrowNarrowUp, ArrowRightOutline, ArrowUpOutline } from 'heroicons-react';
import Image from 'next/image';
import { Card } from 'react-daisyui';

const MainAiPlatformContainer = () => {
	return (
		<div className='w-full bg-slate-200 bg-opacity-50 flex justify-center items-center py-[50px]'>
			<div className='w-[1200px] px-4 rounded-2xl flex-col justify-start items-start gap-10 flex'>
				<div className='items-center gap-2.5 flex'>
					<h1 className='text-black text-[28px] font-bold'>AI 플랫폼</h1>
					<span className='text-neutral-400 text-sm font-normal'>플랫폼을 통해 AI를 활용 해보는건 어떠세요?</span>
				</div>
				<div className='flex justify-center gap-6'>
					<Card imageFull className='w-[376px] h-20 relative flex cursor-pointer'>
						<Card.Image src='/images/ai/ai1.jpeg' alt='ai-web' className='w-full' />
						<div className='flex gap-3 items-center z-10 justify-center'>
							<span className='text-white text-lg font-medium'>ChatGPT</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-4 h-4 text-white text-opacity-70'
							>
								<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25' />
							</svg>
						</div>
					</Card>
					<Card imageFull className='w-[376px] h-20 relative flex cursor-pointer'>
						<Card.Image src='/images/ai/ai2.jpeg' alt='ai-web' className='w-full' />
						<div className='flex gap-3 items-center z-10 justify-center'>
							<span className='text-white text-lg font-medium'>ChatGPT</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-4 h-4 text-white text-opacity-70'
							>
								<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25' />
							</svg>
						</div>
					</Card>
					<Card imageFull className='w-[376px] h-20 relative flex cursor-pointer'>
						<Card.Image src='/images/ai/ai3.jpeg' alt='ai-web' className='w-full' />
						<div className='flex gap-3 items-center z-10 justify-center'>
							<span className='text-white text-lg font-medium'>미드저니</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-4 h-4 text-white text-opacity-70'
							>
								<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25' />
							</svg>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default MainAiPlatformContainer;
