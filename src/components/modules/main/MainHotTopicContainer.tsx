import MainHotTopicBox from '@/src/components/atoms/main/MainHotTopicBox';
import { Badge } from 'react-daisyui';

const MainHotTopicContainer = () => {
	return (
		<MainHotTopicBox>
			<div className='justify-start items-start gap-2.5 inline-flex'>
				<div className='text-center text-black text-2xl font-bold leading-normal'>이번 한 주, 가장 인기있는 검색어</div>
			</div>
			<div className='self-stretch h-20 flex-col justify-start items-center gap-3 flex'>
				<div className='justify-start items-start gap-2 inline-flex'>
					<Badge className='h-9 px-4 py-2.5 bg-gray-400'>
						<span className='text-white text-sm font-medium leading-[14px]'>직장인 문서 활용 방법</span>
					</Badge>
					<Badge className='h-9 px-4 py-2.5 border-neutral-200 '>
						<span className='opacity-50 text-black text-sm font-normal leading-[14px]'>신입사원 업무 팁</span>
					</Badge>
					<Badge className='h-9 px-4 py-2.5 border-neutral-200 '>
						<span className='opacity-50 text-black text-sm font-normal leading-[14px]'>공유 이메일 전송 방법</span>
					</Badge>
					<Badge className='h-9 px-4 py-2.5 border-neutral-200 '>
						<span className='opacity-50 text-black text-sm font-normal leading-[14px]'>프론트엔드 개발 초기방법</span>
					</Badge>
					<Badge className='h-9 px-4 py-2.5 border-neutral-200 '>
						<span className='opacity-50 text-black text-sm font-normal leading-[14px]'>ChatGPT</span>
					</Badge>
				</div>
				<div className='justify-start items-start gap-2 inline-flex'>
					<Badge className='h-9 px-4 py-2.5 border-neutral-200 '>
						<span className='opacity-50 text-black text-sm font-normal leading-[14px]'>면접 관련 질문 리스트</span>
					</Badge>
					<Badge className='h-9 px-4 py-2.5 border-neutral-200 '>
						<span className='opacity-50 text-black text-sm font-normal leading-[14px]'>항공권 누구보다 더 싸게 사는 방법</span>
					</Badge>
					<Badge className='h-9 px-4 py-2.5 border-neutral-200 '>
						<span className='opacity-50 text-black text-sm font-normal leading-[14px]'>무더운 여름 시원하게 보내기</span>
					</Badge>
				</div>
			</div>
		</MainHotTopicBox>
	);
};

export default MainHotTopicContainer;
