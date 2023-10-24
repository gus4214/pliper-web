import MyPageUserSummaryLoader from '@/src/components/modules/mypage/MyPageUserSummaryLoader';
import PlipAndMyPrompt from '@/src/components/modules/mypage/profile/profileSection/plipAndMyPrompt/PlipAndMyPrompt';
import UserInfoHeader from '@/src/components/modules/mypage/profile/profileSection/UserInfoHeader';
import { useAuthContext } from '@/src/hooks/context';
import { Button } from 'react-daisyui';

const ProfileSection = () => {
	const { user } = useAuthContext();

	return (
		<MyPageUserSummaryLoader>
			<div className='flex flex-col gap-8'>
				<UserInfoHeader
					nickname={user?.nickname as string}
					taste={user?.taste as string}
					oauthType={user?.oauthType as string}
					action={
						<Button variant='outline' className='rounded border border-neutral-200 h-[34px] min-h-[34px]'>
							<span className='text-center text-black text-sm font-normal'>프로필 관리</span>
						</Button>
					}
				/>
				<PlipAndMyPrompt />
			</div>
		</MyPageUserSummaryLoader>
	);
};

export default ProfileSection;
