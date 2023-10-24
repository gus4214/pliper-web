import NotificationItem, {NotificationEmptyItem} from '@/src/components/modules/notification/NotificationItem';
import React, {FC} from 'react';
import {GetNotificationsRequest, useInfiniteGetNotifications} from '@/src/fetchers/notification';
import {Button} from 'react-daisyui';
import {ChevronRight} from 'heroicons-react';

interface NotificationTabListProps {
    condition?: GetNotificationsRequest;
    onMore?: () => void;
}

const NotificationTabList: FC<NotificationTabListProps> = ({condition, onMore}) => {
    const {data, fetchNextPage, isFetchingNextPage, refetch, hasNextPage} = useInfiniteGetNotifications(condition);
    if (!data?.pages) {
        return <NotificationEmptyItem/>;
    }
    return (
        <div>
            <div
                className='p-4 bg-gray-50 border-t border-neutral-200 flex-col justify-center  gap-4 max-h-[410px] overflow-y-auto '>
                <div className='flex flex-col gap-4 justify-start '>
                    {data?.pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {!page?.notifications && <NotificationEmptyItem/>}
                            {page?.notifications?.map((item, i) => (
                                <NotificationItem key={i} group={item.group} date={item.notificationDateTime}
                                                  text={item.content}/>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
                {hasNextPage && <Button
                    className={'mt-4'}
                    variant='outline'
                    color='ghost'
                    fullWidth
                    endIcon={<ChevronRight className='w-6 h-6 font-bold text-teal-400'/>}
                    dataTheme='mytheme'
                    onClick={() => fetchNextPage()}
                >
                    <span className='text-sm font-normal'>알림 내역 더보기</span>
                </Button>}
            </div>
        </div>
    );
};

export default NotificationTabList;
