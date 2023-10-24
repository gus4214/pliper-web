import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import MyPageUserSummaryLoader from '@/src/components/modules/mypage/MyPageUserSummaryLoader';
import InteractionSection from '@/src/components/modules/mypage/profile/interactionSection/InteractionSection';
import ProfileSection from '@/src/components/modules/mypage/profile/profileSection/ProfileSection';
import React from 'react';

const MyPageProfileTemplate = () => {
	return (
		<div className='w-full h-full bg-neutral-50 flex justify-center pt-6 pb-[38px]'>
			<div className='w-[1024px] flex flex-col px-6 pt-8 pb-10 bg-white items-center gap-6 '>
				{/* 유저 정보 */}
				<ProfileSection />
				{/* 유저 히스토리, 좋아요, 정확도 탭 */}
				<AsyncComponentBoundary>
					<InteractionSection />
				</AsyncComponentBoundary>
			</div>
		</div>
	);
};

export default MyPageProfileTemplate;
