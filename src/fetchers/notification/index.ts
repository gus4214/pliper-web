import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/apis';
import { accessTokenKey } from '@/src/configs/auth';
import { getCookie } from '@/src/utils/cookie';
import { useInfiniteQuery, useQuery } from 'react-query';
import { IBaasResponse, IPageRequest } from '@/src/fetchers/types';

export type NotificationGroup = 'SYSTEM' | 'USER';

export type NotificationType = 'NOTIFICATION' | 'EVENT' | 'CLIP';

export interface GetNotificationsRequest extends IPageRequest {
	groups?: NotificationGroup | NotificationGroup[];
}

export interface GetNotificationsResult extends IBaasResponse {
	notifications: NotificationItem[];
	totalRows: number;
	totalPages: number;
	last: boolean;
	first: boolean;
}

export interface GetNotificationCountResult extends IBaasResponse {
	total: number;
}

export interface NotificationItem {
	notificationId: number;
	group: NotificationGroup;
	type: NotificationType;
	userEmail?: string;
	content: string;
	notificationDateTime: string;
}

export const getNotifications = (input?: GetNotificationsRequest) => {
	return callApi<GetNotificationsRequest, GetNotificationsResult>({
		api: apis.GET_NOTIFICATIONS_API,
		queryString: input,
		token: getCookie(accessTokenKey),
	});
};

export const getNotificationCount = () => {
	return callApi<never, GetNotificationCountResult>({
		api: apis.GET_NOTIFICATION_COUNT_API,
		token: getCookie(accessTokenKey),
	});
};

export const useGetNotifications = (input?: GetNotificationsRequest) => {
	return useQuery(['notification', 'list', input] as const, () => getNotifications(input), {
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};

export const useGetNotificationCount = () => {
	return useQuery(['notification', 'count'] as const, () => getNotificationCount(), {
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};

export const useInfiniteGetNotifications = (input?: GetNotificationsRequest) => {
	const notifications = async ({ pageParam = 1 }) => {
		const data = await getNotifications({ ...input, page: pageParam });

		return {
			...data,
			currentPage: pageParam,
		};
	};

	return useInfiniteQuery(['notification', 'list', input] as const, notifications, {
		getNextPageParam: (lastPage, pages) => {
			// lastPage와 pages는 콜백함수에서 리턴한 값을 의미한다!!
			// lastPage: 직전에 반환된 리턴값, pages: 여태 받아온 전체 페이지

			if (!lastPage.last) {
				return lastPage.currentPage + 1;
			}

			// 마지막 페이지면 undefined가 리턴되어서 hasNextPage는 false가 됨!
			return undefined;
		},
		suspense: true,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});
};
