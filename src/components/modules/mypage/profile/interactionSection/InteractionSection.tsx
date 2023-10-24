import { useGetMyPromptsByView } from '@/src/fetchers/prompt/my-prompt';
import React, { useState } from 'react';
import { Tabs } from 'react-daisyui';

const InteractionSection = () => {
	const [tabValue, setTabValue] = useState(0);

	const { data } = useGetMyPromptsByView({ page: 1, limit: 10 });

	return (
		<>
			<div className='w-full flex justify-start'>
				<Tabs value={tabValue} onChange={setTabValue} variant='bordered'>
					<Tabs.Tab value={0} className='h-[54px]'>
						히스토리
					</Tabs.Tab>
					<Tabs.Tab value={1} className='h-[54px]'>
						좋아요 7
					</Tabs.Tab>
					<Tabs.Tab value={2} className='h-[54px]'>
						정확도 10
					</Tabs.Tab>
				</Tabs>
			</div>
		</>
	);
};

export default InteractionSection;
