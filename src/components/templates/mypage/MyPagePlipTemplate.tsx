import ListTitleHeaderBox from '@/src/components/atoms/box/mypage/ListTitleHeaderBox';
import GoBackToMyPageButton from '@/src/components/atoms/buttons/GoBackToMyPageButton';
import MyPlipListContainer from '@/src/components/modules/mypage/plip/MyPlipListContainer';
import PromptMenuListContainer from '@/src/components/modules/prompt/menu/PromptMenuListContainer';
import SearchForm from '@/src/layouts/components/header/searchDrawer/SearchForm';

const MyPagePlipTemplate = () => {
	return (
		<div className='w-full h-full flex flex-col items-center'>
			<ListTitleHeaderBox title={'플립'} />
			<div className='w-[1160px] flex flex-col pt-6 pb-[85px] gap-8'>
				<GoBackToMyPageButton />
				<div className='flex  w-full gap-10'>
					{/* 메뉴 */}
					<PromptMenuListContainer />
					{/* 리스트 */}
					<div className='flex flex-col gap-4'>
						<SearchForm twStyle='w-[944px]' />
						<MyPlipListContainer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyPagePlipTemplate;
