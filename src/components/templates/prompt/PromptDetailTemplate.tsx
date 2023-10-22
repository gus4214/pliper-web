import PromptDetailInfoHeader from '@/src/components/modules/prompt/detail/PromptDetailInfoHeader';
import PromptTemplateSection from '@/src/components/modules/prompt/detail/PromptTemplateSection';
import { useGetPrompt } from '@/src/fetchers/prompt';
import { useRouter } from 'next/router';
import React from 'react';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';

interface PromptDetailTemplateProps {
	token?: string;
}

const PromptDetailTemplate: React.FC<PromptDetailTemplateProps> = ({ token }) => {
	const { query } = useRouter();

	const { data } = useGetPrompt(query.id as string, token);

	const {
		parameters,
		template,
		promptId,
		personaType,
		category1Text,
		category2Text,
		title,
		likeCount,
		viewCount,
		percents,
		llmModel,
		userEmail,
		updateDateTime,
		description,
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
				llmModel={llmModel}
				userEmail={userEmail}
				updateDateTime={updateDateTime}
				description={description}
			/>
			<div className='mt-12' />
			<AsyncComponentBoundary>
				<PromptTemplateSection parameters={parameters} template={template} promptId={promptId} />
			</AsyncComponentBoundary>
		</div>
	);
};

export default PromptDetailTemplate;
