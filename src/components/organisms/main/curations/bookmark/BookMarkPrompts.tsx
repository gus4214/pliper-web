import BookMarkPromptItem from '@/src/components/organisms/main/curations/bookmark/BookMarkPromptItem';
import { Prompt } from '@/src/fetchers/prompt/types';
import { addHttpsPrefix, formatNumber } from '@/src/utils/utils';
import { FC } from 'react';
import { Badge } from 'react-daisyui';

interface BookMarkPromptsProps {
	prompts: Prompt[];
	onPromptClick: (promptId: number) => void;
}

const BookMarkPrompts: FC<BookMarkPromptsProps> = ({ prompts, onPromptClick }) => {
	return (
		<div className='flex flex-wrap justify-center gap-12'>
			{prompts.slice(0, 3).map((v, i) => {
				return (
					<BookMarkPromptItem
						key={v.promptId}
						src={addHttpsPrefix(v.imageUrl) || '/images/work.jpeg'}
						title={v.title}
						user={v.userNickname}
						badge={
							<Badge color='accent' className='w-[60px] h-8 p-2.5 rounded'>
								<span className='text-white text-lg font-bold leading-[18px]'>{formatNumber(i + 1)}</span>
							</Badge>
						}
						onClick={() => onPromptClick(v.promptId)}
					/>
				);
			})}
		</div>
	);
};

export default BookMarkPrompts;
