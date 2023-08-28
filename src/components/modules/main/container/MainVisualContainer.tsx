import MainVisualBox from '@/src/components/atoms/box/main/MainVisualBox';
import MainBookMarkCard from '@/src/components/modules/main/card/MainBookMarkCard';
import { Badge } from 'react-daisyui';

const MainVisualContainer = () => {
	return (
		<MainVisualBox src={'/images/mainVis.png'}>
			<div className='w-[672px] flex flex-col items-center gap-14 absolute top-[50px]'>
				<h1 className='text-center text-white text-[32px] font-bold'>가장 많은 북마크로 저장된 프롬프트</h1>
				<div className='gap-12 flex'>
					<MainBookMarkCard
						src={'/images/work.jpeg'}
						title='팀장에게 인정받는 기획서 작성 방법'
						user='@UserID'
						badge={
							<Badge color='accent' className='w-[60px] h-8 p-2.5 rounded'>
								<span className='text-white text-lg font-bold leading-[18px]'>100K</span>
							</Badge>
						}
					/>
					<MainBookMarkCard
						src={'/images/work.jpeg'}
						title='팀장에게 인정받는 기획서 작성 방법'
						user='@UserID'
						badge={
							<Badge color='accent' className='w-[60px] h-8 p-2.5 rounded'>
								<span className='text-white text-lg font-bold leading-[18px]'>100K</span>
							</Badge>
						}
					/>
					<MainBookMarkCard
						src={'/images/work.jpeg'}
						title='올 여름 아주 무더운 날씨!! 전기료 많이 아끼는 법'
						user='@UserID'
						badge={
							<Badge color='accent' className='w-[60px] h-8 p-2.5 rounded'>
								<span className='text-white text-lg font-bold leading-[18px]'>100K</span>
							</Badge>
						}
					/>
				</div>
			</div>
		</MainVisualBox>
	);
};

export default MainVisualContainer;
