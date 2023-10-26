import MyPromptHistoryList from '@/src/components/modules/mypage/profile/interactionSection/MyPromptHistoryList';
import MyPromptLikeList from '@/src/components/modules/mypage/profile/interactionSection/MyPromptLikeList';
import MyPromptListContainer from '@/src/components/modules/mypage/profile/interactionSection/MyPromptListContainer';
import MyPromptReliabilityList from '@/src/components/modules/mypage/profile/interactionSection/MyPromptReliabilityList';
import { myPageUserSummaryAtom } from '@/src/stores/mypage';
import { useAtomValue } from 'jotai';
import { useState } from 'react';
import { Tabs } from 'react-daisyui';

const tabComponents = {
	0: <MyPromptHistoryList />,
	1: <MyPromptLikeList />,
	2: <MyPromptReliabilityList />,
} as Record<number, JSX.Element>;

const InteractionSection = () => {
	const [tabValue, setTabValue] = useState(0);

	const userSummary = useAtomValue(myPageUserSummaryAtom);

	return (
		<div className='w-[944px] flex flex-col gap-6'>
			<div className='w-full flex justify-start'>
				<Tabs value={tabValue} onChange={setTabValue} variant='bordered'>
					<Tabs.Tab value={0} className='h-[54px]'>
						히스토리
					</Tabs.Tab>
					<Tabs.Tab value={1} className='h-[54px]'>
						{`좋아요 ${userSummary?.likeCount}`}
					</Tabs.Tab>
					<Tabs.Tab value={2} className='h-[54px]'>
						{`정확도 ${userSummary?.precisionUpCount}`}
					</Tabs.Tab>
				</Tabs>
			</div>
			<MyPromptListContainer list={tabComponents[tabValue]} />
		</div>
	);
};

export default InteractionSection;
