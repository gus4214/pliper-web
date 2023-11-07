import MainVisualBox from '@/src/components/atoms/box/main/MainVisualBox';
import MainBookMarkCard from '@/src/components/modules/main/card/MainBookMarkCard';
import {addHttpsPrefix, formatNumber} from '@/src/utils/utils';
import React from 'react';
import { Badge } from 'react-daisyui';
import { Prompt } from '@/src/fetchers/prompt/types';
import { useRouter } from 'next/router';

const sampleBestClip = [
	{
		promptId: 0,
		imageUrl: '/images/work.jpeg',
		title: '팀장에게 인정받는 기획서 작성 방법',
		userEmail: '@UserId',
		viewCount: 11234,
	},
	{
		promptId: 1,
		imageUrl: '/images/work.jpeg',
		title: '외로워도~ 슬퍼도~ 나는 안 울어!! 솔로 탈출 비법 모음',
		userEmail: '@UserId',
		viewCount: 7304,
	},
	{
		promptId: 2,
		imageUrl: '/images/work.jpeg',
		title: '올 여름 아주 무더운 날씨!! 전기료 많이 아끼는 법',
		userEmail: '@UserId',
		viewCount: 3480000,
	},
];

interface MainVisualContainerProps {
	bestClip: Prompt[];
}

const MainVisualContainer: React.FC<MainVisualContainerProps> = ({ bestClip }) => {
	const router = useRouter();

	return (
		<MainVisualBox src={'/images/mainVis.png'}>
			<div className='w-[672px] flex flex-col items-center gap-14 absolute top-[50px]'>
				<h1 className='text-center text-white text-[32px] font-bold'>가장 많은 북마크로 저장된 프롬프트</h1>
				<div className='gap-12 flex'>
					{bestClip.slice(0, 4).map((v, i) => {
						return (
							<MainBookMarkCard
								key={v.promptId}
								src={addHttpsPrefix(v.imageUrl) || '/images/work.jpeg'}
								title={v.title}
								user={v.userNickname}
								badge={
									<Badge color='accent' className='w-[60px] h-8 p-2.5 rounded'>
										<span className='text-white text-lg font-bold leading-[18px]'>{formatNumber(v.clipCount)}</span>
									</Badge>
								}
								onClick={() => router.push(`/prompt/${v.promptId}`)}
							/>
						);
					})}
				</div>
			</div>
		</MainVisualBox>
	);
};

export default React.memo(MainVisualContainer);
