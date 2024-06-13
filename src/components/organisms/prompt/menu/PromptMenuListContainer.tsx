import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import MenuList from '@/src/components/organisms/prompt/menu/MenuList';
import PromptMenuList from '@/src/components/organisms/prompt/menu/PromptMenuList';
import PromptMenuListSkeleton from '@/src/components/organisms/prompt/menu/PromptMenuListSkeleton';
import { useGetAiTools, useGetPromptCategory } from '@/src/fetchers/prompt';

const PromptMenuListContainer = () => {
	const { data: categoryData } = useGetPromptCategory();
	const { data: aiToolsData } = useGetAiTools({ type: 'LLM' });

	if (categoryData?.isError) {
		return <></>;
	}

	return (
		// <AsyncComponentBoundary pendingFallback={<PromptMenuListSkeleton />}>
		// 	<PromptMenuList />
		// </AsyncComponentBoundary>
		<MenuList categories={categoryData!} aiTools={aiToolsData?.tools || []} />
	);
};

export default PromptMenuListContainer;
