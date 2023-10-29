import React from 'react';

interface SearchTitleEmptyTextProps {
	title: string;
}

const SearchTitleEmptyText: React.FC<SearchTitleEmptyTextProps> = ({ title }) => {
	return (
		<div className='w-full flex justify-center my-[10px]'>
			<span className='text-neutral-400 text-lg font-normal'>{`"${title}" 에 대한 검색결과가 없습니다.`}</span>
		</div>
	);
};

export default SearchTitleEmptyText;
