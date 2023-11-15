import React from 'react';

const MyPromptListSkeleton = () => {
	return (
		<div className='w-full flex flex-wrap gap-4 justify-start'>
			<div className={`w-[464px] h-[129.5px] rounded-2xl flex bg-gray-300 animate-pulse `} />
			<div className={`w-[464px] h-[129.5px] rounded-2xl flex bg-gray-300 animate-pulse `} />
			<div className={`w-[464px] h-[129.5px] rounded-2xl flex bg-gray-300 animate-pulse `} />
			<div className={`w-[464px] h-[129.5px] rounded-2xl flex bg-gray-300 animate-pulse `} />
			<div className={`w-[464px] h-[129.5px] rounded-2xl flex bg-gray-300 animate-pulse `} />
			<div className={`w-[464px] h-[129.5px] rounded-2xl flex bg-gray-300 animate-pulse `} />
		</div>
	);
};

export default MyPromptListSkeleton;
