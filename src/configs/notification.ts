import {NotificationGroup, NotificationType} from "@/src/fetchers/notification";

type TitleOfType = {
    [key in NotificationType]: string;
};

type TitleOfGroup = {
    [key in NotificationGroup]: string;
};

export const titleOfType: TitleOfType = {
    NOTIFICATION: "공지",
    EVENT: "이벤트",
    CLIP: "프롬프트",
}

export const titleOfGroup: TitleOfGroup = {
    SYSTEM: "시스템",
    USER: "프롬프트",
}