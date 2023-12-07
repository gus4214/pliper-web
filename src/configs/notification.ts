import {NotificationGroup, NotificationType} from "@/src/fetchers/notification";

type TitleOfType = {
    [key in NotificationType]: string;
};

type TitleOfGroup = {
    [key in NotificationGroup]: string;
};

export const titleOfType: Partial<TitleOfType> = {
    NOTI_NOTIFICATION: "공지",
    NOTI_EVENT: "이벤트",
    NOTI_CLIP: "프롬프트",
}

export const titleOfGroup: TitleOfGroup = {
    SYSTEM: "공지&이벤트",
    USER: "프롬프트",
}