import Loading from '@/src/components/atoms/loading/Loading';
import PromptItem from '@/src/components/modules/prompt/list/PromptItem';
import { useInfiniteGetMyPromptsByView } from '@/src/fetchers/prompt/my-prompt';
import { formatDateToKorean } from '@/src/utils/dateUtils';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const MyPromptHistoryList = () => {
	const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteGetMyPromptsByView({ page: 1, limit: 8 });

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
					{!page?.prompts && <div>노데이터</div>}
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
						/>
					))}
				</React.Fragment>
			))}
			{isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
		</>
	);
};

export default MyPromptHistoryList;
