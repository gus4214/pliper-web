import Image from 'next/image';
import { NextPage } from 'next';
import { Button } from 'react-daisyui';
import EffectIcon from '@/src/components/atoms/icons/about/EffectIcon';
import Marquee from 'react-fast-marquee';
import FlowerIcon from '@/src/components/atoms/icons/about/FlowerIcon';
import ScratchIcon from '@/src/components/atoms/icons/about/ScratchIcon';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import FadeIn from 'react-fade-in';
import React, { useEffect, useRef, useState } from 'react';
import { Seo } from '@/src/components/modules/@common/seo/Seo';

interface AboutCardProps {
	src: string;
	title: string;
	subTitle: React.ReactNode;
}

const AboutCard: React.FC<AboutCardProps> = ({ src, title, subTitle }) => {
	return (
		<>
			<Seo title={'서비스 소개'} />
			<div className='p-10 gap-6 w-[476px] h-[276px] bg-white bg-opacity-20 hover:shadow-2xl hover:bg-opacity-100 group rounded-2xl flex flex-col items-center cursor-pointer transition duration-300'>
				<img src={src} alt={title} className='transition duration-300' />
				<div className='flex flex-col items-center gap-4'>
					<span className="group-hover:text-black text-white text-2xl font-bold font-['Pretendard'] leading-normal transition duration-300">
						{title}
					</span>
					<span className="group-hover:text-black text-center text-white text-base font-normal font-['Pretendard'] leading-relaxed transition duration-300">
						{subTitle}
					</span>
				</div>
			</div>
		</>
	);
};

