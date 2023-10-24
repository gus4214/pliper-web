import { useGetMyPromptsByView } from '@/src/fetchers/prompt/my-prompt';
import React from 'react';

const MyPromptHistoryList = () => {
	const { data } = useGetMyPromptsByView({ page: 1, limit: 10 });

	return <div></div>;
};

export default MyPromptHistoryList;
