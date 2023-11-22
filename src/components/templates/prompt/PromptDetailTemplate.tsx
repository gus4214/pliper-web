import Loading from '@/src/components/atoms/loading/Loading';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import FloatButtonGroup from '@/src/components/modules/@common/floatButton/FloatButtonGroup';
import PromptDetailInfoHeader from '@/src/components/modules/prompt/detail/PromptDetailInfoHeader';
import PromptTemplateSection from '@/src/components/modules/prompt/detail/PromptTemplateSection';
import { Prompt } from '@/src/fetchers/prompt/types';
import React from 'react';
import { useAuthContext } from '@/src/hooks/context';

interface PromptDetailTemplateProps {
	prompt: Prompt;
}

const PromptDetailTemplate: React.FC<PromptDetailTemplateProps> = ({ prompt }) => {
	const { user } = useAuthContext();

	const {
		parameters,
		template,
		promptId,
		userEmail,
	} = prompt;

	return (
		<>
			<div className='w-[1176px] px-6 flex flex-col items-center mx-auto pt-[57px] pb-[104px] relative'>
				<FloatButtonGroup className='top-[192px] mr-[-634px]' />
				<PromptDetailInfoHeader
					{...prompt}
					isCreator={user && user.oauthEmail === userEmail}
				/>
				<div className='mt-12' />
				<AsyncComponentBoundary pendingFallback={<Loading />}>
					<PromptTemplateSection parameters={parameters} template={template} promptId={promptId} />
				</AsyncComponentBoundary>
			</div>
		</>
	);
};

export default PromptDetailTemplate;
