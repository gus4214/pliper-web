import PromptCategoryChip from '@/src/components/atoms/chip/PromptCategoryChip';
import LikeAndViewLabel from '@/src/components/atoms/label/LikeAndViewLabel';

interface PromptDetailInfoHeaderProps {
	personaType: string;
	category1Text: string;
	category2Text: string;
	likeCount: number;
	viewCount: number;
	percents: number;
	title: string;
	userEmail: string;
	updateDateTime: string;
	description: string;
}

const PromptDetailInfoHeader: React.FC = () => {
	return (
		<div className='w-full flex justify-center'>
			<div className='w-[1128px] flex flex-col'>
				<div className='w-[1128px] h-[115px] py-4 border-b border-neutral-200 justify-between items-center inline-flex'>
					<div className='grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex'>
						<div className='self-stretch justify-between items-center gap-4 inline-flex'>
							<div className='justify-start items-start gap-2 flex'>
								<PromptCategoryChip text='일상' />
								<PromptCategoryChip text='연애' color='light' />
								<PromptCategoryChip text='답장대신하기' color='gray' />
							</div>
							<LikeAndViewLabel likeCount={'10'} viewCount={'20'} percent='40' />
						</div>
						<div className='flex-col justify-start items-start gap-2.5 flex'>
							<h1 className='text-black text-xl font-bold'>용기없는 그대를 위해 ~ 대신 카톡!</h1>
							<div className='justify-start items-center gap-2 flex'>
								<span className='text-center text-neutral-400 text-[13px] font-normal'>@seh6036</span>
								<div className='w-1 h-1 bg-neutral-200 rounded-full' />
								<span className='text-center text-neutral-400 text-[13px] font-normal'>2023년 8월 11일</span>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-start pt-4 gap-12'>
					<span className='text-black text-base font-normal'>
						아래 프롬프트 템플릿은 기획 초안에 작성 가능한 템플릿입니다.
						<br />
						아래 영역에서 본인이 기획하고자하는 내용 Content와 Tone 그리고 User 부분을 입력해서 사용해주세요
						<br />
						해당 기획 기반으로 정보 분석에 도움을 줍니다.
					</span>
					<span className='text-neutral-400 text-[13px] font-normal'>#기획#카드뉴스#기획초안</span>
				</div>
			</div>
		</div>
	);
};

export default PromptDetailInfoHeader;
