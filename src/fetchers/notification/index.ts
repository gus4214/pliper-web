import {callApi} from '@/src/fetchers';
import {apis} from '@/src/fetchers/apis';
import {accessTokenKey} from '@/src/configs/auth';
import {getCookie} from '@/src/utils/cookie';
import {useQuery} from 'react-query';
import {IPageRequest} from "@/src/fetchers/types";

export type NotificationGroup = 'SYSTEM' | 'USER'

export type NotificationType = 'NOTIFICATION' | "EVENT" | "CLIP"

export interface GetNotificationsRequest extends IPageRequest {
    groups: NotificationGroup | NotificationGroup[];
}

export interface GetNotificationsResult {
    notifications: NotificationItem[];
    totalRows: number;
    totalPages: number;
    last: boolean;
    first: boolean;
}

export interface NotificationItem {
    notificationId: number;
    group: NotificationGroup;
    type: NotificationType;
    userEmail?: string
    content: string
    notificationDateTime: string
}


export const getNotifications = (input?: GetNotificationsRequest) => {
    return callApi<GetNotificationsRequest, GetNotificationsResult>({
        api: apis.GET_NOTIFICATIONS_API,
        queryString: input,
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