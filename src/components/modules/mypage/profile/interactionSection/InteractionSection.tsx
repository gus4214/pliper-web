import React, { useState } from 'react';
import { Tabs } from 'react-daisyui';

const InteractionSection = () => {
	const [tabValue, setTabValue] = useState(0);
	return (
		<div className='w-full flex justify-start'>
			<Tabs value={tabValue} onChange={setTabValue} variant='bordered'>
				<Tabs.Tab value={0}>히스토리</Tabs.Tab>
				<Tabs.Tab value={1}>좋아요 7</Tabs.Tab>
				<Tabs.Tab value={2}>정확도 10</Tabs.Tab>
			</Tabs>
		</div>
	);
};

export default InteractionSection;
