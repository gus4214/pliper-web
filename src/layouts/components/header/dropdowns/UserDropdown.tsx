import React from 'react';
import { Dropdown, Button, Divider, Avatar } from 'react-daisyui';

interface UserDropdownProps {
	onClick: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ onClick }) => {
	return (
		<Dropdown end>
			<Button tag='label' tabIndex={0} color='ghost' className='avatar' shape='circle' size='sm' onClick={onClick}>
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
	);
};

export default UserDropdown;
