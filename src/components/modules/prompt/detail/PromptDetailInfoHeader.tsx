import PromptCategoryChip from '@/src/components/atoms/chip/PromptCategoryChip';
import LikeAndViewLabel from '@/src/components/atoms/label/LikeAndViewLabel';
import { timeAgo } from '@/src/utils/dateUtils';
import { PersonaType } from '@/src/fetchers/prompt/types';
import { promptKoTextOfPersona } from '@/src/configs/prompt';
import { Button, Divider, Dropdown } from 'react-daisyui';
import React from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { usePromptHandler } from '@/src/hooks/promptController';
import { useRouter } from 'next/router';

interface PromptDetailInfoHeaderProps {
	personaType: PersonaType;
	category1Text: string;
	category2Text: string;
	title: string;
	llmModel: string;
	description: string;
	updateDateTime?: string;
	userNickname?: string;
	promptId?: number;
	isCreator?: boolean;
	likeCount?: number;
	viewCount?: number;
	percents?: number;
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
	userNickname,
	llmModel,
	updateDateTime,
	description,
	preview,
	promptId,
	isCreator,
}) => {
	const layoutWidth = preview ? 'w-[896px]' : 'w-[1128px] ';
	const { goPromptEditPage, deletePrompt } = usePromptHandler();
	const router = useRouter();

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
						<div className='flex-col justify-start items-start gap-2.5 flex w-[100%]'>
							<h1 className='text-black text-xl font-bold'>{title}</h1>
							{!preview && (
								<div className='justify-between items-center flex w-[100%]'>
									<div className={'flex justify-start items-center gap-2 '}>
										<span className='text-center text-neutral-400 text-[13px] font-normal'>{userNickname}</span>
										<div className='w-1 h-1 bg-neutral-200 rounded-full' />
										<span className='text-center text-neutral-400 text-[13px] font-normal'>{timeAgo(updateDateTime!)}</span>
									</div>
									{isCreator && promptId && (
										<div className={'flex'}>
											<Dropdown end>
												<Button tag='label' tabIndex={0} color='ghost' className='p-1' shape='circle' size='sm'>
													<EllipsisVerticalIcon className={'h-6 w-6 text-neutral-400'} />
												</Button>
												<Dropdown.Menu className='w-[130px] rounded-lg z-10 shadow  border border-neutral-200 py-1.5 px-0.1'>
													<Dropdown.Item className=' justify-center' onClick={() => goPromptEditPage(promptId)}>
														<PencilSquareIcon className={'h-5 w-5 text-neutral-400'} />
														<span className={'text-black text-[14px] font-normal'}>수정하기</span>
													</Dropdown.Item>
													<Divider className='m-0' />
													<Dropdown.Item
														className='justify-center'
														onClick={() => deletePrompt(promptId, () => router.back())}
													>
														<TrashIcon className={'h-5 w-5 text-neutral-400'} />
														<span className={'text-black text-[14px] font-normal'}>삭제하기</span>
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-start pt-4 pb-6'>
					<h2 className='text-black text-base font-normal whitespace-break-spaces'>{description}</h2>
				</div>
			</div>
		</div>
	);
};

export default PromptDetailInfoHeader;
