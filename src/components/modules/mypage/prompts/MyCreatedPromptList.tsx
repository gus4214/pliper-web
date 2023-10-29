import Loading from '@/src/components/atoms/loading/Loading';
import PromptEmptyText from '@/src/components/atoms/text/PromptEmptyText';
import SearchTitleEmptyText from '@/src/components/atoms/text/SearchTitleEmptyText';
import PromptItemWithActions from '@/src/components/modules/@common/listItems/PromptItemWithActions';
import { useInfiniteGetMyCreatedPrompts } from '@/src/fetchers/prompt/my-prompt';
import { usePromptInteractions } from '@/src/hooks/promptInteractions';
import { searchFilterAtom } from '@/src/stores/searchForm';
import { formatDateToKorean } from '@/src/utils/dateUtils';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const MyCreatedPromptList = () => {
	const router = useRouter();

	const { title, category2Texts, llmModel, personaTypes } = useAtomValue(searchFilterAtom);
	const { data, fetchNextPage, isFetchingNextPage } = useInfiniteGetMyCreatedPrompts({
		page: 1,
		limit: 10,
		title,
		category2Texts,
		llmModel,
		personaTypes,
	});

	// pages 배열 내의 모든 prompts의 id를 하나의 배열로 합칩니다.
	const promptIds = data?.pages.flatMap((page) => page?.prompts.map((v) => v.promptId) || []);
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

	if (data?.pages[0]?.prompts.length === 0) {
		return renderEmptyState();
	}

	return (
		<>
			{data?.pages.map((page, index) => (
				<React.Fragment key={index}>
					{page?.prompts.map((prompt) => (
						<PromptItemWithActions
							key={prompt.promptId}
							personaType={prompt.personaType}
							category1Text={prompt.category1Text}
							userEmail={prompt.userEmail}
							updateDateTime={formatDateToKorean(prompt.updateDateTime)}
							title={prompt.title}
							likeCount={prompt.likeCount}
							viewCount={prompt.viewCount}
							percents={prompt.percents}
							interaction={getInteractionByPromptId(prompt.promptId)}
							onClick={() => router.push(`/prompt/${prompt.promptId}`)}
							onEditClick={() => router.push(`/mypage/created-prompt/${prompt.promptId}`)}
							show={prompt.show}
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

export default MyCreatedPromptList;
