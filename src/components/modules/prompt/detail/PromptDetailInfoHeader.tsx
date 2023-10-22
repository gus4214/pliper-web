import PromptCategoryChip from '@/src/components/atoms/chip/PromptCategoryChip';
import LikeAndViewLabel from '@/src/components/atoms/label/LikeAndViewLabel';
import { formatDateToKorean } from '@/src/utils/dateUtils';

interface PromptDetailInfoHeaderProps {
	personaType: string;
	category1Text: string;
	category2Text: string;
	likeCount?: number;
	viewCount?: number;
	percents?: number;
	title: string;
	userEmail?: string;
	llmModel: string;
	updateDateTime?: string;
	description: string;
	preview?: boolean;
}

const PromptDetailInfoHeader: React.FC<PromptDetailInfoHeaderProps> = ({
	personaType,
	category1Text,
	category2Text,
	title,
	likeCount,
	viewCount,
	percents,
	userEmail,
	llmModel,
	updateDateTime,
	description,
	preview,
}) => {
	const layoutWidth = preview ? 'w-[896px]' : 'w-[1128px] ';

	return (
		<div className='w-full flex justify-center'>
			<div className={`${layoutWidth} flex flex-col`}>
				<div className='w-full py-4 border-b border-neutral-200 justify-between items-center inline-flex'>
					<div className='grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex'>
						<div className='self-stretch justify-between items-center gap-4 inline-flex'>
							<div className='justify-start items-start gap-2 flex'>
								<PromptCategoryChip text={personaType} />
								<PromptCategoryChip text={category1Text} color='light' />
								<PromptCategoryChip text={category2Text} color='gray' />
								<PromptCategoryChip text={llmModel} color='gray' />
							</div>
							{!preview && <LikeAndViewLabel likeCount={String(likeCount)} viewCount={String(viewCount)} percents={percents} />}
						</div>
						<div className='flex-col justify-start items-start gap-2.5 flex'>
							<h1 className='text-black text-xl font-bold'>{title}</h1>
							{!preview && (
								<div className='justify-start items-center gap-2 flex'>
									<span className='text-center text-neutral-400 text-[13px] font-normal'>{userEmail}</span>
									<div className='w-1 h-1 bg-neutral-200 rounded-full' />
									<span className='text-center text-neutral-400 text-[13px] font-normal'>
										{formatDateToKorean(updateDateTime!)}
									</span>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-start pt-4 gap-12'>
					<span className='text-black text-base font-normal whitespace-break-spaces'>{description}</span>
					<span className='text-neutral-400 text-[13px] font-normal'>#기획#기획초안</span>
				</div>
			</div>
		</div>
	);
};

export default PromptDetailInfoHeader;
