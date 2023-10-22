import PlipAndMyPrompt from '@/src/components/modules/mypage/profile/profileSection/plipAndMyPrompt/PlipAndMyPrompt';
import UserInfoHeader from '@/src/components/modules/mypage/profile/profileSection/UserInfoHeader';
import { Button } from 'react-daisyui';

const ProfileSection = () => {
	return (
		<div className='flex flex-col gap-8'>
			<UserInfoHeader
				nickname='내 이름은 홍길동'
				taste='직장인'
				oauthEmail='카카오 로그인'
				action={
					<Button variant='outline' className='rounded border border-neutral-200 h-[34px] min-h-[34px]'>
						<span className='text-center text-black text-sm font-normal'>프로필 관리</span>
					</Button>
				}
			/>
			<PlipAndMyPrompt />
		</div>
	);
};

export default ProfileSection;
