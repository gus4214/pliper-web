import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import MainBookMarks from '@/src/components/organisms/main/mainBookMarksAndHotTopics/mainBookMarks/MainBookMarks';
import MainBookMarksSkeleton from '@/src/components/organisms/main/mainBookMarksAndHotTopics/mainBookMarks/MainBookMarksSkeleton';
import MainHotTopicsContainer from '@/src/components/organisms/main/mainBookMarksAndHotTopics/mainHotTopics/MainHotTopicsContainer';
import { useGetCurationMain } from '@/src/fetchers/main';
import Image from 'next/image';
import React from 'react';

export interface MainBookMarksAndHotTopicsProps {
	mainImage: string;
}

const MainBookMarksAndHotTopics: React.FC<MainBookMarksAndHotTopicsProps> = ({ mainImage }) => {
	const { data } = useGetCurationMain({ dailyCategory: null, jobCategory: null });

	return (
		<>
			<section className='flex justify-center items-center w-full h-[240px] relative'>
				<Image src={mainImage} fill className='absolute z-0 object-cover' alt='main-Image' priority />
				<div className='flex flex-col items-center gap-14 absolute top-[50px]'>
					<h1 className='text-center text-white text-[32px] font-bold'>가장 많은 북마크로 저장된 프롬프트</h1>
					<AsyncComponentBoundary pendingFallback={<MainBookMarksSkeleton count={3} />}>
						<MainBookMarks bestClip={data?.bestClip || []} />
					</AsyncComponentBoundary>
				</div>
			</section>
			<MainHotTopicsContainer keywords={data?.keywords || []} />
		</>
	);
};

export default MainBookMarksAndHotTopics;
