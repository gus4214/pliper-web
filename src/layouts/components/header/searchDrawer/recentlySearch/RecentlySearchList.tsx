import { useGetSearchedByUser } from '@/src/fetchers/search';
import RecentlySearchItem from '@/src/layouts/components/header/searchDrawer/recentlySearch/RecentlySearchItem';

const sample = [
	{
		createDateTime: '',
		historyId: 0,
		keyword: '5월 서울에서 풍경사진 찍기 좋은 장소를 추천해줘',
	},
	{
		createDateTime: '',
		historyId: 1,
		keyword: '국내 경주에서 무더운날 가기 좋은 한적한 카페 추천를 추천해줘',
	},
	{
		createDateTime: '',
		historyId: 2,
		keyword: '하나의 서비스를 다양한 사용자 관점으로 해석한 글을 연도별 표로 정리해줘',
	},
	{
		createDateTime: '',
		historyId: 3,
		keyword: '역대 대통령의 순서를 목차별 표로 정리해줘',
	},
	{
		createDateTime: '',
		historyId: 4,
		keyword: '내가 보낸 이미지 2개를 합성해서 보여줘',
	},
];

const RecentlySearchList = () => {
	const { data } = useGetSearchedByUser();

	return (
		<div className='flex-col justify-start items-start gap-3 flex'>
			{sample.map((v) => (
				<RecentlySearchItem text={v.keyword} key={v.historyId} />
			))}
		</div>
	);
};

export default RecentlySearchList;
