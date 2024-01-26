export const NotificationSkeleton = () => {
	return (
		<>
			<div className='p-4 flex-col justify-center items-start gap-4 flex'>
				<div className='flex flex-col gap-4 justify-center'>
					<div className='rounded-lg w-[368px] h-[75px] bg-gray-300 animate-pulse' />
					<div className='rounded-lg w-[368px] h-[75px] bg-gray-300 animate-pulse' />
				</div>
			</div>
		</>
	);
};
export default NotificationSkeleton;
