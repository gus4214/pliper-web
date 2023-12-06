import MainVisualBox from '@/src/components/atoms/box/main/MainVisualBox';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import MainBookMarkList from '@/src/components/modules/main/mainVisual/MainBookMarkList';
import MainBookMarkListSkeleton from '@/src/components/modules/main/mainVisual/MainBookMarkListSkeleton';
import { Prompt } from '@/src/fetchers/prompt/types';
import React from 'react';

export interface MainVisualContainerProps {
	bestClip: Prompt[];
	mainImage: string;
}

const MainVisualContainer: React.FC<MainVisualContainerProps> = ({ bestClip, mainImage }) => {
	return (
		<MainVisualBox src={mainImage}>
			<div className='w-[672px] flex flex-col items-center gap-14 absolute top-[50px]'>
				<h1 className='text-center text-white text-[32px] font-bold'>가장 많은 북마크로 저장된 프롬프트</h1>
				<AsyncComponentBoundary pendingFallback={<MainBookMarkListSkeleton count={3} />}>
					<MainBookMarkList bestClip={bestClip} />
				</AsyncComponentBoundary>
			</div>
		</MainVisualBox>
	);
};

export default React.memo(MainVisualContainer);
