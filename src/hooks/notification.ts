import {useSetAtom} from "jotai";
import {NOTIFICATION_ID_KEY, setTotalNotificationCountAtom} from "@/src/stores/main";
import {getCookie} from "@/src/utils/cookie";
import {useEffect, useState} from "react";
import {getNotificationCount} from "@/src/fetchers/notification";


export const useNotification = () => {
    const [active, setActive] = useState(false);
    const [latestCount, setLatestCount] = useState<number>()
    const setTotalNotificationCount = useSetAtom(setTotalNotificationCountAtom)

    useEffect(() => {
        getNotificationCount().then((result) => {
            setLatestCount(result.total)
            console.log(result.total, getCachedNotificationCount())
            setActive(result.total > getCachedNotificationCount())
        })
    }, [])


    const getCachedNotificationCount = () => {
        return getCookie(NOTIFICATION_ID_KEY) || -1
    }

    const handleReadNotification = () => {
        if (latestCount !== undefined) {
            setTotalNotificationCount(latestCount);
            setActive(latestCount > getCachedNotificationCount())
        }

    }

    return {
        active,
        showNotifications: handleReadNotification,
    }
};
