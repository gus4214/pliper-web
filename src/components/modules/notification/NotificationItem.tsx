import React from 'react';
import {NotificationGroup} from "@/src/fetchers/notification";

interface NotificationItemProps {
    group: NotificationGroup;
    date: string;
    text: string;
    confirmed?: boolean;
    onClick?: () => void;
}

export const NotificationEmptyItem = () => {
    return <div
        className='p-4 bg-gray-50 border-t border-neutral-200 flex-col justify-center items-start gap-4 flex'>
        <div className='flex flex-col gap-4 justify-center'>
            <div
                className='w-[368px] p-4 bg-white rounded-lg border border-neutral-200 flex-col justify-center items-start gap-3 inline-flex cursor-pointer'>
                <div className='justify-start items-center gap-2.5 inline-flex'>
                    <div className={`text-neutral-400 text-sm font-normal leading-[14px]`}>알림 내역이 존재하지 않습니다</div>
                </div>
            </div>

        </div>
    </div>
}

const NotificationItem: React.FC<NotificationItemProps> = ({group, date, text, confirmed = false}) => {
    const dotColor = !confirmed ? 'bg-teal-400' : 'bg-neutral-300 ';
    const categoryColor = !confirmed ? 'text-black' : 'text-neutral-400';
    const textColor = !confirmed ? 'text-zinc-800' : 'text-neutral-400';

    return (
        <>
            <div
                className='w-[368px] p-4 bg-white rounded-lg border border-neutral-200 flex-col justify-center items-start gap-3 inline-flex cursor-pointer'>
                <div className='self-stretch justify-start items-center gap-2 inline-flex'>
                    <div className={`w-1.5 h-1.5 ${dotColor} rounded-full`}/>
                    <div className={`${categoryColor} text-[15px] font-semibold leading-[15px]`}>{group}</div>
                    <div className='text-neutral-400 text-[13px] font-normal leading-[13px]'>{date}</div>
                </div>
                <div className='justify-start items-center gap-2.5 inline-flex'>
                    <div className={`${textColor} text-sm font-normal leading-[14px]`}>{text}</div>
                </div>
            </div>
        </>
    );
};

export default NotificationItem;