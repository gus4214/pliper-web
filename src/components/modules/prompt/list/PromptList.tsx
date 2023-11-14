import Loading from '@/src/components/atoms/loading/Loading';
import PromptItemWithInteraction from '@/src/components/modules/@common/listItems/PromptItemWithInteraction';
import { useInfiniteGetPrompts } from '@/src/fetchers/prompt';
import { useAuthContext } from '@/src/hooks/context';
import { usePromptInteractions } from '@/src/hooks/promptInteractions';
import { searchFilterAtom } from '@/src/stores/searchForm';
import { formatDateToKorean } from '@/src/utils/dateUtils';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const PromptList: FC = () => {
	const { user, loading } = useAuthContext();
	const router = useRouter();
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(10);

	const { title, category2Texts, promptSort, llmModel, personaTypes } = useAtomValue(searchFilterAtom);

	const { data, fetchNextPage, isFetchingNextPage } = useInfiniteGetPrompts({
		page,
		limit,
		title,
		category2Texts,
		llmModel,
		promptSort,
		personaTypes,
	});

	// 인터렉션 추출
	const promptIds = data?.pages.flatMap((page) => page?.prompts.map((v) => v.promptId) || []);
	const { getInteractionByPromptId } = usePromptInteractions(promptIds!);

	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0.3,
	});

	const renderEmptyState = () => {
		if (title) {
			return (
				<div className='w-[744px] flex justify-center my-[10px]'>
					<span className='text-neutral-400 text-lg font-normal'>{`"${title}" 에 대한 검색결과가 없습니다.`}</span>
				</div>
			);
		}
		return (
			<div className='w-[744px] flex justify-center my-[10px]'>
				<span className='text-neutral-400 text-lg font-normal'>프롬프트가 존재하지 않습니다.</span>
			</div>
		);
	};

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView]);

	if (data?.pages[0]?.prompts.length === 0) {
		return renderEmptyState();
	}

	return (
		<>
			{/* {data!.prompts.length <= 0 ? (
				renderEmptyState()
			) : (
				<motion.div
					variants={{
						hidden: { opacity: 0 },
						show: {
							opacity: 1,
						},
					}}
					initial='hidden'
					animate='show'
				>
				<div className='flex flex-col gap-4'>
					{data?.prompts?.map((prompt) => {
						return (
							<motion.div
								key={prompt.promptId}
								variants={{
									hidden: { opacity: 0 },
									show: { opacity: 1 },
								}}
							>
							<PromptItemWithInteraction
								key={prompt.promptId}
								personaType={prompt.personaType}
								category1Text={prompt.category1Text}
								userNickname={prompt.userNickname}
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
			)} */}
			<div className='flex flex-col gap-4'>
				{data?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.prompts.map((prompt) => (
							<PromptItemWithInteraction
								key={prompt.promptId}
								personaType={prompt.personaType}
								category1Text={prompt.category1Text}
								userNickname={prompt.userNickname}
								updateDateTime={formatDateToKorean(prompt.updateDateTime)}
								title={prompt.title}
								likeCount={prompt.likeCount}
								viewCount={prompt.viewCount}
								percents={prompt.percents}
								onClick={() => router.push(`/prompt/${prompt.promptId}`)}
								interaction={getInteractionByPromptId(prompt.promptId)}
							/>
						))}
					</React.Fragment>
				))}
			</div>
			{isFetchingNextPage ? (
				<div className='flex w-full justify-center my-10'>
					<Loading />
				</div>
			) : (
				<div ref={ref}></div>
			)}
		</>
	);
};

export default PromptList;
