import ProfileSection from '@/src/components/modules/mypage/profile/profileSection/ProfileSection';
import { NextPage } from 'next';

const MyPage: NextPage = () => {
	return (
		<div className='w-full h-full bg-neutral-50 flex justify-center pt-6'>
			<div className='w-[1024px] flex flex-col px-6 pt-8 pb-10 bg-white items-center gap-6 '>
				{/* 유저 정보 */}
				<ProfileSection />
				{/* 유저 히스토리, 좋아요, 정확도 탭 */}
			</div>
		</div>
	);
};

export default MyPage;
