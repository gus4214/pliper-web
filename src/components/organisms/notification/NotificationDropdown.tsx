import NotificationIcon from '@/src/components/atoms/icons/NotificationIcon';
import { FC, useEffect, useState } from 'react';
import { Button, Dropdown, Tabs } from 'react-daisyui';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import { useAuthContext } from '@/src/hooks/context';
import { GetNotificationsRequest, NotificationGroup } from '@/src/fetchers/notification';
import NotificationSkeleton from '@/src/components/organisms/notification/NotificationSkeleton';
import dynamic from 'next/dynamic';
import { useNotification } from '@/src/hooks/notification';
import { useRouter } from 'next/router';

const NotificationTabList = dynamic(() => import('@/src/components/organisms/notification/NotificationTabList'), {
	ssr: false,
});

interface TabsProps {
	tabValue: number;
	handleChangeTab: (tab: number) => void;
}

const AuthTabs: FC<TabsProps> = ({ tabValue, handleChangeTab }) => {
	return (
		<Tabs value={tabValue} onChange={handleChangeTab} className='px-2'>
			<Tabs.Tab value={0}>전체</Tabs.Tab>
			<Tabs.Tab value={1}>마이 플립</Tabs.Tab>
			<Tabs.Tab value={2}>공지 및 이벤트</Tabs.Tab>
		</Tabs>
	);
};

const NoAuthTabs: FC<TabsProps> = ({ tabValue, handleChangeTab }) => {
	return (
		<Tabs value={tabValue} onChange={handleChangeTab} className='px-2'>
			<Tabs.Tab value={0}>전체</Tabs.Tab>
			<Tabs.Tab value={2}>공지 및 이벤트</Tabs.Tab>
		</Tabs>
	);
};

const categoryOfTab: Record<string, NotificationGroup | NotificationGroup[]> = {
	0: ['USER', 'SYSTEM'],
	1: 'USER',
	2: 'SYSTEM',
};

const itemMoreCount = 4;

const NotificationDropdown: FC = () => {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [tabValue, setTabValue] = useState(0);
	const [condition, setCondition] = useState<GetNotificationsRequest>({ limit: itemMoreCount, page: 1 });

	const { active, showNotifications } = useNotification();
	const { user } = useAuthContext();

	useEffect(() => {
		setOpen(false);
	}, [router.asPath]);

	const handleChangeTab = (tab: number) => {
		setTabValue(tab);
		const category = categoryOfTab[tab];
		setCondition({ ...condition, groups: category });
	};

	const handleMoreNotifications = () => {
		setCondition({ ...condition, limit: itemMoreCount + condition.limit! });
	};

	return (
		<Dropdown role='option' vertical='bottom' aria-label='gnb' end open={open} onClick={() => setOpen(true)} onBlur={() => setOpen(false)}>
			<Dropdown.Toggle button={false}>
				<Button aria-label='notification-btn' size='sm' color='ghost' shape='circle' onClick={() => showNotifications()}>
					<NotificationIcon active={active} />
				</Button>
			</Dropdown.Toggle>
			<Dropdown.Menu className='w-[400px] p-0 pt-6 bg-white rounded-lg z-10 block'>
				<div className='w-[380px] h-9 px-6 py-2 justify-start items-center flex'>
					<span className='text-black text-xl font-bold leading-tight'>알림 내역</span>
				</div>
				{user ? <AuthTabs {...{ tabValue, handleChangeTab }} /> : <NoAuthTabs {...{ tabValue, handleChangeTab }} />}
				<AsyncComponentBoundary pendingFallback={<NotificationSkeleton />}>
					<NotificationTabList condition={condition} onMore={handleMoreNotifications} />
				</AsyncComponentBoundary>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default NotificationDropdown;
