import PromptItem from '@/src/components/modules/prompt/list/PromptItem';
import { useGetPrompts } from '@/src/fetchers/prompt';
import { searchFilterAtom } from '@/src/stores/searchForm';
import { formatDateToKorean } from '@/src/utils/dateUtils';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/router';
import { useState } from 'react';

const PromptList = () => {
	const router = useRouter();
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(8);

	const { title, category2Texts, promptSort, lmModel, personaTypes } = useAtomValue(searchFilterAtom);

	const { data } = useGetPrompts({ page, limit, title, category2Texts, llmModel: lmModel, promptSort, personaTypes });

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
				<div className='flex flex-col gap-4'>
					{data?.prompts?.map((prompt) => {
						return (
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
							/>
						);
					})}
				</div>
			)}
		</>
	);
};

export default PromptList;
