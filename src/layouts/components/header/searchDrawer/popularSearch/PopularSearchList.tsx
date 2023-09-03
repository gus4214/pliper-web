import { useGetTopSearched } from '@/src/fetchers/search';

const PopularSearchList = () => {
	const { data } = useGetTopSearched();

	const dataArray = data ? Object.values(data) : [];

	return (
		<div className='flex flex-col justify-start items-start gap-3'>
			{dataArray.map((v, i) => (
				<span className='text-neutral-800 text-sm font-normal' key={i}>
					{v.keyword}
				</span>
			))}
		</div>
	);
};

export default PopularSearchList;
