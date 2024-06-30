import ListTitleHeaderBox from '@/src/components/atoms/box/mypage/ListTitleHeaderBox';
import GoBackToMyPageButton from '@/src/components/atoms/buttons/GoBackToMyPageButton';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import FloatButtonGroup from '@/src/components/molecules/floatButton/FloatButtonGroup';
import MyPlipListContainer from '@/src/components/organisms/mypage/plip/MyPlipListContainer';
import PromptMenuContainer from '@/src/containers/@common/promptMenu/PromptMenuContainer';
import PromptMenuSkeleton from '@/src/containers/@common/promptMenu/PromptMenuSkeleton';
import SearchForm from '@/src/layouts/components/header/appBar/searchDrawer/SearchForm';
import { searchInputAtom } from '@/src/stores/searchForm';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

const MyPagePlipTemplate = () => {
	const setSearchInputValue = useSetAtom(searchInputAtom);

	useEffect(() => {
		return () => setSearchInputValue('');
	}, []);

	return (
		<div className='relative flex flex-col items-center w-full h-full'>
			<FloatButtonGroup className='top-[186px] mr-[-646px]' />
			<ListTitleHeaderBox title={'마이 플립'} />
			<div className='w-[1160px] flex flex-col pt-6 pb-[85px] gap-8'>
				<GoBackToMyPageButton />
				<div className='flex w-full gap-10'>
					{/* 메뉴 */}
					<AsyncComponentBoundary pendingFallback={<PromptMenuSkeleton />}>
						<PromptMenuContainer />
					</AsyncComponentBoundary>
					{/* 리스트 */}
					<div className='flex flex-col gap-4'>
						<SearchForm twStyle='w-[944px]' placeholder={'내가 플립한 프롬프트 명을 입력해주세요!'} />
						<MyPlipListContainer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyPagePlipTemplate;
