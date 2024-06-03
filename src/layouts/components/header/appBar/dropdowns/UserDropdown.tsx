import { useLoginModal } from '@/src/hooks/modal';
import { appUserNavigation } from '@/src/navigation';
import { useRouter } from 'next/router';
import React from 'react';
import { Avatar, Button, Divider, Dropdown } from 'react-daisyui';

interface UserDropdownProps {
	loggedIn?: boolean;
	onLogout?: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ loggedIn, onLogout }) => {
	const [open] = useLoginModal();
	const router = useRouter();

	const navigationItems = appUserNavigation();

	const handleRoute = (path: string) => {
		router.push(path);
	};

	return (
		<>
			{loggedIn ? (
				<Dropdown end role='option'>
					<Button tag='label' tabIndex={0} color='ghost' className='avatar' shape='circle' size='sm'>
						<Avatar shape='circle' size={'md'}>
							<div className='w-6 h-6 rounded-full bg-gradient-to-b from-blue-400 to-emerald-200'></div>
						</Avatar>
					</Button>
					<Dropdown.Menu className='w-[130px] rounded-lg z-10'>
						{navigationItems.map((v, i) => (
							<Dropdown.Item key={i} className='justify-center p-3' onClick={() => handleRoute(v.path)}>
								{v.title}
							</Dropdown.Item>
						))}
						<Divider className='m-0' />
						<Dropdown.Item className='justify-center p-3' onClick={onLogout}>
							로그아웃
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			) : (
				<Button tag='label' color='ghost' shape='circle' size='sm' onClick={open} role='option'>
					<Avatar shape='circle' size={'md'}>
						<div className='w-6 h-6 rounded-full bg-gradient-to-b from-neutral-400 to-neutral-100'></div>
					</Avatar>
				</Button>
			)}
		</>
	);
};

export default UserDropdown;
