import Loading from '@/src/components/atoms/loading/Loading';
import PromptEmptyText from '@/src/components/atoms/text/PromptEmptyText';
import SearchTitleEmptyText from '@/src/components/atoms/text/SearchTitleEmptyText';
import PromptItemWithActions from '@/src/components/molecules/listItems/PromptItemWithActions';
import { useInfiniteGetMyCreatedPrompts } from '@/src/fetchers/prompt/my-prompt';
import { usePromptMenu } from '@/src/hooks-jotai/usePromptMenu.jotai';
import { useConfirmModal } from '@/src/hooks/modal';
import { usePromptHandler, usePromptInteractions } from '@/src/hooks/promptController';
import { searchFilterAtom } from '@/src/stores/searchForm';
import { timeAgo } from '@/src/utils/dateUtils';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const MyCreatedPromptList = () => {
	const router = useRouter();
	const [open, close] = useConfirmModal();

	const { title } = useAtomValue(searchFilterAtom);

	const {
		selectedMenus: { personaTypes, category2Texts, llmModel },
	} = usePromptMenu();

	const { data, fetchNextPage, isFetchingNextPage, refetch } = useInfiniteGetMyCreatedPrompts({
		page: 1,
		limit: 10,
		title,
		personaTypes,
		category2Texts,
		llmModel,
	});

	// pages 배열 내의 모든 prompts의 id를 하나의 배열로 합칩니다.
	const promptIds = data?.pages.flatMap((page) => page?.prompts?.map((v) => v.promptId) || []);
	const { getInteractionByPromptId } = usePromptInteractions(promptIds!);
	const { goPromptDetailPage, deletePrompt, togglePromptShow } = usePromptHandler();

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

	if (data?.pages[0]?.prompts?.length === 0) {
		return renderEmptyState();
	}

	return (
		<>
			{data?.pages.map((page, index) => (
				<React.Fragment key={index}>
					{page?.prompts?.map((prompt) => (
						<PromptItemWithActions
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
							onClick={() => goPromptDetailPage(prompt.promptId, prompt.show)}
							onEditClick={() => router.push(`/mypage/created-prompt/${prompt.promptId}`)}
							onDeleteClick={() => deletePrompt(prompt.promptId, refetch)}
							onToggleClick={() => togglePromptShow(prompt.promptId, prompt.show, refetch)}
							show={prompt.show}
						/>
					))}
				</React.Fragment>
			))}
			{isFetchingNextPage ? (
				<div className='flex justify-center w-full'>
					<Loading />
				</div>
			) : (
				<div ref={ref}></div>
			)}
		</>
	);
};

export default MyCreatedPromptList;
