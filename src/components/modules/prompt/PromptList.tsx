import PromptItem from '@/src/components/modules/prompt/PromptItem';
import { useGetPrompts, useInfiniteGetPrompts } from '@/src/fetchers/prompt';
import { searchFilterAtom, searchInputAtom } from '@/src/stores/searchForm';
import { useAtomValue } from 'jotai';
import React, { useState } from 'react';

const PromptList = () => {
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(8);

	const { title } = useAtomValue(searchFilterAtom);

	// const { data, fetchNextPage, isFetchingNextPage, refetch } = useInfiniteGetPrompts({ page, limit });
	const { data } = useGetPrompts({ page, limit, title });

	return (
		<>
			{data!.prompts.length <= 0 ? (
				<div className='w-[944px] flex justify-center py-[10px] items-center'>
					<span className='text-neutral-400 text-lg font-normal'>{`"${title}"에 대한 검색결과가 없습니다.`}</span>
				</div>
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
