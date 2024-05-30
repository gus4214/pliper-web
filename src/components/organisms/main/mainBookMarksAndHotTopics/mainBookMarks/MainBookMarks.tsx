import MainBookMarkItem from '@/src/components/organisms/main/mainBookMarksAndHotTopics/mainBookMarks/MainBookMarkItem';
import { Prompt } from '@/src/fetchers/prompt/types';
import { addHttpsPrefix, formatNumber } from '@/src/utils/utils';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Badge } from 'react-daisyui';

interface MainBookMarksProps {
	bestClip: Prompt[];
}

const MainBookMarks: FC<MainBookMarksProps> = ({ bestClip }) => {
	const router = useRouter();

	return (
		<div className='flex gap-12'>
			{bestClip.slice(0, 3).map((v, i) => {
				return (
					<MainBookMarkItem
						key={v.promptId}
						src={addHttpsPrefix(v.imageUrl) || '/images/work.jpeg'}
						title={v.title}
						user={v.userNickname}
						badge={
							<Badge color='accent' className='w-[60px] h-8 p-2.5 rounded'>
								<span className='text-white text-lg font-bold leading-[18px]'>{formatNumber(i + 1)}</span>
							</Badge>
						}
						onClick={() => router.push(`/prompt/${v.promptId}`)}
					/>
				);
			})}
		</div>
	);
};

export default MainBookMarks;
