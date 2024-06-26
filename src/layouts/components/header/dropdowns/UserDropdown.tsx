import { useLoginModal } from '@/src/hooks/modal';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Avatar, Button, Divider, Dropdown } from 'react-daisyui';

interface UserDropdownProps {
	loggedIn?: boolean;
	handleLogout?: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ loggedIn, handleLogout }) => {
	const [open, close] = useLoginModal();
	const router = useRouter();

	return (
		<>
			{loggedIn ? (
				<Dropdown end role="option">
					<Button tag='label' tabIndex={0} color='ghost' className='avatar' shape='circle' size='sm'>
						<Avatar shape='circle' size={'md'}>
							<div className='w-6 h-6 bg-gradient-to-b from-blue-400 to-emerald-200 rounded-full'></div>
						</Avatar>
					</Button>
					<Dropdown.Menu className='w-[130px] rounded-lg z-10'>
						<Dropdown.Item className='p-3 justify-center' onClick={() => router.push('/mypage/profile')}>
							개인 스페이스
						</Dropdown.Item>
						<Dropdown.Item className='p-3 justify-center' onClick={() => router.push('/mypage/plip')}>
							마이 플립
						</Dropdown.Item>
						<Dropdown.Item className='p-3 justify-center' onClick={() => router.push('/prompt/register')}>
							프롬프트 작성
						</Dropdown.Item>
						<Divider className='m-0' />
						<Dropdown.Item className='p-3 justify-center' onClick={handleLogout}>
							로그아웃
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			) : (
				<Button tag='label' color='ghost' shape='circle' size='sm' onClick={open} role="option">
					<Avatar shape='circle' size={'md'}>
						<div className='w-6 h-6 bg-gradient-to-b from-neutral-400 to-neutral-100 rounded-full'></div>
					</Avatar>
				</Button>
			)}
		</>
	);
};

export default UserDropdown;
