import Image from 'next/image';
import { NextPage } from 'next';
import { Button } from 'react-daisyui';
import EffectIcon from '@/src/components/atoms/icons/about/EffectIcon';
import Marquee from 'react-fast-marquee';
import FlowerIcon from '@/src/components/atoms/icons/about/FlowerIcon';
import ScratchIcon from '@/src/components/atoms/icons/about/ScratchIcon';

const RendingPage: NextPage = () => {
	return (
		<>
			<section className='flex relative w-full min-h-[800px] justify-center items-center bg-black'>
				<Image src='/images/about/about_bg01.png' alt='Background image' priority fill style={{ objectFit: 'cover' }} />
				<div className='flex flex-col justify-center items-center gap-10 z-20'>
					<div className='flex-col justify-center items-center gap-5 flex'>
						<div className='flex-col justify-center items-center gap-5 flex'>
							<div className='relative'>
								<h1 className="text-center text-white text-7xl font-bold font-['Pretendard'] leading-[72px] z-10 relative">딱!</h1>
								<EffectIcon />
							</div>
							<h1 className="text-center text-white text-[56px] font-bold font-['Pretendard'] leading-[78.40px]">
								내가 원하는 결과를 위한 <br />
								프롬프트 여기 다 모았습니다.
							</h1>
						</div>
						<h2 className="opacity-80 text-center text-white text-[28px] font-medium font-['Pretendard'] leading-[44.80px]">
							ChatGPT 더 스마트하게, 하루를 생산적으로 만들어주는 파트너
							<br />
							AI 전문 프롬프트 생성 플랫폼
						</h2>
					</div>
					<Button
						color='accent'
						className="w-60 h-14 bg-teal-200 border-none rounded-[99px] text-white text-xl font-semibold font-['Pretendard'] leading-tight"
					>
						플리퍼 경험 해보기
					</Button>
				</div>
			</section>
			<section className='bg-white flex flex-col w-full'>
				<div className='relative py-[88px]'>
					<Marquee gradient={false} speed={80} className='absolute flex uppercase text-neutral-50 text-7xl font-bold'>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
							<div key={i} className='mr-10 whitespace-nowrap overflow-hidden'>
								{'PLIPER'}
							</div>
						))}
					</Marquee>
				</div>
				<div className='flex flex-col min-h-[660px] justify-center items-center'>
					<div className='flex flex-col items-center'>
						<h1 className="text-black text-5xl font-normal font-['Pretendard'] leading-[67.20px]">AI 기술 ChatGPT</h1>
						<h2 className="text-black text-5xl font-semibold font-['Pretendard'] leading-[67.20px]">현재 잠잠해진 이유는 뭘까요?</h2>
					</div>
					<div className='flex flex-col min-w-[1260px] min-h-[510px] pt-[76px] gap-[100px]'>
						<div className='flex flex-col gap-6'>
							<div className='relative'>
								<span className="text-black text-[40px] font-bold font-['Pretendard'] leading-10">AI 사용이 </span>
								<span className="text-teal-200 text-[40px] font-bold font-['Pretendard'] leading-10">어려워요</span>
								<FlowerIcon className='absolute bottom-[-20px] left-[230px]' />
							</div>
							<span className="text-black text-[22px] font-normal font-['Pretendard'] leading-[37.40px]">
								도구가 많아지고 있는 만큼 인터페이스 사용이 복잡해짐으로써 <br />
								많은 사람들은 다양한 개인 업무 활용에 어려움을 겪고 있어요.
							</span>
						</div>
						<div className='flex flex-col gap-6 items-end'>
							<div className='relative'>
								<span className="text-amber-400 text-[40px] font-bold font-['Pretendard'] leading-10">할루시네이션</span>
								<span className="text-black text-[40px] font-bold font-['Pretendard'] leading-10">이 뭐에요?</span>
								<ScratchIcon className='absolute bottom-[-12px] left-[-50px]' />
							</div>
							<span className="text-right text-black text-[22px] font-normal font-['Pretendard'] leading-[37.40px]">
								프롬프트에 질문을 올바르게 입력하지 못하면 GPT의 잘못된 정보, <br />
								할루시네이션이 발생됩니다. 이로 인해 추가적 학습이 필요하며, 피로도가 높아요.
							</span>
						</div>
					</div>
				</div>
				<div className='relative py-[88px]'>
					<Marquee gradient={false} speed={80} className='absolute flex uppercase text-neutral-50 text-7xl font-bold'>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
							<div key={i} className='mr-10 whitespace-nowrap overflow-hidden'>
								{'PLIPER'}
							</div>
						))}
					</Marquee>
				</div>
			</section>
		</>
	);
};

RendingPage.layout = 'blank';

export default RendingPage;
