import { Tool } from '@/src/fetchers/prompt/types';
import { FC } from 'react';
import { Card } from 'react-daisyui';

interface AiToolsProps {
	aiTools: Tool[];
	onToolClick: (url: string) => void;
}

const AiTools: FC<AiToolsProps> = ({ aiTools, onToolClick }) => {
	return (
		<div className='flex gap-6 relative'>
			{aiTools.map((tool, i) => {
				return (
					<Card key={i} imageFull className='w-[376px] h-20 relative flex cursor-pointer' onClick={() => onToolClick(tool.url)}>
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

export default AiTools;
