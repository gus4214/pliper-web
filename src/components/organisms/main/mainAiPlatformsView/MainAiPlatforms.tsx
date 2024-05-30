import { useGetAiTools } from '@/src/fetchers/prompt';
import { Card } from 'react-daisyui';

const MainAiPlatforms = () => {
	const { data } = useGetAiTools({ type: 'LLM' });
	return (
		<div className='flex justify-start gap-6 relative max-w-[1200px]'>
			{data?.tools.map((tool, i) => {
				return (
					<Card key={i} imageFull className='w-[376px] h-20 relative flex cursor-pointer' onClick={() => window.open(tool.url, '_blank')}>
						<Card.Image src={`/images/ai/ai${(i % 3) + 1}.jpeg`} alt='ai-web' className='w-full' />
						<div className='z-10 flex items-center justify-center gap-3'>
							<span className='text-lg font-medium text-white'>{tool.name}</span>
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
				);
			})}
		</div>
	);
};

export default MainAiPlatforms;