const RendingPage: NextPage = () => {
	const { push } = useRouter();
	const [isVisibleFirst, setIsVisibleFirst] = useState(false);
	const [isVisibleSecond, setIsVisibleSecond] = useState(false);
	const firstSectionRef = useRef(null);
	const secondSectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target === firstSectionRef.current) {
							setIsVisibleFirst(true);
							observer.unobserve(firstSectionRef.current);
						} else if (entry.target === secondSectionRef.current) {
							setIsVisibleSecond(true);
							observer.unobserve(secondSectionRef.current);
						}
					}
				});
			},
			{ threshold: 0.1 }
		);

		if (firstSectionRef.current) {
			observer.observe(firstSectionRef.current);
		}
		if (secondSectionRef.current) {
			observer.observe(secondSectionRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div className='overflow-x-hidden'>
			<section className='flex relative w-full min-h-[800px] justify-center items-center bg-black'>
				<Image src='/images/about/about_bg01.png' alt='background-image-2' priority fill style={{ objectFit: 'cover' }} />
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
						onClick={() => push('/')}
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
					<div className='flex flex-col min-w-[1260px] min-h-[510px] pt-[124px] gap-[100px]'>
						<FadeIn visible={isVisibleFirst} delay={200}>
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
							<div ref={firstSectionRef} className='flex flex-col gap-6 items-end mt-[180px]'>
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
						</FadeIn>
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
			<section className='relative w-full py-[200px] flex justify-center items-center bg-[#223F61]'>
				<div className='absolute top-0 left-2/1 w-[1920px] h-full'>
					<Image src='/images/about/about_bg02.png' alt='background-image-2' priority fill style={{ objectFit: 'cover' }} />
				</div>
				<div className='w-[1176px] flex flex-col justify-center items-center z-10'>
					<div className='p-2 bg-white bg-opacity-20 flex justify-center items-center'>
						<span className="text-white text-[56px] font-semibold font-['Pretendard'] leading-[56px]">
							AI 전문 프롬프트 <span className='font-bold'>플리퍼</span>
						</span>
					</div>
					<div className="text-center text-white text-[28px] font-medium font-['Pretendard'] leading-[44.80px] pt-8">
						AI 기술을 전문가처럼 쓸 수 있게 위해 만들었어요!
						<br />
						하루를 더욱 생산적으로 만들어주는 AI 파트너, 플리퍼와 함께라면 가능해요.
					</div>
					<div className='w-full flex flex-col pt-[200px]'>
						<FadeIn visible={isVisibleSecond} delay={100}>
							<div className='flex justify-end'>
								<AboutCard
									src='/images/about/icon_01.svg'
									title='업무의 생산성'
									subTitle={
										<>
											초보자부터 전문가까지, 누구나 쉽게 업무의 효율을
											<br /> 높일 수 있어 하루를 <span className='font-semibold'>효과적</span>으로 보낼 수 있어요.
										</>
									}
								/>
							</div>
							<div ref={secondSectionRef} className='flex justify-start mt-[48px]'>
								<AboutCard
									src='/images/about/icon_02.svg'
									title='플리퍼만의 플립 기능'
									subTitle={
										<>
											플리퍼는 사용자의 업무 능력 향상을 위해 <br />
											<span className='font-semibold'>세컨드 브레인</span> 역할을 수행할 수 있어요.
										</>
									}
								/>
							</div>
							<div className='flex justify-end mt-[48px]'>
								<AboutCard
									src={'/images/about/icon_03.svg'}
									title='커스텀 템플릿 제공'
									subTitle={
										<>
											LLM의 사전 지식 없이도 필요한 프롬프트를
											<br /> <span className='font-semibold'>손쉽게 사용</span>할 수 있어요.
										</>
									}
								/>
							</div>
							<div className='flex justify-start mt-[48px]'>
								<AboutCard
									src='/images/about/icon_04.svg'
									title='정확한 프롬프트'
									subTitle={
										<>
											사용자간 피드백을 통해 할루시네이션을 최소화 하며,
											<br />
											<span className='font-semibold'>검증된 AI 프롬프트</span>를 선별하는데 도움을 드려요.
										</>
									}
								/>
							</div>
						</FadeIn>
					</div>
				</div>
			</section>
			<section className='bg-neutral-50 flex justify-center items-center min-h-[152px]'>
				<div className='text-center'>
					<span className="text-black text-xl font-normal font-['Pretendard'] leading-9">
						다양한 프롬프트를 <span className='font-medium'>무료</span>로 경험해보고, <br />
						플리퍼가 여러분의 하루에 어떤 변화를 가져다 줄 수 있는지 <span className='font-medium'>직접 확인해보세요!</span>
					</span>
				</div>
			</section>
			<div
				className='min-h-[80px] h-[80px] bg-teal-200 hover:bg-teal-300 active:bg-teal-400 flex justify-center items-center sticky bottom-0 z-30 cursor-pointer'
				onClick={() => push('/')}
			>
				<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none'>
					<g opacity='0.5'>
						<path
							d='M9.82614 5.31646C13.9754 4.77776 18.2059 4.5 22.5006 4.5C26.7948 4.5 31.0249 4.7777 35.1738 5.3163C39.0183 5.81539 41.7567 9.03874 41.9846 12.7699C41.333 12.5523 40.6424 12.4079 39.9201 12.348C37.1429 12.1175 34.3346 12 31.4999 12C28.6653 12 25.857 12.1175 23.08 12.348C18.3634 12.7394 15 16.7293 15 21.2164V29.7874C15 33.1687 16.9094 36.2653 19.8656 37.7557L14.5607 43.0607C14.1317 43.4897 13.4865 43.618 12.926 43.3858C12.3655 43.1536 12 42.6067 12 42V33.9411C11.273 33.8632 10.5483 33.7773 9.82617 33.6836C5.80932 33.1621 3 29.6666 3 25.7253V13.2748C3 9.33344 5.80931 5.83797 9.82614 5.31646Z'
							fill='white'
						/>
						<path
							d='M31.4999 15C28.7482 15 26.0227 15.114 23.3281 15.3377C20.2495 15.5932 18 18.2056 18 21.2164V29.7874C18 32.8027 20.2559 35.4166 23.3384 35.6683C25.8261 35.8713 28.3401 35.9824 30.8768 35.9981L36.4393 41.5607C36.8683 41.9897 37.5135 42.118 38.074 41.8858C38.6345 41.6536 39 41.1067 39 40.5V35.7202C39.2207 35.7037 39.4412 35.6864 39.6615 35.6684C42.744 35.4169 45 32.803 45 29.7876V21.2164C45 18.2056 42.7505 15.5932 39.6719 15.3377C36.9772 15.114 34.2517 15 31.4999 15Z'
							fill='white'
						/>
					</g>
				</svg>
				<div className='text-center ml-2.5 mr-1'>
					<span className="text-white text-lg font-normal font-['Pretendard'] leading-[18px]">
						3초 만에 플리퍼 가입하고, 관심사에 맞는{' '}
					</span>
					<span className="text-white text-lg font-semibold font-['Pretendard'] leading-[18px]">프롬프트를 경험해보세요</span>
				</div>
				<ArrowRightCircleIcon className='w-6 h-6 text-white' />
			</div>
		</div>
	);
};

RendingPage.layout = 'blank';

export default RendingPage;
