import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import PromptListContainer from '@/src/components/modules/prompt/list/PromptListContainer';
import PromptMenuList from '@/src/components/modules/prompt/menu/PromptMenuList';
import PromptSelectChips from '@/src/components/modules/prompt/list/PromptSelectChips';
import SearchForm from '@/src/layouts/components/header/searchDrawer/SearchForm';

const PromptTemplate = () => {
	return (
		<div className='flex flex-col w-full justify-center items-center pb-[100px]'>
			<SearchForm twStyle='w-[976px] mt-10' />
			<PromptSelectChips className='mt-6' />
			<div className='mb-8' />
			<div className='flex gap-10 justify-center'>
				<AsyncComponentBoundary>
					<PromptMenuList />
				</AsyncComponentBoundary>
				<PromptListContainer />
			</div>
		</div>
	);
};

export default PromptTemplate;
