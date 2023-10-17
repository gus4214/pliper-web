import PromptCategoryChip from '@/src/components/atoms/chip/PromptCategoryChip';
import PromptDetailInfoHeader from '@/src/components/modules/prompt/detail/PromptDetailInfoHeader';
import PromptTemplateSection from '@/src/components/modules/prompt/detail/PromptTemplateSection';
import { useGetPrompt } from '@/src/fetchers/prompt';
import { useRouter } from 'next/router';
import React from 'react';

interface PromptDetailTemplateProps {
	token?: string;
}

const PromptDetailTemplate: React.FC<PromptDetailTemplateProps> = ({ token }) => {
	const { query } = useRouter();

	const { data } = useGetPrompt(query.id as string, token);

	const {
		parameters,
		template,
		personaType,
		category1Text,
		category2Text,
		title,
		likeCount,
		viewCount,
		percents,
		userEmail,
		updateDateTime,
		description,
		llmModel,
	} = data!;

	return (
		<div className='w-[1176px] px-6 flex flex-col items-center mx-auto pt-[57px] pb-[104px]'>
			<PromptDetailInfoHeader
				personaType={personaType}
				category1Text={category1Text}
				category2Text={category2Text}
				title={title}
				likeCount={likeCount}
				viewCount={viewCount}
				percents={percents}
				userEmail={userEmail}
				llmModel={llmModel}
				updateDateTime={updateDateTime}
				description={description}
			/>
			<div className='mt-12' />
			<PromptTemplateSection parameters={parameters} template={template} />
		</div>
	);
};

export default PromptDetailTemplate;
