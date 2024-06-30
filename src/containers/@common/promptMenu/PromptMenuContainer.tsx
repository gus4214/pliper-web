import PromptMenu from '@/src/containers/@common/promptMenu/PromptMenu';
import { useGetAiTools, useGetPromptCategory } from '@/src/fetchers/prompt';
import { PromptCategories } from '@/src/fetchers/prompt/types';

const PromptMenuContainer = () => {
	const { data: categoryData } = useGetPromptCategory();
	const { data: aiToolsData } = useGetAiTools({ type: 'LLM' });

	const categories: PromptCategories = categoryData?.isError ? categoryData : { jobCategories: [], dailyCategories: [] };
	const aiTools = aiToolsData?.tools || [];

	return <PromptMenu categories={categories} aiTools={aiTools} />;
};

export default PromptMenuContainer;
