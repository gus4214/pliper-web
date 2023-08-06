import PromptCard from '@/src/components/modules/main/feature/PromptCard';
import { Card } from 'react-daisyui';

const MainCarefullyPromptContainer = () => {
	return (
		<div className='w-full bg-neutral-50 flex flex-col py-[372px] pb-[46px] pt-[40px] items-center'>
			<h1 className='text-center text-black text-2xl font-bold leading-normal'>업무에서 활용 가능한 프롬프트 엄선작</h1>
			<div className='mt-8'>
				<div className='w-[1176px] flex flex-col items-center gap-8'>
					<div className='h-8 gap-2 flex'>
						<div className='px-4 py-[9px] bg-sky-950 rounded border justify-center items-center flex'>
							<span className='text-white text-sm'>개발</span>
						</div>
						<div className='px-4 py-[9px] rounded border border-neutral-200 justify-center items-center flex'>
							<span className='opacity-50 text-black text-sm'>이메일</span>
						</div>
						<div className='px-4 py-[9px] rounded border border-neutral-200 justify-center items-center flex'>
							<span className='opacity-50 text-black text-sm'>마케팅</span>
						</div>
						<div className='px-4 py-[9px] rounded border border-neutral-200 justify-center items-center flex'>
							<span className='opacity-50 text-black text-sm'>디자인</span>
						</div>
						<div className='px-4 py-[9px] rounded border border-neutral-200 justify-center items-center flex'>
							<span className='opacity-50 text-black text-sm'>문서작성</span>
						</div>
					</div>
					<div className='w-full gap-x-6 gap-y-10 flex flex-wrap'>
						<PromptCard
							src='/images/thumbSample.png'
							user='@UserID'
							title='개발팀에게 인정받는 기획서 작성법 + 꿀팁'
							tag='개발'
							likeCount={208}
							viewCount={527}
						/>
						<PromptCard
							src='/images/thumbSample.png'
							user='@UserID'
							title='개발팀에게 인정받는 기획서 작성법 + 꿀팁'
							tag='개발'
							likeCount={208}
							viewCount={527}
						/>
						<PromptCard
							src='/images/thumbSample.png'
							user='@UserID'
							title='개발팀에게 인정받는 기획서 작성법 + 꿀팁'
							tag='개발'
							likeCount={208}
							viewCount={527}
						/>
						<PromptCard
							src='/images/thumbSample.png'
							user='@UserID'
							title='개발팀에게 인정받는 기획서 작성법 + 꿀팁'
							tag='개발'
							likeCount={208}
							viewCount={527}
						/>
						<PromptCard
							src='/images/thumbSample.png'
							user='@UserID'
							title='개발팀에게 인정받는 기획서 작성법 + 꿀팁'
							tag='개발'
							likeCount={208}
							viewCount={527}
						/>
						<Card className='w-[376px] flex flex-col justify-center items-center gap-4 cursor-pointer hover:shadow-lg transition-all duration-300'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25' />
							</svg>
							<span className=' text-black text-base'>프롬프트 더보기</span>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainCarefullyPromptContainer;
