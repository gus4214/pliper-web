import React from 'react';

const FallbackSpinner = () => {
	return (
		<div className='h-full flex items-center justify-center flex-col relative'>
			<span className='loading loading-spinner loading-md text-teal-200'></span>
		</div>
	);
};

export default FallbackSpinner;
