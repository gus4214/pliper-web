import {atom} from 'jotai';
import {getCookie} from "@/src/utils/cookie";

const NOTIFICATION_ID_KEY = "NOTI_ID"

export const workCategoryAtom = atom<string | undefined>(undefined);
export const dailyCategoryAtom = atom<string | undefined>(undefined);

// 마지막으로 읽은 알림
export const lastReadNotificationId = atom<number | undefined>(undefined);

export const getLastNotificationViewId = atom(null, (get, set) => {
    let notificationId = get(lastReadNotificationId);
    if (notificationId) return notificationId;
    const notificationIdByCookie = getCookie(NOTIFICATION_ID_KEY);
    if (notificationIdByCookie) {
        set(lastReadNotificationId, notificationId);
        return notificationIdByCookie;
    }
    return null;
});
