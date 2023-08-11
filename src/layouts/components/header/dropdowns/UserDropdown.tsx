import { useLoginModal } from '@/src/hooks/modal';
import React from 'react';
import { Dropdown, Button, Divider, Avatar } from 'react-daisyui';

interface UserDropdownProps {
	loggedIn?: boolean;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ loggedIn }) => {
	const [open, close] = useLoginModal();

	return (
		<>
			{loggedIn ? (
				<Dropdown end>
					<Button tag='label' tabIndex={0} color='ghost' className='avatar' shape='circle' size='sm'>
						<Avatar shape='circle' size={'md'}>
							<div className='w-6 h-6 bg-gradient-to-b from-blue-400 to-emerald-200 rounded-full'></div>
						</Avatar>
					</Button>
					<Dropdown.Menu className='w-[130px] rounded-lg z-10'>
						<Dropdown.Item className='p-3 justify-center'>개인 스페이스</Dropdown.Item>
						<Dropdown.Item className='p-3 justify-center'> 플립 만들기</Dropdown.Item>
						<Dropdown.Item className='p-3 justify-center'>My PLIP</Dropdown.Item>
						<Divider className='m-0' />
						<Dropdown.Item className='p-3 justify-center'>로그아웃</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			) : (
				<Button color='ghost' shape='circle' size='sm' onClick={open}>
					<Avatar shape='circle' size={'md'}>
						<div className='w-6 h-6 bg-gradient-to-b from-neutral-400 to-neutral-100 rounded-full'></div>
					</Avatar>
				</Button>
			)}
		</>
	);
};

export default UserDropdown;
