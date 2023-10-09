import PromptItem from '@/src/components/modules/prompt/list/PromptItem';
import { useGetPrompts, useInfiniteGetPrompts } from '@/src/fetchers/prompt';
import { searchFilterAtom, searchInputAtom } from '@/src/stores/searchForm';
import { useAtomValue } from 'jotai';
import React, { useState } from 'react';

const PromptList = () => {
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(8);

	const { title, category2Texts, promptSort, lmModel } = useAtomValue(searchFilterAtom);

	const { data } = useGetPrompts({ page, limit, title, category2Texts, promptSort });

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
					<PromptItem />
					<PromptItem />
				</div>
			)}
		</>
	);
};

export default PromptList;
