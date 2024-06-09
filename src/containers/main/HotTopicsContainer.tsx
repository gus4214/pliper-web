import HotTopics from '@/src/components/organisms/main/curations/hotTopic/HotTopics';
import { useGetCurationMain } from '@/src/fetchers/main';
import { searchInputAtom } from '@/src/stores/searchForm';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useState } from 'react';

const HotTopicsContainer = () => {
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [topic, setTopic] = useAtom(searchInputAtom);

	const { data } = useGetCurationMain({ dailyCategory: null, jobCategory: null });
	const router = useRouter();

	const handleSelect = (keyword: string) => {
		setSelectedId((prevSelectedId) => (prevSelectedId === keyword ? null : keyword));
		setTopic(keyword);
		router.push('/prompt');
	};

	return (
		<>
			<HotTopics keywords={data?.keywords || []} selectedId={selectedId} onSelect={handleSelect} />
		</>
	);
};

export default HotTopicsContainer;
