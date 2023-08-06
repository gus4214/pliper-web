import MainVisualBox from '@/src/components/atoms/main/MainVisualBox';
import MainBookMark from '@/src/components/modules/main/feature/MainBookMark';
import { Badge } from 'react-daisyui';

const MainVisualContainer = () => {
	return (
		<MainVisualBox src={'/images/mainVis.png'}>
			<div className='w-[672px] h-44 flex flex-col items-center gap-12 relative'>
				<div className='text-center text-white text-[28px] font-bold leading-7'>가장 많은 북마크로 저장된 프롬프트</div>
				<div className='self-stretch justify-start items-start gap-8 inline-flex'>
					<MainBookMark
						title='팀장에게 인정받는 기획서 작성 방법'
						user='@UserID'
						badge={
							<Badge color='accent' className='w-[60px] h-8 p-2.5'>
								<span className='text-white text-[13px] font-bold leading-[13px]'>100K</span>
							</Badge>
						}
					/>
					<MainBookMark
						title='팀장에게 인정받는 기획서 작성 방법'
						user='@UserID'
						badge={
							<Badge color='accent' className='w-[60px] h-8 p-2.5'>
								<span className='text-white text-[13px] font-bold leading-[13px]'>100K</span>
							</Badge>
						}
					/>
				</div>
			</div>
		</MainVisualBox>
	);
};

export default MainVisualContainer;
