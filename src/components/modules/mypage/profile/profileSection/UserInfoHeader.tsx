import { Button } from 'react-daisyui';
import { AuthenticationUser } from '@/src/stores/auth';
import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from '@/src/utils/avatar';

interface UserInfoHeaderProps {
	user?: AuthenticationUser;
	action: React.ReactNode;
}

const UserInfoHeader: React.FC<UserInfoHeaderProps> = ({ user, action }) => {
	return (
		<div className='w-[976px] h-[180px] justify-between items-start inline-flex'>
			<div className='flex flex-col gap-4'>
				{/*<div className='w-[110px] h-[110px] bg-gradient-to-b from-blue-400 to-emerald-200 rounded-full' />*/}
				<Avatar style={{ width: '110px', height: '110px' }} avatarStyle='Circle' {...generateRandomAvatarOptions(user?.nickname || '')} />
				<div className='flex flex-col justify-end items-start gap-2.5'>
					<div className='flex items-center gap-2.5'>
						<span className='text-black text-[22px] font-bold'>{user?.nickname}</span>
						<div className='h-[30px] p-2 bg-gray-400 rounded flex justify-center items-center'>
							<span className='text-center text-white tex t-sm font-normal'>{user?.taste}</span>
						</div>
					</div>
					<span className={`text-center text-neutral-400 text-sm`}>{user?.oauthType == 'NAVER' ? '네이버 로그인' : '구글 로그인'}</span>
				</div>
			</div>
			<div className='grow shrink basis-0 flex-col justify-start items-end flex'>{action}</div>
		</div>
	);
};

export default UserInfoHeader;
