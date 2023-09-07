import SelectChip from '@/src/components/atoms/chip/SelectChip';
import PlipIcon from '@/src/components/atoms/icons/PlipIcon';
import PlipNoneIcon from '@/src/components/atoms/icons/PlipNoneIcon';
import PromptItem from '@/src/components/modules/prompt/PromptItem';
import { Search } from 'heroicons-react';
import { Button, Input } from 'react-daisyui';

const PromptTemplate = () => {
	return (
		<div className='flex flex-col w-full justify-center items-center'>
			<div className='mt-10' />
			<div className='rounded-[130px] border-none w-[976px] h-[60px] py-2 bg-neutral-50 flex justify-center mb-4 items-center'>
				<Search />
				<Input
					placeholder='뭐든 적어주세요, 원하시는 내용을 보여드릴게요!'
					className='w-[374px] border-none bg-neutral-50 focus:outline-none'
				/>
			</div>
			<div className='gap-2 flex mt-6'>
				<SelectChip label='🎯 정확도순' color='secondary' selected />
				<SelectChip label='❤️ 좋아요 순' color='secondary' />
				<SelectChip label='✨ 최신 순' color='secondary' />
			</div>
			<div className='mb-8' />
			<div className='flex gap-10 justify-center'>
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
				<div className='flex flex-col gap-4'>
					<PromptItem />
					<PromptItem />
				</div>
			</div>
		</div>
	);
};

export default PromptTemplate;
