import ListTitleHeaderBox from '@/src/components/atoms/box/mypage/ListTitleHeaderBox';
import GoBackToMyPageButton from '@/src/components/atoms/buttons/GoBackToMyPageButton';
import FloatButtonGroup from '@/src/components/modules/@common/floatButton/FloatButtonGroup';
import MyCreatedPromptListContainer from '@/src/components/modules/mypage/created-prompt/MyCreatedPromptListContainer';
import PromptMenuListContainer from '@/src/components/modules/prompt/menu/PromptMenuListContainer';
import SearchForm from '@/src/layouts/components/header/searchDrawer/SearchForm';

const MyPageCreatedPromptTemplate = () => {
	return (
		<div className='w-full h-full flex flex-col items-center relative'>
			<FloatButtonGroup className='top-[186px] mr-[-646px]' />
			<ListTitleHeaderBox title={'내가 만든 프롬프트'} />
			<div className='w-[1160px] flex flex-col pt-6 pb-[85px] gap-8'>
				<GoBackToMyPageButton />
				<div className='flex  w-full gap-10'>
					{/* 메뉴 */}
					<PromptMenuListContainer />
					{/* 리스트 */}
					<div className='flex flex-col gap-4'>
						<SearchForm twStyle='w-[944px]' placeholder={'내가 생성한 프롬프트 명을 입력해주세요!'} />
						<MyCreatedPromptListContainer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyPageCreatedPromptTemplate;
