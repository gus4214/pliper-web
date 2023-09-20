import LikeAndViewLabel from '@/src/components/atoms/label/LikeAndViewLabel';
import React from 'react';

const PromptDetailTemplate = () => {
	return (
		<div className='w-full flex justify-center mx-auto pt-[57px] pb-[104px]'>
			<div className='w-[1128px] flex flex-col'>
				<div className='w-[1128px] h-[115px] py-4 border-b border-neutral-200 justify-between items-center inline-flex'>
					<div className='grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex'>
						<div className='self-stretch justify-between items-center gap-4 inline-flex'>
							<div className='justify-start items-start gap-2 flex'>
								<div className='w-[39px] px-2 py-1.5 bg-teal-400 rounded justify-center items-center gap-2 flex'>
									<div className='text-center text-white text-[13px] font-medium leading-[13px]'>일상</div>
								</div>
								<div className='w-[39px] px-2 py-1.5 bg-emerald-300 bg-opacity-20 rounded justify-center items-center gap-2 flex'>
									<div className='text-center text-teal-400 text-[13px] font-medium leading-[13px]'>연애</div>
								</div>
								<div className='w-[84px] px-2 py-1.5 bg-neutral-100 rounded justify-center items-center gap-2 flex'>
									<div className='text-center text-neutral-400 text-[13px] font-medium leading-[13px]'>답장대신하기</div>
								</div>
								<div className='w-16 px-2 py-1.5 bg-neutral-100 rounded justify-center items-center gap-2 flex'>
									<div className='text-center text-neutral-400 text-[13px] font-medium leading-[13px] whitespace-nowrap'>
										GPT 3.5
									</div>
								</div>
							</div>
							<div className='justify-center items-center gap-1.5 flex'>
								<LikeAndViewLabel likeCount={'10'} viewCount={'20'} percent='40' />
							</div>
						</div>
						<div className='flex-col justify-start items-start gap-2.5 flex'>
							<div className='text-black text-xl font-bold leading-tight'>용기없는 그대를 위해 ~ 대신 카톡!</div>
							<div className='justify-start items-center gap-2 inline-flex'>
								<div className='text-center text-neutral-400 text-[13px] font-normal leading-[13px]'>@seh6036</div>
								<div className='w-1 h-1 bg-neutral-200 rounded-full' />
								<div className='text-center text-neutral-400 text-[13px] font-normal leading-[13px]'>2023년 8월 11일</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PromptDetailTemplate;
