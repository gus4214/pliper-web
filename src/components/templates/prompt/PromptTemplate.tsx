import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import FloatButtonGroup from '@/src/components/molecules/floatButton/FloatButtonGroup';
import PromptListContainer from '@/src/components/organisms/prompt/list/PromptListContainer';
import PromptSelectChips from '@/src/components/organisms/prompt/list/PromptSelectChips';
import PromptMenuList from '@/src/components/organisms/prompt/menu/PromptMenuList';
import PromptMenuListContainer from '@/src/components/organisms/prompt/menu/PromptMenuListContainer';
import SearchForm from '@/src/layouts/components/header/appBar/searchDrawer/SearchForm';

const PromptTemplate = () => {
	return (
		<div className='flex flex-col w-full justify-center items-center pb-[100px] relative'>
			<FloatButtonGroup className='top-[256px] mr-[-646px]' />
			<SearchForm twStyle='w-[976px] mt-10' />
			<PromptSelectChips className='mt-6' />
			<div className='mb-8' />
			<div className='flex gap-10 justify-center'>
				<PromptMenuListContainer />
				<PromptListContainer />
			</div>
		</div>
	);
};

export default PromptTemplate;
