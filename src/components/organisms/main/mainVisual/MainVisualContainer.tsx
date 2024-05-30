import Image from 'next/image';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import MainBookMarkList from '@/src/components/organisms/main/mainVisual/MainBookMarkList';
import MainBookMarkListSkeleton from '@/src/components/organisms/main/mainVisual/MainBookMarkListSkeleton';
import { Prompt } from '@/src/fetchers/prompt/types';
import React from 'react';

export interface MainVisualContainerProps {
	bestClip: Prompt[];
	mainImage: string;
}

const MainVisualContainer: React.FC<MainVisualContainerProps> = ({ bestClip, mainImage }) => {
	return (
		<section className='flex justify-center items-center w-full h-[240px] relative'>
			<Image src={mainImage} fill className='absolute z-0 object-cover' alt='main-visual' priority />
			<div className='w-[672px] flex flex-col items-center gap-14 absolute top-[50px]'>
				<h1 className='text-center text-white text-[32px] font-bold'>가장 많은 북마크로 저장된 프롬프트</h1>
				<AsyncComponentBoundary pendingFallback={<MainBookMarkListSkeleton count={3} />}>
					<MainBookMarkList bestClip={bestClip} />
				</AsyncComponentBoundary>
			</div>
		</section>
	);
};

export default React.memo(MainVisualContainer);
