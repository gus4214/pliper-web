import MyPageUserSummaryLoader from '@/src/components/organisms/mypage/MyPageUserSummaryLoader';
import PlipAndMyPrompt from '@/src/components/organisms/mypage/profile/profileSection/plipAndMyPrompt/PlipAndMyPrompt';
import UserInfoHeader from '@/src/components/organisms/mypage/profile/profileSection/UserInfoHeader';
import { useAuthContext } from '@/src/hooks/context';
import { useRouter } from 'next/router';
import { Button } from 'react-daisyui';

const ProfileSection = () => {
	const { user } = useAuthContext();
	const router = useRouter();

	return (
		<MyPageUserSummaryLoader>
			<div className='flex flex-col gap-8'>
				<UserInfoHeader
					user={user!}
					action={
						<Button
							className='rounded bg-white border border-neutral-200 h-[34px] min-h-[34px] text-black text-sm font-normal'
							onClick={() => {
								router.push('/mypage/edit');
							}}
						>
							프로필 관리
						</Button>
					}
				/>
				<PlipAndMyPrompt />
			</div>
		</MyPageUserSummaryLoader>
	);
};

export default ProfileSection;
