import AiTools from '@/src/components/organisms/main/aiTool/AiTools';
import { useGetAiTools } from '@/src/fetchers/prompt';

const AiToolsContainer = () => {
	const { data } = useGetAiTools({ type: 'LLM' });

	const handleToolClick = (url: string) => {
		window.open(url, '_blank');
	};
	return <AiTools aiTools={data?.tools || []} onToolClick={handleToolClick} />;
};

export default AiToolsContainer;
