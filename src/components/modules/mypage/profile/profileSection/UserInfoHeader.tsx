import { Avatar, Button } from 'react-daisyui';

interface UserInfoHeaderProps {
	nickname: string;
	taste: string;
	oauthEmail: string;
	action: React.ReactNode;
}

const UserInfoHeader: React.FC<UserInfoHeaderProps> = ({ nickname, taste, oauthEmail, action }) => {
	return (
		<div className='w-[976px] h-[180px] justify-between items-start inline-flex'>
			<div className='flex flex-col gap-4'>
				<Avatar shape='circle'>
					<div className='w-[110px] h-[110px] bg-gradient-to-b from-blue-400 to-emerald-200 rounded-full' />
				</Avatar>
				<div className='flex flex-col justify-end items-start gap-2.5'>
					<div className='flex items-center gap-2.5'>
						<span className='text-black text-[22px] font-bold'>{nickname}</span>
						<div className='h-[30px] p-2 bg-gray-400 rounded flex justify-center items-center'>
							<span className='text-center text-white text-sm font-normal'>{taste}</span>
						</div>
					</div>
					<span className='text-center text-neutral-400 text-sm font-normal'>{oauthEmail}</span>
				</div>
			</div>
			<div className='grow shrink basis-0 flex-col justify-start items-end flex'>
				{/* <Button variant='outline' className='rounded border border-neutral-200 h-[34px] min-h-[34px]'>
					<span className='text-center text-black text-sm font-normal'>프로필 관리</span>
				</Button> */}
				{action}
			</div>
		</div>
	);
};

export default UserInfoHeader;
