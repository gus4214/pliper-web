import MainBookMarkCard from '@/src/components/modules/main/card/MainBookMarkCard';
import { MainVisualContainerProps } from '@/src/components/modules/main/mainVisual/MainVisualContainer';
import { addHttpsPrefix, formatNumber } from '@/src/utils/utils';
import { useRouter } from 'next/router';
import React from 'react';
import { Badge } from 'react-daisyui';

const MainBookMarkList: React.FC<MainVisualContainerProps> = ({ bestClip }) => {
	const router = useRouter();

	return (
		<div className='gap-12 flex'>
			{bestClip.slice(0, 4).map((v, i) => {
				return (
					<MainBookMarkCard
						key={v.promptId}
						src={addHttpsPrefix(v.imageUrl) || '/images/work.jpeg'}
						title={v.title}
						user={v.userNickname}
						badge={
							<Badge color='accent' className='w-[60px] h-8 p-2.5 rounded'>
								<span className='text-white text-lg font-bold leading-[18px]'>{formatNumber(v.clipCount)}</span>
							</Badge>
						}
						onClick={() => router.push(`/prompt/${v.promptId}`)}
					/>
				);
			})}
		</div>
	);
};

export default MainBookMarkList;
