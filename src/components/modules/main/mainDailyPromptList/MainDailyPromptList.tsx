import DailyPromptCard from '@/src/components/modules/main/card/DailyPromptCard';
import {useGetCurationMain, useGetCurationWeek} from '@/src/fetchers/main';
import {dailyCategoryAtom, workCategoryAtom} from '@/src/stores/main';
import { formatNumber } from '@/src/utils/utils';
import { useAtomValue } from 'jotai';
import {useRouter} from "next/router";
import {promptKoTextOfPersona} from "@/src/configs/prompt";

const samplePropmpt = [
	{
		promptId: 0,
		src: '/images/sample/1.jpeg',
		userEmail: '@UserID',
		title: '용기 없는 그대를 위해~ 대신 카톡!',
		personaType: '연애',
		likeCount: 208,
		viewCount: 527,
	},
	{
		promptId: 1,
		src: '/images/sample/2.jpeg',
		userEmail: '@UserID',
		title: '초등학생에게 재미있는 아이스브레이킹 놀이 3가지',
		personaType: '공부',
		likeCount: 208,
		viewCount: 527,
	},
	{
		promptId: 2,
		src: '/images/sample/3.jpeg',
		userEmail: '@UserID',
		title: '뭐 먹을지 고민이 된다면~? 오늘의 점심 추천 카테고리!',
		personaType: '음식',
		likeCount: 208,
		viewCount: 527,
	},
	{
		promptId: 3,
		src: '/images/sample/4.jpeg',
		userEmail: '@UserID',
		title: '여행사 직원이 되어서 여행 계획을 만들기!',
		personaType: '일상',
		likeCount: 208,
		viewCount: 527,
	},
	{
		promptId: 4,
		src: '/images/sample/5.jpeg',
		userEmail: '@UserID',
		title: '퇴사마저 도와주는 너란녀석...',
		personaType: '멘트',
		likeCount: 208,
		viewCount: 527,
	},
	{
		promptId: 5,
		src: '/images/sample/6.gif',
		userEmail: '@UserID',
		title: '가장 인기 있는 의류 브랜드를 취합해서 나에게 어울리는 유형을 찾아',
		personaType: '카테고리',
		likeCount: 208,
		viewCount: 527,
	},
];

const MainDailyPromptList = () => {
	const router = useRouter();
	const dailyCategory = useAtomValue(dailyCategoryAtom);
	const { data } = useGetCurationWeek({ persona: 'DAILY', category: dailyCategory! }, {enable:!!dailyCategory});

	return (
		<div className='w-full gap-x-6 gap-y-6 flex flex-wrap'>
			{data?.prompts?.map((prompt) => {
				return (
					<DailyPromptCard
						key={prompt.promptId}
						src={prompt.imageUrl || '/images/sample/3.jpeg'}
						user={prompt.userNickname}
						title={prompt.title}
						tag={promptKoTextOfPersona[prompt.personaType]}
						likeCount={formatNumber(prompt.likeCount)}
						viewCount={formatNumber(prompt.viewCount)}
						onClick={() => router.push(`/prompt/${prompt.promptId}`)}
					/>
				);
			})}
		</div>
	);
};

export default MainDailyPromptList;
