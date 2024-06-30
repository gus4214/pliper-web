import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import FloatButtonGroup from '@/src/components/molecules/floatButton/FloatButtonGroup';
import PromptListContainer from '@/src/components/organisms/prompt/list/PromptListContainer';
import PromptSelectChips from '@/src/components/organisms/prompt/list/PromptSelectChips';
import PromptMenuContainer from '@/src/containers/@common/promptMenu/PromptMenuContainer';
import PromptMenuSkeleton from '@/src/containers/@common/promptMenu/PromptMenuSkeleton';
import SearchForm from '@/src/layouts/components/header/appBar/searchDrawer/SearchForm';

const PromptTemplate = () => {
	return (
		<div className='flex flex-col w-full justify-center items-center pb-[100px] relative'>
			<FloatButtonGroup className='top-[256px] mr-[-646px]' />
			<SearchForm twStyle='w-[976px] mt-10' />
			<PromptSelectChips className='mt-6' />
			<div className='mb-8' />
			<div className='flex justify-center gap-10'>
				<AsyncComponentBoundary pendingFallback={<PromptMenuSkeleton />}>
					<PromptMenuContainer />
				</AsyncComponentBoundary>
				<PromptListContainer />
			</div>
		</div>
	);
};

export default PromptTemplate;
