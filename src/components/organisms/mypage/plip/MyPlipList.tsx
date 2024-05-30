import Loading from '@/src/components/atoms/loading/Loading';
import PromptEmptyText from '@/src/components/atoms/text/PromptEmptyText';
import SearchTitleEmptyText from '@/src/components/atoms/text/SearchTitleEmptyText';
import PromptItemWithInteraction from '@/src/components/molecules/listItems/PromptItemWithInteraction';
import { useInfiniteGetMyPromptClips } from '@/src/fetchers/prompt/my-clip';
import { usePromptInteractions } from '@/src/hooks/promptController';
import { searchFilterAtom, searchInputAtom } from '@/src/stores/searchForm';
import { useAtomValue, useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { timeAgo } from '@/src/utils/dateUtils';

const MyPlipList = () => {
	const router = useRouter();

	const { title, category2Texts, llmModel, personaTypes } = useAtomValue(searchFilterAtom);
	const setSearchInput = useSetAtom(searchInputAtom);

	const { data, fetchNextPage, isFetchingNextPage } = useInfiniteGetMyPromptClips({
		page: 1,
		limit: 10,
		title,
		category2Texts,
		llmModel,
		personaTypes,
	});

	// pages 배열 내의 모든 prompts의 id를 하나의 배열로 합칩니다.
	const promptIds = data?.pages.flatMap((page) => page?.prompts?.map((v) => v.promptId) || []);
	const { getInteractionByPromptId } = usePromptInteractions(promptIds!);

	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0.3,
	});

	const renderEmptyState = () => {
		// title이 있을 경우의 안내문구
		if (title) {
			return <SearchTitleEmptyText title={title} />;
		}
		// title이 없을 경우의 안내문구
		return <PromptEmptyText />;
	};

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView]);

	useEffect(() => {
		return () => {
			setSearchInput('');
		};
	}, []);

	if (data?.pages[0]?.prompts?.length === 0) {
		return renderEmptyState();
	}

	return (
		<>
			{data?.pages.map((page, index) => (
				<React.Fragment key={index}>
					{page?.prompts?.map((prompt) => (
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
							interaction={getInteractionByPromptId(prompt.promptId)}
							onClick={() => router.push(`/prompt/${prompt.promptId}`)}
						/>
					))}
				</React.Fragment>
			))}
			{isFetchingNextPage ? (
				<div className='flex w-full justify-center'>
					<Loading />
				</div>
			) : (
				<div ref={ref}></div>
			)}
		</>
	);
};

export default MyPlipList;
