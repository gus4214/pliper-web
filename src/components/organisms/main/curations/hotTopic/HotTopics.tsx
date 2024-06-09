import SelectChip from '@/src/components/atoms/chip/SelectChip';
import { Keyword } from '@/src/fetchers/main';
import { FC } from 'react';

interface HotTopicsProps {
	keywords: Keyword[];
	selectedId: string | null;
	onSelect: (keyword: string) => void;
}

const HotTopics: FC<HotTopicsProps> = ({ keywords, selectedId, onSelect }) => {
	return (
		<div className='flex justify-center items-center gap-x-2 gap-y-3 max-w-[722px] flex-wrap'>
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
	);
};

export default HotTopics;
