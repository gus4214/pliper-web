import DailyPromptCard from '@/src/components/modules/main/card/DailyPromptCard';
import React from 'react';

const samplePropmpt = [
	{
		id: 0,
		src: '/images/sample/1.jpeg',
		user: '@UserID',
		title: '용기 없는 그대를 위해~ 대신 카톡!',
		tag: '연애',
		likeCount: 208,
		viewCount: 527,
	},
	{
		id: 1,
		src: '/images/sample/2.jpeg',
		user: '@UserID',
		title: '초등학생에게 재미있는 아이스브레이킹 놀이 3가지',
		tag: '공부',
		likeCount: 208,
		viewCount: 527,
	},
	{
		id: 2,
		src: '/images/sample/3.jpeg',
		user: '@UserID',
		title: '뭐 먹을지 고민이 된다면~? 오늘의 점심 추천 카테고리!',
		tag: '음식',
		likeCount: 208,
		viewCount: 527,
	},
	{
		id: 3,
		src: '/images/sample/4.jpeg',
		user: '@UserID',
		title: '여행사 직원이 되어서 여행 계획을 만들기!',
		tag: '일상',
		likeCount: 208,
		viewCount: 527,
	},
	{
		id: 4,
		src: '/images/sample/5.jpeg',
		user: '@UserID',
		title: '퇴사마저 도와주는 너란녀석...',
		tag: '멘트',
		likeCount: 208,
		viewCount: 527,
	},
	{
		id: 5,
		src: '/images/sample/6.gif',
		user: '@UserID',
		title: '가장 인기 있는 의류 브랜드를 취합해서 나에게 어울리는 유형을 찾아',
		tag: '카테고리',
		likeCount: 208,
		viewCount: 527,
	},
];
const MainDailyPromptContainer = () => {
	return (
		<div className='w-full py-[90px] flex flex-col justify-center items-center'>
			<div className='w-[1200px] px-3 flex-col gap-10 flex'>
				<h1 className='text-center text-black text-[28px] font-bold'>일상속에서도 프롬프트로 레벨업!</h1>
				<div className='w-full gap-x-6 gap-y-6 flex flex-wrap'>
					{samplePropmpt.map((prompt) => {
						return (
							<DailyPromptCard
								key={prompt.id}
								src={prompt.src}
								user={prompt.user}
								title={prompt.title}
								tag={prompt.tag}
								likeCount={prompt.likeCount}
								viewCount={prompt.viewCount}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default MainDailyPromptContainer;
