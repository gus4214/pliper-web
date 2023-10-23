import PlipAndMyPrompt from '@/src/components/modules/mypage/profile/profileSection/plipAndMyPrompt/PlipAndMyPrompt';
import UserInfoHeader from '@/src/components/modules/mypage/profile/profileSection/UserInfoHeader';
import { useAuthContext } from '@/src/hooks/context';
import { Button } from 'react-daisyui';

const ProfileSection = () => {
	const { user } = useAuthContext();

	return (
		<div className='flex flex-col gap-8'>
			<UserInfoHeader
				nickname={user?.nickname!}
				taste={user?.taste!}
				oauthType={user?.oauthType!}
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
