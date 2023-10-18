import React from 'react';
import Skeleton from "@/src/components/atoms/skeleton/Skeleton";


export const NotificationSkeleton = () => {
    return <div
        className='p-4 bg-gray-50 border-t border-neutral-200 flex-col justify-center items-start gap-4 flex'>
        <div className='flex flex-col gap-4 justify-center'>
            <div
                className='w-[368px] p-4 bg-white rounded-lg border border-neutral-200 flex-col justify-center items-start gap-3 inline-flex cursor-pointer'>
                <div className='justify-start items-center gap-2.5 inline-flex'>
                    <Skeleton/>
                </div>
            </div>
            <div
              className='w-[368px] p-4 bg-white rounded-lg border border-neutral-200 flex-col justify-center items-start gap-3 inline-flex cursor-pointer'>
                <div className='justify-start items-center gap-2.5 inline-flex'>
                    <Skeleton/>
                </div>
            </div>
        </div>
    </div>
}
export default NotificationSkeleton;
