import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const KeywordSearchResult: React.FC = () => {
	const router = useRouter();
	const { keyword } = router.query;

	return (
		<div>
			<h1>{keyword}에 대한 검색 결과</h1>
		</div>
	);
};

export default KeywordSearchResult;
