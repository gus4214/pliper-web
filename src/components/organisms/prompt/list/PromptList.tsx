import Loading from '@/src/components/atoms/loading/Loading';
import PromptItemWithInteraction from '@/src/components/molecules/listItems/PromptItemWithInteraction';
import { useInfiniteGetPrompts } from '@/src/fetchers/prompt';
import { usePromptMenu } from '@/src/hooks-jotai/usePromptMenu.jotai';
import { usePromptInteractions } from '@/src/hooks/promptController';
import { searchFilterAtom } from '@/src/stores/searchForm';
import { timeAgo } from '@/src/utils/dateUtils';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const PromptList: FC = () => {
	const router = useRouter();
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(10);

	const { title, promptSort } = useAtomValue(searchFilterAtom);

	const {
		selectedMenus: { personaTypes, category2Texts, llmModel },
	} = usePromptMenu();

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
					<span className='text-lg font-normal text-neutral-400'>{`"${title}" 에 대한 검색결과가 없습니다.`}</span>
				</div>
			);
		}
		return (
			<div className='w-[744px] flex justify-center my-[10px]'>
				<span className='text-lg font-normal text-neutral-400'>프롬프트가 존재하지 않습니다.</span>
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
			<div className='flex flex-col gap-4'>
				{data?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.prompts.map((prompt) => (
							<PromptItemWithInteraction
								key={prompt.promptId}
								personaType={prompt.personaType}
								category1Text={prompt.category1Text}
								userNickname={prompt.userNickname}
								updateDateTime={timeAgo(prompt.updateDateTime)}
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
				<div className='flex justify-center w-full my-10'>
					<Loading />
				</div>
			) : (
				<div ref={ref}></div>
			)}
		</>
	);
};

export default PromptList;
