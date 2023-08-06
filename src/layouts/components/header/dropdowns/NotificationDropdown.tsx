import NotificationIcon from '@/src/components/atoms/icons/NotificationIcon';
import NotificationItem from '@/src/layouts/components/header/dropdowns/NotificationItem';
import { ChevronRight } from 'heroicons-react';
import React, { useState } from 'react';
import { Dropdown, Button, Tabs } from 'react-daisyui';

const NotificationDropdown: React.FC = () => {
	const [tabValue, setTabValue] = useState(0);

	return (
		<Dropdown vertical='bottom' end>
			<Button size='sm' color='ghost' shape='circle'>
				<NotificationIcon active />
			</Button>
			<Dropdown.Menu className='w-[400px] p-0 pt-6 bg-white rounded-lg z-10'>
				<div className='w-[380px] h-9 px-6 py-2 justify-start items-center flex'>
					<span className='text-black text-xl font-bold leading-tight'>알림 내역</span>
				</div>
				<Tabs value={tabValue} onChange={setTabValue} className='px-2'>
					<Tabs.Tab value={0}>전체</Tabs.Tab>
					<Tabs.Tab value={1}>My PLIP</Tabs.Tab>
					<Tabs.Tab value={2}>공지 및 이벤트</Tabs.Tab>
				</Tabs>
				<div className='p-4 bg-gray-50 border-t border-neutral-200 flex-col justify-center items-start gap-4 flex'>
					{tabValue === 0 && (
						<div className='flex flex-col gap-4 justify-center'>
							<NotificationItem category='Prompt' date='7월 18일 오후 01:44' text='프롬프트 템플릿을 마이플립으로 저장하였습니다.' />
							<NotificationItem
								category='Notice'
								date='7월 18일 오후 01:44'
								text='현재 폭우로 인해 서버 관련 장애가 일어나고 있습니다.'
							/>
							<NotificationItem
								category='이벤트'
								date='7월 20일 오전 07:22'
								text='플립 10개 등록시 추가 되는 혜택을 확인 해보세요!'
								confirmed
							/>
							<Button variant='outline' color='ghost' endIcon={<ChevronRight className='w-6 h-6 font-bold text-teal-400' />}>
								<span className='text-sm font-normal'>알림 내역 더보기</span>
							</Button>
						</div>
					)}
					{tabValue === 1 && <div>MY PLIP</div>}
					{tabValue === 2 && <div>공지 및 이벤트</div>}
				</div>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default NotificationDropdown;
