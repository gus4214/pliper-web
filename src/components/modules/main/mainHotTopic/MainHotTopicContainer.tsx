import SelectChip from '@/src/components/atoms/chip/SelectChip';
import { Keyword } from '@/src/fetchers/main';
import { searchInputAtom } from '@/src/stores/searchForm';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface MainHotTopicContainerProps {
	keywords: Keyword[];
}

const MainHotTopicContainer: React.FC<MainHotTopicContainerProps> = ({ keywords }) => {
	const router = useRouter();

	const [selectedId, setSelectedId] = useState<string | null>(null);

	const [topic, setTopic] = useAtom(searchInputAtom);

	return (
		<section className='w-[1200px] flex flex-col justify-center items-center gap-8 pt-[197px] pb-[84px]'>
			<h1 className='text-center text-black text-2xl font-bold leading-normal'>이번 한 주, 가장 인기있는 검색어</h1>
			<div className='flex justify-center items-center gap-x-2 gap-y-3 w-[722px] flex-wrap'>
				{keywords.map((value) => (
					<SelectChip
						key={value.keyword}
						label={value.keyword}
						selected={value.keyword === selectedId}
						rounded
						onClick={() => {
							setSelectedId((prevSelectedId) => (prevSelectedId === value.keyword ? null : value.keyword));
							setTopic(value.keyword);
							router.push('/prompt');
						}}
					/>
				))}
			</div>
		</section>
	);
};

export default MainHotTopicContainer;
