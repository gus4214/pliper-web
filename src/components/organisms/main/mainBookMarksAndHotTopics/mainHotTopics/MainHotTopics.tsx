import SelectChip from '@/src/components/atoms/chip/SelectChip';
import { Keyword } from '@/src/fetchers/main';
import { FC, ReactNode } from 'react';

interface MainHotTopicsProps {
	keywords: Keyword[];
	selectedId: string | null;
	onSelect: (keyword: string) => void;
}

const MainHotTopics: FC<MainHotTopicsProps> = ({ keywords, selectedId, onSelect }) => {
	return (
		<>
			<section className='w-[1200px] flex flex-col justify-center items-center gap-8 pt-[197px] pb-[84px]'>
				<h1 className='text-2xl font-bold leading-normal text-center text-black'>이번 한 주, 가장 인기있는 검색어</h1>
				<div className='flex justify-center items-center gap-x-2 gap-y-3 w-[722px] flex-wrap'>
					{keywords.map((value) => (
						<SelectChip
							key={value.keyword}
							label={value.keyword}
							selected={value.keyword === selectedId}
							rounded
							onClick={() => onSelect(value.keyword)}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default MainHotTopics;
