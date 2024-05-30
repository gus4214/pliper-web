import SelectChip from '@/src/components/atoms/chip/SelectChip';
import MainHotTopics from '@/src/components/organisms/main/mainBookMarksAndHotTopics/mainHotTopics/MainHotTopics';
import { Keyword } from '@/src/fetchers/main';
import { searchInputAtom } from '@/src/stores/searchForm';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface MainHotTopicsContainerProps {
	keywords: Keyword[];
}

const MainHotTopicsContainer: React.FC<MainHotTopicsContainerProps> = ({ keywords }) => {
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [topic, setTopic] = useAtom(searchInputAtom);

	const router = useRouter();
	const handleSelect = (keyword: string) => {
		setSelectedId((prevSelectedId) => (prevSelectedId === keyword ? null : keyword));
		setTopic(keyword);
		router.push('/prompt');
	};

	return (
		<>
			<MainHotTopics keywords={keywords} selectedId={selectedId} onSelect={handleSelect} />
		</>
	);
};

export default MainHotTopicsContainer;
