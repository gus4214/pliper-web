import PromptCategoryChip from '@/src/components/atoms/chip/PromptCategoryChip';
import LikeAndViewLabel from '@/src/components/atoms/label/LikeAndViewLabel';
import { formatDateToKorean } from '@/src/utils/dateUtils';
import {PersonaType} from "@/src/fetchers/prompt/types";
import {promptKoTextOfPersona} from "@/src/configs/prompt";

interface PromptDetailInfoHeaderProps {
	personaType: PersonaType;
	category1Text: string;
	category2Text: string;
	likeCount?: number;
	viewCount?: number;
	percents?: number;
	title: string;
	userEmail?: string;
	userNickname?: string;
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
	userNickname,
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
								<PromptCategoryChip text={promptKoTextOfPersona[personaType]} />
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
									<span className='text-center text-neutral-400 text-[13px] font-normal'>{userNickname}</span>
									<div className='w-1 h-1 bg-neutral-200 rounded-full' />
									<span className='text-center text-neutral-400 text-[13px] font-normal'>
										{formatDateToKorean(updateDateTime!)}
									</span>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-start pt-4 pb-12'>
					<span className='text-black text-base font-normal whitespace-break-spaces'>{description}</span>
				</div>
			</div>
		</div>
	);
};

export default PromptDetailInfoHeader;
