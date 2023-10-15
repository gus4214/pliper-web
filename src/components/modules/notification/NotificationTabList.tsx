import NotificationItem, { NotificationEmptyItem } from '@/src/components/modules/notification/NotificationItem';
import React, { FC } from 'react';
import { GetNotificationsRequest, useGetNotifications } from '@/src/fetchers/notification';
import { Button } from 'react-daisyui';
import { ChevronRight } from 'heroicons-react';

interface NotificationTabListProps {
	condition?: GetNotificationsRequest;
	onMore?: () => void;
}

const NotificationTabList: FC<NotificationTabListProps> = ({ condition, onMore }) => {
	const { data } = useGetNotifications(condition);

	if (data?.notifications?.length === 0) {
		return <NotificationEmptyItem />;
	}
	return (
		<div>
			<div className='p-4 bg-gray-50 border-t border-neutral-200 flex-col justify-center  gap-4 max-h-[410px] overflow-y-auto '>
				<div className='flex flex-col gap-4 justify-start '>
					{data?.notifications?.map((item, i) => (
						<NotificationItem key={i} group={item.group} date={item.notificationDateTime} text={item.content} />
					))}
				</div>
				{!data?.last && (
					<Button
						className={'mt-4'}
						variant='outline'
						color='ghost'
						fullWidth
						endIcon={<ChevronRight className='w-6 h-6 font-bold text-teal-400' />}
						dataTheme='mytheme'
						onClick={onMore}
					>
						<span className='text-sm font-normal'>알림 내역 더보기</span>
					</Button>
				)}
			</div>
		</div>
	);
};

export default NotificationTabList;
