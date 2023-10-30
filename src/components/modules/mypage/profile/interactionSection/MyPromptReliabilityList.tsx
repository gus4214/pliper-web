import Loading from '@/src/components/atoms/loading/Loading';
import PromptEmptyText from '@/src/components/atoms/text/PromptEmptyText';
import PromptItemWithInteraction from '@/src/components/modules/@common/listItems/PromptItemWithInteraction';
import { useInfiniteGetMyPromptsByReliability } from '@/src/fetchers/prompt/my-prompt';
import { usePromptInteractions } from '@/src/hooks/promptInteractions';
import { formatDateToKorean } from '@/src/utils/dateUtils';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const MyPromptReliabilityList = () => {
	const { data, fetchNextPage, isFetchingNextPage } = useInfiniteGetMyPromptsByReliability({ page: 1, limit: 10 });
	const router = useRouter();

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
						<PromptItemWithInteraction
							key={prompt.promptId}
							personaType={prompt.personaType}
							category1Text={prompt.category1Text}
							userEmail={prompt.userEmail}
							userNickname={prompt.userNickname}
							updateDateTime={formatDateToKorean(prompt.updateDateTime)}
							title={prompt.title}
							likeCount={prompt.likeCount}
							viewCount={prompt.viewCount}
							percents={prompt.percents}
							layoutWidthClassName='w-[464px]'
							titleWidthClassName='w-[276px]'
							onClick={() => router.push(`/prompt/${prompt.promptId}`)}
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

export default MyPromptReliabilityList;
