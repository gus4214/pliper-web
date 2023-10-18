import HandThumbsDownIcon from '@/src/components/atoms/icons/HandThumbsDownIcon';
import HandThumbsUpIcon from '@/src/components/atoms/icons/HandThumbsUpIcon';
import HeartIcon from '@/src/components/atoms/icons/HeartIcon';
import PlipOutlineIcon from '@/src/components/atoms/icons/PlipOutlineIcon';
import { Button } from 'react-daisyui';
import {
	cancelClipPromptApi,
	cancelLikePromptApi,
	cancelReliabilityPromptApi,
	clipPromptApi,
	likePromptApi,
	reliabilityPromptApi,
} from '@/src/fetchers/prompt/Interaction';
import { useEffect, useState } from 'react';
import { getInteractionByPromptsApi } from '@/src/fetchers/prompt/my-prompt';
import { useAuthContext } from '@/src/hooks/context';

interface PromptInteractionButtonGroupProps {
	promptId: number;
	onCreateClick: () => void;
}

const PromptInteractionButtonGroup: React.FC<PromptInteractionButtonGroupProps> = ({ promptId, onCreateClick }) => {
	const { user, loading } = useAuthContext();
	const [like, setLike] = useState<boolean>(false);
	const [clip, setClip] = useState<boolean>(false);
	const [reliability, setReliability] = useState<'UP' | 'DOWN' | undefined>();

	useEffect(() => {
		if (user) {
			const data = getInteractionByPromptsApi({ promptIds: [promptId] });
			data.then((result) => {
				const interaction = result.interactions.find((interaction) => interaction.promptId === promptId);
				if (interaction) {
					setLike(interaction.isLike);
					setClip(interaction.isClip);
					interaction.isReliability && setReliability(interaction.reliability);
				}
			});
		}
	}, [promptId, user]);

	const handleClipPrompt = (clip?: boolean) => {
		if (clip) {
			clipPromptApi(promptId);
		} else {
			cancelClipPromptApi(promptId);
		}
		setClip(!!clip);
	};

	const handleLikePrompt = (like?: boolean) => {
		if (like) {
			likePromptApi(promptId);
		} else {
			cancelLikePromptApi(promptId);
		}
		setLike(!!like);
	};

	const handleReliabilityPrompt = (reliability?: 'UP' | 'DOWN') => {
		if (reliability) {
			reliabilityPromptApi(promptId, reliability);
			setReliability(reliability);
		} else {
			cancelReliabilityPromptApi(promptId);
			setReliability(undefined);
		}
	};

	return (
		<div className='w-full h-[72px] p-4 bg-sky-200 bg-opacity-10 rounded-lg justify-between items-center flex'>
			<div className='justify-end items-center flex'>
				<Button color='ghost' startIcon={<HeartIcon isLike={like} />} onClick={() => handleLikePrompt(!like)}>
					<span className='text-neutral-400 text-sm font-normal whitespace-nowrap'>좋아요</span>
				</Button>
				<Button
					color='ghost'
					startIcon={<HandThumbsUpIcon isUp={reliability === 'UP'} />}
					onClick={() => {
						handleReliabilityPrompt(!reliability ? 'UP' : undefined);
					}}
				>
					<span className='text-neutral-400 text-sm font-normal'>정확해요</span>
				</Button>
				<Button
					color='ghost'
					startIcon={<HandThumbsDownIcon isDown={reliability === 'DOWN'} />}
					onClick={() => handleReliabilityPrompt(!reliability ? 'DOWN' : undefined)}
				>
					<span className='text-neutral-400 text-sm font-normal'>아쉬워요</span>
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
