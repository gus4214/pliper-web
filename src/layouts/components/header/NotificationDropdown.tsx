import NotificationIcon from '@/src/components/atoms/icons/NotificationIcon';
import React, { useState } from 'react';
import { Dropdown, Button, Tabs } from 'react-daisyui';

const NotificationDropdown: React.FC = () => {
	const [tabValue, setTabValue] = useState(0);

	return (
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
	);
};

export default NotificationDropdown;
