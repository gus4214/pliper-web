import MainWorkPromptBox from '@/src/components/atoms/box/main/MainWorkPromptBox';
import SelectChip from '@/src/components/atoms/chip/SelectChip';
import PromptCard from '@/src/components/modules/main/card/PromptCard';

const samplePropmpt = [
	{
		id: 0,
		src: '/images/sample/1.jpeg',
		user: '@UserID',
		title: '개발팀에게 인정받는 기획서 작성법 + 꿀팁',
		tag: '개발',
		likeCount: 208,
		viewCount: 527,
	},
	{
		id: 1,
		src: '/images/sample/2.jpeg',
		user: '@UserID',
		title: '사용자 이메일, 더이상 고민 NoNo!',
		tag: '개발',
		likeCount: 208,
		viewCount: 527,
	},
	{
		id: 2,
		src: '/images/sample/3.jpeg',
		user: '@UserID',
		title: '나란녀석 업무 반복 작업에서 벗어나자!',
		tag: '개발',
		likeCount: 208,
		viewCount: 527,
	},
	{
		id: 3,
		src: '/images/sample/4.jpeg',
		user: '@UserID',
		title: '개발팀에게 인정받는 개발비법!',
		tag: '개발',
		likeCount: 208,
		viewCount: 527,
	},
	{
		id: 4,
		src: '/images/sample/5.jpeg',
		user: '@UserID',
		title: '어느 날 내게 이런 업무가?!',
		tag: '개발',
		likeCount: 208,
		viewCount: 527,
	},
	{
		id: 5,
		src: '/images/sample/6.gif',
		user: '@UserID',
		title: '업무 10초라도 더 줄이는 법!',
		tag: '개발',
		likeCount: 208,
		viewCount: 527,
	},
];

const MainWorkPromptContainer = () => {
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
		</MainWorkPromptBox>
	);
};

export default MainWorkPromptContainer;
