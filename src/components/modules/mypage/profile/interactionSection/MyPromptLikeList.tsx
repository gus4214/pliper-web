import Loading from '@/src/components/atoms/loading/Loading';
import PromptEmptyText from '@/src/components/atoms/text/PromptEmptyText';
import PromptItem from '@/src/components/modules/prompt/list/PromptItem';
import { useInfiniteGetMyPromptsByLike } from '@/src/fetchers/prompt/my-prompt';
import { usePromptInteractions } from '@/src/hooks/promptInteractions';
import { formatDateToKorean } from '@/src/utils/dateUtils';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const MyPromptLikeList = () => {
	const { data, fetchNextPage, isFetchingNextPage } = useInfiniteGetMyPromptsByLike({ page: 1, limit: 10 });

	// pages 배열 내의 모든 prompts의 id를 하나의 배열로 합칩니다.
	const promptIds = data?.pages.flatMap((page) => page?.prompts.map((v) => v.promptId) || []);
	const { getInteractionByPromptId } = usePromptInteractions(promptIds!);

	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0.3,
	});

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView]);

	return (
		<>
			{data?.pages.map((page, index) => (
				<React.Fragment key={index}>
					{!page?.prompts && <PromptEmptyText />}
					{page?.prompts.map((prompt) => (
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
							layoutWidthClassName='w-[464px]'
							titleWidthClassName='w-[276px]'
							interaction={getInteractionByPromptId(prompt.promptId)}
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

export default MyPromptLikeList;
