import Loading from '@/src/components/atoms/loading/Loading';
import PromptEmptyText from '@/src/components/atoms/text/PromptEmptyText';
import SearchTitleEmptyText from '@/src/components/atoms/text/SearchTitleEmptyText';
import PromptItemWithActions from '@/src/components/modules/@common/listItems/PromptItemWithActions';
import { deleteMyPromptApi, updateMyPromptApi, useInfiniteGetMyCreatedPrompts } from '@/src/fetchers/prompt/my-prompt';
import { useConfirmModal } from '@/src/hooks/modal';
import { usePromptInteractions } from '@/src/hooks/promptInteractions';
import { searchFilterAtom } from '@/src/stores/searchForm';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { timeAgo } from '@/src/utils/dateUtils';

const MyCreatedPromptList = () => {
	const router = useRouter();
	const [open, close] = useConfirmModal();

	const { title, category2Texts, llmModel, personaTypes } = useAtomValue(searchFilterAtom);
	const { data, fetchNextPage, isFetchingNextPage, refetch } = useInfiniteGetMyCreatedPrompts({
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

	const handlePromptItemClick = (id: number, show: boolean) => {
		if (show) {
			router.push(`/prompt/${id}`);
		} else {
			handlePromptShowToggle(id, show);
		}
	};

	const handleDeletePrompt = async (id: number) => {
		open({
			title: '프롬프트를 삭제 하시겠어요?',
			description: '삭제된 프롬프트는 복구가 불가능합니다.',
			onConfirm: async () => {
				try {
					const result = await deleteMyPromptApi(id);
					refetch();
					close();
				} catch (error) {
					console.error('Error in DeletePromptApi:', error);
				}
			},
		});
	};

	const handlePromptShowToggle = async (id: number, show: boolean) => {
		if (show) {
			open({
				title: '프롬프트를 게시를 취소하시겠어요?',
				description: '공개된 프롬프트 템플릿의 게시를 취소합니다.',
				onConfirm: async () => {
					try {
						const result = await updateMyPromptApi({ show: false }, id);
						refetch();
						close();
					} catch (error) {
						console.error('Error in DeletePromptApi:', error);
					}
				},
			});
		} else {
			open({
				title: '프롬프트를 게시하시겠어요?',
				description: '게시하게 되면 프롬프트 템플릿이 사용자들에게 노출 됩니다.',
				onConfirm: async () => {
					try {
						const result = await updateMyPromptApi({ show: true }, id);
						refetch();
						close();
					} catch (error) {
						console.error('Error in DeletePromptApi:', error);
					}
				},
			});
		}
	};

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
							userNickname={prompt.userNickname}
							updateDateTime={timeAgo(prompt.updateDateTime)}
							title={prompt.title}
							likeCount={prompt.likeCount}
							viewCount={prompt.viewCount}
							percents={prompt.percents}
							interaction={getInteractionByPromptId(prompt.promptId)}
							onClick={() => handlePromptItemClick(prompt.promptId, prompt.show)}
							onEditClick={() => router.push(`/mypage/created-prompt/${prompt.promptId}`)}
							onDeleteClick={() => handleDeletePrompt(prompt.promptId)}
							onToggleClick={() => handlePromptShowToggle(prompt.promptId, prompt.show)}
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
