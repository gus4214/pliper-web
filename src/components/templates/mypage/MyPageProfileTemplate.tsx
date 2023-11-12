import FloatButtonGroup from '@/src/components/modules/@common/floatButton/FloatButtonGroup';
import MyPageUserSummaryLoader from '@/src/components/modules/mypage/MyPageUserSummaryLoader';
import InteractionSection from '@/src/components/modules/mypage/profile/interactionSection/InteractionSection';
import ProfileSection from '@/src/components/modules/mypage/profile/profileSection/ProfileSection';

const MyPageProfileTemplate = () => {
	return (
		<MyPageUserSummaryLoader>
			<div className='w-full h-full bg-neutral-50 flex justify-center pt-6 pb-[38px] relative'>
				<FloatButtonGroup className='top-[246px] mr-[-600px]' />
				<div className='w-[1024px] flex flex-col px-6 pt-8 pb-10 bg-white items-center gap-6 '>
					{/* 유저 정보 */}
					<ProfileSection />
					{/* 유저 히스토리, 좋아요, 정확도 탭 */}
					<InteractionSection />
				</div>
			</div>
		</MyPageUserSummaryLoader>
	);
};

export default MyPageProfileTemplate;
