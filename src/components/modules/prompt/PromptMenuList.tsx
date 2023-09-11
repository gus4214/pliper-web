import { Button } from 'react-daisyui';

const PromptMenuList = () => {
	return (
		<div className='w-44 px-4 flex-col gap-8 flex'>
			<div className='flex-col justify-center items-start gap-6 flex'>
				<span className='text-center text-neutral-800 text-xs font-bold'>페르소나</span>
				<div className='pl-4 border-l border-neutral-200 flex-col justify-center items-start gap-2 flex'>
					<Button
						className='w-32 h-8 px-4 py-[9px] min-h-8 hover:text-teal-400 hover:font-medium hover:bg-neutral-50 text-start'
						color='ghost'
					>
						<span className='text-[15px] font-normal w-full'>일상</span>
					</Button>
					<Button
						className='w-32 h-8 px-4 py-[9px] min-h-8 hover:text-teal-400 hover:font-medium hover:bg-neutral-50 text-start'
						color='ghost'
					>
						<span className='text-[15px] font-normal w-full'>업무</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PromptMenuList;
