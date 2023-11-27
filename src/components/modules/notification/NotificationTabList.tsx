import NotificationItem, { NotificationEmptyItem } from '@/src/components/modules/notification/NotificationItem';
import React, { FC } from 'react';
import { GetNotificationsRequest, useInfiniteGetNotifications, NotificationItem as INotificationItem } from '@/src/fetchers/notification';
import { ChevronRight } from 'heroicons-react';
import { useRouter } from 'next/router';

interface NotificationTabListProps {
	condition?: GetNotificationsRequest;
	onMore?: () => void;
}

const NotificationTabList: FC<NotificationTabListProps> = ({ condition, onMore }) => {
	const { data, fetchNextPage, isFetchingNextPage, refetch, hasNextPage } = useInfiniteGetNotifications(condition);
	const router = useRouter();

	const handleTabItemClick = (item: INotificationItem) => {
		if (item.promptId) {
			router.push(`/prompt/${item.promptId}`);
		} else if (item.link) {
			router.push(item.link);
		}
	};

	if (!data?.pages) {
		return <NotificationEmptyItem />;
	}

	return (
		<div>
			<div className='p-4 bg-gray-50 border-t border-neutral-200 flex-col justify-center  gap-4 max-h-[410px] overflow-y-auto '>
				<div className='flex flex-col gap-4 justify-start '>
					{data?.pages.map((page, index) => (
						<React.Fragment key={index}>
							{(!page?.notifications || page?.notifications.length === 0) && <NotificationEmptyItem />}
							{page?.notifications?.map((item, i) => (
								<NotificationItem
									key={i}
									group={item.group}
									type={item.type}
									date={item.notificationDateTime}
									text={item.content}
									onClick={() => handleTabItemClick(item)}
								/>
							))}
						</React.Fragment>
					))}
				</div>
				{hasNextPage && (
					<div className={'mt-4 flex w-full justify-center'}>
						<div
							className=' h-10 px-4 bg-white hover:bg-neutral-100 hover:border-0 rounded-lg border border-neutral-200 justify-center items-center inline-flex cursor-pointer'
							onClick={() => fetchNextPage()}
						>
							<div className="text-black text-sm font-normal font-['Pretendard'] leading-none">알림 내역 더보기</div>
							<div className='w-6 h-6 relative'>
								<ChevronRight className=' text-teal-400' />
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default NotificationTabList;
