import { Card } from 'react-daisyui';
import { getAiToolsApi, useGetAiTools } from "@/src/fetchers/prompt";

const MainAiPlatformList = () => {

	const {data } = useGetAiTools({type: 'LLM'})
	return (
		<div className='flex justify-center gap-6'>
			{data?.tools.map((tool, i) => {
				return (
					<Card key={i} imageFull className='w-[376px] h-20 relative flex cursor-pointer' onClick={() => window.open(tool.url, '_blank')}>
						<Card.Image src='/images/ai/ai1.jpeg' alt='ai-web' className='w-full' />
						<div className='flex gap-3 items-center z-10 justify-center'>
							<span className='text-white text-lg font-medium'>{tool.name}</span>
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
				)
			})}
			{/*<Card imageFull className='w-[376px] h-20 relative flex cursor-pointer'>*/}
			{/*	<Card.Image src='/images/ai/ai1.jpeg' alt='ai-web' className='w-full' />*/}
			{/*	<div className='flex gap-3 items-center z-10 justify-center'>*/}
			{/*		<span className='text-white text-lg font-medium'>뤼튼</span>*/}
			{/*		<svg*/}
			{/*			xmlns='http://www.w3.org/2000/svg'*/}
			{/*			fill='none'*/}
			{/*			viewBox='0 0 24 24'*/}
			{/*			strokeWidth={1.5}*/}
			{/*			stroke='currentColor'*/}
			{/*			className='w-4 h-4 text-white text-opacity-70'*/}
			{/*		>*/}
			{/*			<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25' />*/}
			{/*		</svg>*/}
			{/*	</div>*/}
			{/*</Card>*/}
			{/*<Card imageFull className='w-[376px] h-20 relative flex cursor-pointer'>*/}
			{/*	<Card.Image src='/images/ai/ai2.jpeg' alt='ai-web' className='w-full' />*/}
			{/*	<div className='flex gap-3 items-center z-10 justify-center'>*/}
			{/*		<span className='text-white text-lg font-medium'>ChatGPT</span>*/}
			{/*		<svg*/}
			{/*			xmlns='http://www.w3.org/2000/svg'*/}
			{/*			fill='none'*/}
			{/*			viewBox='0 0 24 24'*/}
			{/*			strokeWidth={1.5}*/}
			{/*			stroke='currentColor'*/}
			{/*			className='w-4 h-4 text-white text-opacity-70'*/}
			{/*		>*/}
			{/*			<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25' />*/}
			{/*		</svg>*/}
			{/*	</div>*/}
			{/*</Card>*/}
			{/*<Card imageFull className='w-[376px] h-20 relative flex cursor-pointer'>*/}
			{/*	<Card.Image src='/images/ai/ai3.jpeg' alt='ai-web' className='w-full' />*/}
			{/*	<div className='flex gap-3 items-center z-10 justify-center'>*/}
			{/*		<span className='text-white text-lg font-medium'>미드저니</span>*/}
			{/*		<svg*/}
			{/*			xmlns='http://www.w3.org/2000/svg'*/}
			{/*			fill='none'*/}
			{/*			viewBox='0 0 24 24'*/}
			{/*			strokeWidth={1.5}*/}
			{/*			stroke='currentColor'*/}
			{/*			className='w-4 h-4 text-white text-opacity-70'*/}
			{/*		>*/}
			{/*			<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25' />*/}
			{/*		</svg>*/}
			{/*	</div>*/}
			{/*</Card>*/}
		</div>
	);
};

export default MainAiPlatformList;
