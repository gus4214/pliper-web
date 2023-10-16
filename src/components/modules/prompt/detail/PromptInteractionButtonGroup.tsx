import HandThumbsDownIcon from '@/src/components/atoms/icons/HandThumbsDownIcon';
import HandThumbsUpIcon from '@/src/components/atoms/icons/HandThumbsUpIcon';
import HeartIcon from '@/src/components/atoms/icons/HeartIcon';
import PlipOutlineIcon from '@/src/components/atoms/icons/PlipOutlineIcon';
import { Button } from 'react-daisyui';

interface PromptInteractionButtonGroupProps {
	onCreateClick: () => void;
}

const PromptInteractionButtonGroup: React.FC<PromptInteractionButtonGroupProps> = ({ onCreateClick }) => {
	return (
		<div className='w-full h-[72px] p-4 bg-sky-200 bg-opacity-10 rounded-lg justify-between items-center flex'>
			<div className='justify-end items-center flex'>
				<Button color='ghost' startIcon={<HeartIcon isLike />}>
					<span className='text-neutral-400 text-sm font-normal whitespace-nowrap'>좋아요</span>
				</Button>
				<Button color='ghost' startIcon={<HandThumbsUpIcon isUp />}>
					<span className='text-neutral-400 text-sm font-normal'>정확해요</span>
				</Button>
				<Button color='ghost' startIcon={<HandThumbsDownIcon isDown />}>
					<span className='text-neutral-400 text-sm font-normal'>부족해요</span>
				</Button>
			</div>
			<div className='flex gap-3'>
				<PlipOutlineIcon />
				<Button color='accent' onClick={onCreateClick} className='min-h-8 h-10'>
					<span className='text-white text-sm font-medium'>프롬프트 생성하기</span>
				</Button>
			</div>
		</div>
	);
};

export default PromptInteractionButtonGroup;
