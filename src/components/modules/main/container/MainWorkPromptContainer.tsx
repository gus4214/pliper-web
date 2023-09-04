import MainWorkPromptBox from '@/src/components/atoms/box/main/MainWorkPromptBox';
import SelectChip from '@/src/components/atoms/chip/SelectChip';
import PromptCard from '@/src/components/modules/main/card/PromptCard';
import { BestClip } from '@/src/fetchers/main';
import { formatNumber } from '@/src/utils/utils';

interface MainWorkPromptContainerProps {
	bestWeekJob: BestClip[];
}

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

const MainWorkPromptContainer: React.FC<MainWorkPromptContainerProps> = ({ bestWeekJob }) => {
	return (
		<MainWorkPromptBox>
			<h1 className='text-center text-[28px] font-bold text-black'>업무에서 활용 가능한 프롬프트 엄선작</h1>
			<div className='w-[1176px] mt-8'>
				<div className='w-full flex flex-col items-center gap-8'>
					<div className='gap-2 flex'>
						<SelectChip label='개발' color='secondary' selected />
						<SelectChip label='이메일' color='secondary' />
						<SelectChip label='마케팅' color='secondary' />
						<SelectChip label='디자인' color='secondary' />
						<SelectChip label='문서작성' color='secondary' />
					</div>

					<div className='w-full gap-x-6 gap-y-10 flex flex-wrap'>
						{samplePropmpt.map((prompt) => {
							return (
								<PromptCard
									key={prompt.promptId}
									src={prompt.src}
									user={prompt.userEmail}
									title={prompt.title}
									tag={prompt.personaType}
									likeCount={formatNumber(prompt.likeCount)}
									viewCount={formatNumber(prompt.viewCount)}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</MainWorkPromptBox>
	);
};

export default MainWorkPromptContainer;
