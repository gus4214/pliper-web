import NotificationIcon from '@/src/components/atoms/icons/NotificationIcon';
import SearchIcon from '@/src/components/atoms/icons/SearchIcon';
import { useState } from 'react';
import { Button, Divider, Dropdown, Navbar, Tabs } from 'react-daisyui';

const MainHeader = () => {
	const [tabValue, setTabValue] = useState(0);

	return (
		<Navbar className='px-10'>
			<div className='flex-1'>
				<div className='w-[82px] h-[31px] px-4 py-2 justify-start items-start gap-2.5 inline-flex'>
					<span className='text-black text-[15px] font-medium leading-[15px]'>메뉴명 1</span>
				</div>
				<div className='w-[84px] h-[31px] px-4 py-2 justify-start items-start gap-2.5 inline-flex'>
					<div className='text-black text-[15px] font-medium leading-[15px]'>메뉴명 2</div>
				</div>
			</div>
			<div className='flex-none gap-4'>
				<Button size='sm' color='ghost' shape='circle'>
					<SearchIcon />
				</Button>
				<Dropdown vertical='bottom' end>
					<Button size='sm' color='ghost' shape='circle'>
						<NotificationIcon active />
					</Button>
					<Dropdown.Menu className='w-[380px] p-0 pt-6 bg-white rounded-lg'>
						<div className='w-[380px] h-9 px-6 py-2 justify-start items-center flex'>
							<span className='text-black text-xl font-bold leading-tight'>알림 내역</span>
						</div>
						<Tabs value={tabValue} onChange={setTabValue} className='px-2'>
							<Tabs.Tab value={0}>전체</Tabs.Tab>
							<Tabs.Tab value={1}>My PLIP</Tabs.Tab>
							<Tabs.Tab value={2}>공지 및 이벤트</Tabs.Tab>
						</Tabs>
						<div className='p-4 bg-gray-50 border-t border-neutral-200 flex-col justify-center items-start gap-4 flex'>
							{tabValue === 0 && <div>전체</div>}
							{tabValue === 1 && <div>MY PLIP</div>}
							{tabValue === 2 && <div>공지 및 이벤트</div>}
						</div>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown end>
					<Button tag='label' tabIndex={0} color='ghost' className='avatar' shape='circle' size='sm'>
						<div className='w-6 h-6 bg-gradient-to-b from-blue-400 to-emerald-200 rounded-full'></div>
					</Button>
					<Dropdown.Menu className='w-[130px] rounded-lg'>
						<Dropdown.Item className='p-3 justify-center'>개인 스페이스</Dropdown.Item>
						<Dropdown.Item className='p-3 justify-center'> 플립 만들기</Dropdown.Item>
						<Dropdown.Item className='p-3 justify-center'>My PLIP</Dropdown.Item>
						<Divider className='m-0' />
						<Dropdown.Item className='p-3 justify-center'>로그아웃</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</Navbar>
	);
};

export default MainHeader;
