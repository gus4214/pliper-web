import PromptCard from '@/src/components/modules/main/card/PromptCard';
import {useGetCurationMain, useGetCurationWeek} from '@/src/fetchers/main';
import { workCategoryAtom } from '@/src/stores/main';
import {addHttpsPrefix, formatNumber} from '@/src/utils/utils';
import { useAtomValue } from 'jotai';
import {useRouter} from "next/router";
import {promptKoTextOfPersona} from "@/src/configs/prompt";

const samplePropmpt = [
	{
		promptId: 0,
		src: '/images/sample/1.jpeg',
		userEmail: '@UserID',
		title: '개발팀에게 인정받는 기획서 작성법 + 꿀팁',
		personaType: '개발',
		likeCount: 2081,
		viewCount: 527,
	},
	{
		promptId: 1,
		src: '/images/sample/2.jpeg',
		userEmail: '@UserID',
		title: '사용자 이메일, 더이상 고민 NoNo!',
		personaType: '개발',
		likeCount: 208,
		viewCount: 527,
	},
	{
		promptId: 2,
		src: '/images/sample/3.jpeg',
		userEmail: '@UserID',
		title: '나란녀석 업무 반복 작업에서 벗어나자!',
		personaType: '개발',
		likeCount: 208,
		viewCount: 527,
	},
	{
		promptId: 3,
		src: '/images/sample/4.jpeg',
		userEmail: '@UserID',
		title: '개발팀에게 인정받는 개발비법!',
		personaType: '개발',
		likeCount: 208,
		viewCount: 527,
	},
	{
		promptId: 4,
		src: '/images/sample/5.jpeg',
		userEmail: '@UserID',
		title: '어느 날 내게 이런 업무가?!',
		personaType: '개발',
		likeCount: 208,
		viewCount: 527,
	},
	{
		promptId: 5,
		src: '/images/sample/6.gif',
		userEmail: '@UserID',
		title: '업무 10초라도 더 줄이는 법!',
		personaType: '개발',
		likeCount: 208,
		viewCount: 5272,
	},
];

const MainWorkPromptList = () => {
	const router = useRouter();
	const jobCategory = useAtomValue(workCategoryAtom);
	const { data } = useGetCurationWeek({ persona: 'JOB', category: jobCategory! }, {enable:!!jobCategory});

	return (
		<div className='w-full gap-x-6 gap-y-10 flex flex-wrap'>
			{data?.prompts?.map((prompt) => {
				return (
					<PromptCard
						key={prompt.promptId}
						src={addHttpsPrefix(prompt.imageUrl) || '/images/sample/6.gif'}
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

export default MainWorkPromptList;
