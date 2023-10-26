import PromptItem from '@/src/components/modules/prompt/list/PromptItem';
import { useGetMyPromptsByReliability } from '@/src/fetchers/prompt/my-prompt';
import { formatDateToKorean } from '@/src/utils/dateUtils';

const MyPromptReliabilityList = () => {
	const { data } = useGetMyPromptsByReliability({ page: 1, limit: 10 });
	return (
		<>
			{data?.prompts.map((prompt) => (
				<PromptItem
					key={prompt.promptId}
					personaType={prompt.personaType}
					category1Text={prompt.category1Text}
					userEmail={prompt.userEmail}
					updateDateTime={formatDateToKorean(prompt.updateDateTime)}
					title={prompt.title}
					likeCount={prompt.likeCount}
					viewCount={prompt.viewCount}
					percents={prompt.percents}
					layoutWidthClassName='w-[464px]'
					titleWidthClassName='w-[276px]'
				/>
			))}
		</>
	);
};

export default MyPromptReliabilityList;
