import PromptListContainer from '@/src/components/modules/prompt/PromptListContainer';
import PromptMenuList from '@/src/components/modules/prompt/PromptMenuList';
import PromptSelectChips from '@/src/components/modules/prompt/PromptSelectChips';
import SearchForm from '@/src/layouts/components/header/searchDrawer/SearchForm';

const PromptTemplate = () => {
	return (
		<div className='flex flex-col w-full justify-center items-center pb-[100px]'>
			<SearchForm twStyle='w-[976px] mt-10' />
			<PromptSelectChips className='mt-6' />
			<div className='mb-8' />
			<div className='flex gap-10 justify-center'>
				<PromptMenuList />
				<PromptListContainer />
			</div>
		</div>
	);
};

export default PromptTemplate;
