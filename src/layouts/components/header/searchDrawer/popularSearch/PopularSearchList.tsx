import { useGetTopSearched } from '@/src/fetchers/search';
import React from 'react';

const sample = [
	{
		keyword: '한국 옷 브랜드 중 할인을 많이 하고 있는 브랜드 사이트를 알려줘',
		score: 0,
	},
	{
		keyword: '초전도체가 왜 중요한지 알려줘',
		score: 1,
	},
	{
		keyword: '된장찌개 맛있게 끓이는 방법을 보고서 형식으로 만들어줘',
		score: 2,
	},
	{
		keyword: '요즘 최대 사회적인 이슈는 무엇일까?',
		score: 3,
	},
	{
		keyword: '우리 집 주변에서 사람들이 많이 가고 후기가 좋은 병원을 알려줘',
		score: 4,
	},
];

const PopularSearchList = () => {
	const { data } = useGetTopSearched();

	return (
		<div className='flex flex-col justify-start items-start gap-3'>
			{sample.map((v, i) => (
				<span className='text-neutral-800 text-sm font-normal' key={i}>
					{v.keyword}
				</span>
			))}
		</div>
	);
};

export default PopularSearchList;
