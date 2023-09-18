import SelectChip from '@/src/components/atoms/chip/SelectChip';
import { PromptSortType, promptSortCategory } from '@/src/configs/prompt';
import { promptSortAtom } from '@/src/stores/searchForm';
import { useAtom } from 'jotai';

interface PromptSelectChipsProps {
	className?: string;
}

const PromptSelectChips: React.FC<PromptSelectChipsProps> = ({ className }) => {
	const [selectedSortType, setSelectedSortType] = useAtom(promptSortAtom);

	const handleChipClick = (sortType: PromptSortType) => {
		setSelectedSortType(sortType);
	};

	return (
		<div className={`${className} gap-2 flex`}>
			{Object.entries(promptSortCategory).map(([key, label]) => (
				<SelectChip
					key={key}
					label={label}
					color='secondary'
					selected={selectedSortType === key}
					onClick={() => handleChipClick(key as PromptSortType)}
				/>
			))}
		</div>
	);
};

export default PromptSelectChips;
