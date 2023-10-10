import NotificationIcon from '@/src/components/atoms/icons/NotificationIcon';
import React, {FC, useState} from 'react';
import {Button, Dropdown, Tabs} from 'react-daisyui';
import NotificationTabList from "@/src/components/modules/notification/NotificationTabList";
import AsyncComponentBoundary from "@/src/components/atoms/suspense/AsyncComponentBoundary";
import {useAuthContext} from "@/src/hooks/context";
import {GetNotificationsRequest, NotificationGroup} from "@/src/fetchers/notification";
import NotificationSkeleton from "@/src/components/modules/notification/NotificationSkeleton";

const categoryOfTab: Record<string, NotificationGroup | NotificationGroup[]> = {
    0: ["USER", "SYSTEM"],
    1: "USER",
    2: "SYSTEM"
}

const NotificationDropdown: FC = () => {
    const [tabValue, setTabValue] = useState(0);
    const {user} = useAuthContext();

    const handleChangeTab = (tab: number) => {
        setTabValue(tab)
        let category = categoryOfTab[tab]
        setCondition({...condition, groups: (category)})
    }

    const [condition, setCondition] = useState<GetNotificationsRequest>();

    return (
        <Dropdown vertical='bottom' end>
            <Button size='sm' color='ghost' shape='circle'>
                <NotificationIcon active/>
            </Button>
            <Dropdown.Menu className='w-[400px] p-0 pt-6 bg-white rounded-lg z-10'>
                <div className='w-[380px] h-9 px-6 py-2 justify-start items-center flex'>
                    <span className='text-black text-xl font-bold leading-tight'>알림 내역</span>
                </div>
                <Tabs value={tabValue} onChange={handleChangeTab} className='px-2'>
                    <Tabs.Tab value={0}>전체</Tabs.Tab>
                    {user ? <Tabs.Tab value={1}>My PLIP</Tabs.Tab> : <></>}
                    <Tabs.Tab value={2}>공지 및 이벤트</Tabs.Tab>
                </Tabs>
                <AsyncComponentBoundary pendingFallback={<NotificationSkeleton/>}>
                    <NotificationTabList condition={condition}/>
                </AsyncComponentBoundary>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default NotificationDropdown;
