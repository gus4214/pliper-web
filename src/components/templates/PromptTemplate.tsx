import SelectChip from '@/src/components/atoms/chip/SelectChip';
import PlipIcon from '@/src/components/atoms/icons/PlipIcon';
import PlipNoneIcon from '@/src/components/atoms/icons/PlipNoneIcon';
import PromptItem from '@/src/components/modules/prompt/PromptItem';
import PromptList from '@/src/components/modules/prompt/PromptList';
import PromptListContainer from '@/src/components/modules/prompt/PromptListContainer';
import PromptMenuList from '@/src/components/modules/prompt/PromptMenuList';
import { PromptSortType, promptSortCategory } from '@/src/configs/prompt';
import { useGetPromptCategory } from '@/src/fetchers/prompt';
import SearchForm from '@/src/layouts/components/header/searchDrawer/SearchForm';
import { useState } from 'react';

const PromptTemplate = () => {
	const { data } = useGetPromptCategory();

	const [selectedSortType, setSelectedSortType] = useState<PromptSortType>('ACCURACY');
	console.log('🚀 ~ file: PromptTemplate.tsx:17 ~ PromptTemplate ~ selectedSortType:', selectedSortType);

	const handleChipClick = (sortType: PromptSortType) => {
		setSelectedSortType(sortType);
	};
	return (
		<div className='flex flex-col w-full justify-center items-center'>
			<div className='mt-10' />
			<SearchForm twStyle='w-[976px]' />
			<div className='gap-2 flex mt-6'>
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
			<div className='mb-8' />
			<div className='flex gap-10 justify-center'>
				<PromptMenuList />
				<PromptListContainer />
			</div>
		</div>
	);
};

export default PromptTemplate;
