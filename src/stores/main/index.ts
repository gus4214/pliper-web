import {atom} from 'jotai';
import {getCookie, setCookie} from "@/src/utils/cookie";

export const NOTIFICATION_ID_KEY = "cached_notification_tc"

export const workCategoryAtom = atom<string | undefined>(undefined);
export const dailyCategoryAtom = atom<string | undefined>(undefined);

// 마지막으로 읽은 알림
export const totalNotificationCountAtom = atom<number | undefined>(undefined);

export const setTotalNotificationCountAtom = atom(null, (get, set, count: number) => {
    set(totalNotificationCountAtom, count);
    setCookie(NOTIFICATION_ID_KEY, count, {
        path: "/", maxAge: 365 * 60 * 60 * 24
    });
});
