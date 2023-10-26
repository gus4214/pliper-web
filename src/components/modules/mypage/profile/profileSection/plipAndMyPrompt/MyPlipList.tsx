import ListItem from '@/src/components/modules/mypage/profile/profileSection/plipAndMyPrompt/ListItem';
import { CreatedPrompt, UserSummary } from '@/src/fetchers/auth/types';
import React from 'react';

interface MyPlipListProps {
	promptClips: CreatedPrompt[];
}

const MyPlipList: React.FC<MyPlipListProps> = ({ promptClips }) => {
	// 배열의 마지막에서 3개의 요소만 추출
	const lastThreePromptClips = promptClips.slice(-3);

	return (
		<div className='flex flex-col gap-2.5'>
			{lastThreePromptClips.map((promptClip) => (
				<ListItem
					icon={
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
							<path
								d='M13.7854 4.5H10.2154C8.30293 4.5 6.75043 6.0075 6.69043 7.905V12.675C6.75793 14.5725 8.31043 16.0875 10.2154 16.0875C12.1204 16.0875 13.7479 14.505 13.7479 12.555V9.2625H12.4204V12.555C12.4204 13.7775 11.4304 14.76 10.2154 14.76C8.99293 14.76 8.01043 13.77 8.01043 12.555V8.0325C8.01043 6.8325 8.97043 5.8575 10.1629 5.8275H13.7929C15.0154 5.8275 15.9979 6.81 15.9979 8.0325V15.9675C15.9979 17.19 15.0079 18.1725 13.7929 18.1725V19.5C15.7429 19.5 17.3254 17.9175 17.3254 15.9675V8.0325C17.3254 6.0825 15.7429 4.5 13.7929 4.5H13.7854Z'
								fill='#39CCCC'
							/>
						</svg>
					}
					title={promptClip.title}
					userEmail={promptClip.userEmail}
				/>
			))}
		</div>
	);
};

export default MyPlipList;
