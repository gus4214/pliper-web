import HandThumbsDownIcon from '@/src/components/atoms/icons/HandThumbsDownIcon';
import HandThumbsUpIcon from '@/src/components/atoms/icons/HandThumbsUpIcon';
import HeartIcon from '@/src/components/atoms/icons/HeartIcon';
import PlipOutlineIcon from '@/src/components/atoms/icons/PlipOutlineIcon';
import {Button} from 'react-daisyui';
import {
    cancelClipPromptApi,
    cancelLikePromptApi,
    cancelReliabilityPromptApi,
    clipPromptApi,
    likePromptApi,
    reliabilityPromptApi,
} from '@/src/fetchers/prompt/Interaction';
import {useEffect, useState} from 'react';
import {getInteractionByPromptsApi} from '@/src/fetchers/prompt/my-prompt';
import {useAuthContext} from '@/src/hooks/context';
import {motion} from 'framer-motion';
import PlipAnimation, {usePlipAnimation} from "@/src/components/modules/prompt/animation/PlipAnimation";
import {pretendard} from "@/src/styles/font";
import mixpanel from "mixpanel-browser";
import {PROMT_ACCURACY, PROMT_LIKE, PROMT_PLIP} from "@/src/configs/mixpanel";


interface PromptInteractionButtonGroupProps {
    promptId: number;
    onCreateClick: () => void;
}

const PromptInteractionButtonGroup: React.FC<PromptInteractionButtonGroupProps> = ({promptId, onCreateClick}) => {
    const {user, loading} = useAuthContext();
    const [like, setLike] = useState<boolean>(false);
    const [plip, setPlip] = useState<boolean>(false);
    const [reliability, setReliability] = useState<'UP' | 'DOWN' | undefined>();

    const {active, disable, control} = usePlipAnimation();

    useEffect(() => {
        if (user) {
            const data = getInteractionByPromptsApi({promptIds: [promptId]});
            data.then((result) => {
                const interaction = result.interactions?.find((interaction) => interaction.promptId === promptId);
                if (interaction) {
                    setLike(interaction.isLike);
                    setPlip(interaction.isClip);
                    interaction.isReliability && setReliability(interaction.reliability);
                }
            });
        }
    }, [promptId, user]);

    const handlePlipPrompt = (clip?: boolean) => {
        if (clip) {
            active()
            clipPromptApi(promptId);
            mixpanel.track(PROMT_PLIP, {promptId, clip});
        } else {
            disable()
            cancelClipPromptApi(promptId);
        }
        setPlip(!!clip);
    };

    const handleLikePrompt = (like?: boolean) => {
        if (like) {
            likePromptApi(promptId);
            mixpanel.track(PROMT_LIKE, {promptId, like});
        } else {
            cancelLikePromptApi(promptId);
        }
        setLike(!!like);
    };

    const handleReliabilityPrompt = (reliability?: 'UP' | 'DOWN') => {
        const isActive = !!reliability
        if (reliability) {
            reliabilityPromptApi(promptId, reliability);
            setReliability(reliability);
            mixpanel.track(PROMT_ACCURACY, {promptId, reliability});
        } else {
            cancelReliabilityPromptApi(promptId);
            setReliability(undefined);
        }
    };

    const isActiveReliabilityUp = reliability === 'UP'
    const isActiveReliabilityDown = reliability === 'DOWN'

    return (
        <div className='w-full h-[72px] p-4 bg-sky-200 bg-opacity-10 rounded-lg justify-between items-center flex'>
            <div className='justify-end items-center flex'>
                <Button color='ghost' startIcon={<HeartIcon isLike={like}/>} onClick={() => handleLikePrompt(!like)}>
                    <span className='text-neutral-400 text-sm font-normal whitespace-nowrap'>좋아요</span>
                </Button>
                <Button
                    color='ghost'
                    startIcon={<HandThumbsUpIcon isUp={reliability === 'UP'}/>}
                    onClick={() => {
                        handleReliabilityPrompt(!isActiveReliabilityUp ? 'UP' : undefined);
                    }}
                >
                    <span className='text-neutral-400 text-sm font-normal'>정확해요</span>
                </Button>
                <Button
                    color='ghost'
                    startIcon={<HandThumbsDownIcon isDown={reliability === 'DOWN'}/>}
                    onClick={() => handleReliabilityPrompt(!isActiveReliabilityDown ? 'DOWN' : undefined)}
                >
                    <span className='text-neutral-400 text-sm font-normal'>아쉬워요</span>
                </Button>
            </div>
            <div className='flex gap-3'>
                <div className={'hover:opacity-70 opacity-100 transition duration-300 ease-in-out'}
                     onClick={() => handlePlipPrompt(!plip)}>
                    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{
                        type: "spring", stiffness: 400, damping: 10
                    }}>
                        <PlipOutlineIcon isPlip={plip}/>
                    </motion.div>
                </div>
                <Button color='accent' onClick={onCreateClick} className='min-h-8 h-10'>
                    <span className={`text-white text-sm font-medium`}>프롬프트 생성하기</span>
                </Button>
            </div>
            <PlipAnimation control={control}/>
        </div>
    );
};

export default PromptInteractionButtonGroup;
