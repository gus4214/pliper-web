import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import PromptDetailInfoHeader from '@/src/components/modules/prompt/detail/PromptDetailInfoHeader';
import PromptTemplateSection from '@/src/components/modules/prompt/detail/PromptTemplateSection';
import { Prompt } from '@/src/fetchers/prompt/types';
import React from 'react';

interface PromptDetailTemplateProps {
	prompt: Prompt;
}

const PromptDetailTemplate: React.FC<PromptDetailTemplateProps> = ({ prompt }) => {
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
		userNickname,
		updateDateTime,
		description,
	} = prompt;

	return (
		<>
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
					userNickname={userNickname}
					updateDateTime={updateDateTime}
					description={description}
				/>
				<div className='mt-12' />
				<AsyncComponentBoundary>
					<PromptTemplateSection parameters={parameters} template={template} promptId={promptId} />
				</AsyncComponentBoundary>
			</div>
		</>
	);
};

export default PromptDetailTemplate;
