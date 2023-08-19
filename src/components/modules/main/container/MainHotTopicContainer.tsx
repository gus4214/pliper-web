import MainHotTopicBox from '@/src/components/atoms/box/main/MainHotTopicBox';
import SelectChip from '@/src/components/atoms/chip/SelectChip';
import React, { useState } from 'react';
import { Badge } from 'react-daisyui';

const sample = [
	{
		id: 0,
		text: '직장인 문서 활용 방법',
	},
	{
		id: 1,
		text: '신입사원 업무 팁',
	},
	{
		id: 2,
		text: '공유 이메일 전송 방법',
	},
	{
		id: 3,
		text: '프론트엔드 개발 초기방법',
	},
	{
		id: 4,
		text: 'ChatGPT',
	},
	{
		id: 5,
		text: '면법 관련 질문 리스트',
	},
	{
		id: 6,
		text: '항공권 누구보다 더 싸게 사는 방법',
	},
	{
		id: 7,
		text: '무더운 여름 시원하게 보내기',
	},
];

const MainHotTopicContainer = () => {
	const [selectedId, setSelectedId] = useState<number | null>(null);

	return (
		<MainHotTopicBox>
			<h1 className='text-center text-black text-2xl font-bold leading-normal'>이번 한 주, 가장 인기있는 검색어</h1>
			<div className='flex justify-center items-center gap-x-2 gap-y-3 w-[722px] flex-wrap'>
				{sample.map((value) => (
					<SelectChip
						key={value.id}
						label={value.text}
						selected={value.id === selectedId}
						rounded
						onClick={() => {
							setSelectedId((prevSelectedId) => (prevSelectedId === value.id ? null : value.id));
						}}
					/>
				))}
			</div>
		</MainHotTopicBox>
	);
};

export default MainHotTopicContainer;
