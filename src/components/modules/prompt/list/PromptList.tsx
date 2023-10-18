import PromptItem from '@/src/components/modules/prompt/list/PromptItem';
import {useGetPrompts} from '@/src/fetchers/prompt';
import {searchFilterAtom} from '@/src/stores/searchForm';
import {formatDateToKorean} from '@/src/utils/dateUtils';
import {useAtomValue} from 'jotai';
import {useRouter} from 'next/router';
import {FC, useEffect, useState} from 'react';
import {getInteractionByPromptsApi, useGetInteractionByPrompts} from '@/src/fetchers/prompt/my-prompt';
import {useAuthContext} from '@/src/hooks/context';
import {InteractionByPrompt} from '@/src/fetchers/prompt/types';
import {motion} from 'framer-motion';

const PromptList: FC = () => {
    const {user, loading} = useAuthContext();
    const router = useRouter();
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(8);

    const {title, category2Texts, promptSort, lmModel, personaTypes} = useAtomValue(searchFilterAtom);

    const {data, isFetching} = useGetPrompts({
        page,
        limit,
        title,
        category2Texts,
        llmModel: lmModel,
        promptSort,
        personaTypes,
    });

    // 인터렉션 추출
    const promptIds = data?.prompts.map((v) => v.promptId);
    const {data: interactions} = useGetInteractionByPrompts({promptIds: promptIds!}, {enabled: !!promptIds && !!user});
    const mapOfPromptInteraction = interactions?.interactions.reduce((acc, curr) => {
        acc.set(curr.promptId, curr);
        return acc;
    }, new Map<number, InteractionByPrompt>());

    const renderEmptyState = () => {
        // title이 있을 경우의 안내문구
        if (title) {
            return (
                <div className='w-[744px] flex justify-center my-[10px]'>
                    <span className='text-neutral-400 text-lg font-normal'>{`"${title}" 에 대한 검색결과가 없습니다.`}</span>
                </div>
            );
        }
        // title이 없을 경우의 안내문구
        return (
            <div className='w-[744px] flex justify-center my-[10px]'>
                <span className='text-neutral-400 text-lg font-normal'>프롬프트가 존재하지 않습니다.</span>
            </div>
        );
    };

    return (
        <>
            {data!.prompts.length <= 0 ? (
                renderEmptyState()
            ) : (
                <motion.div
                            variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                    }
                }} initial="hidden" animate="show" >
                    <div className='flex flex-col gap-4'>
                        {data?.prompts?.map((prompt) => {
                            return (
                                <motion.div
                                    key={prompt.promptId}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        show: { opacity: 1 }
                                    }}
                                >
                                    <PromptItem
                                        key={prompt.promptId}
                                        personaType={prompt.personaType}
                                        category1Text={prompt.category1Text}
                                        userEmail={prompt.userEmail}
                                        updateDateTime={formatDateToKorean(prompt.updateDateTime)}
                                        title={prompt.title}
                                        likeCount={prompt.likeCount}
                                        viewCount={prompt.viewCount}
                                        percents={prompt.percents}
                                        onClick={() => router.push(`/prompt/${prompt.promptId}`)}
                                        interaction={mapOfPromptInteraction?.get(prompt.promptId)}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default PromptList;
