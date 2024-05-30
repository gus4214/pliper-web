import Loading from '@/src/components/atoms/loading/Loading';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import FloatButtonGroup from '@/src/components/molecules/floatButton/FloatButtonGroup';
import PromptDetailInfoHeader from '@/src/components/organisms/prompt/detail/PromptDetailInfoHeader';
import PromptInteractionButtonGroup from '@/src/components/organisms/prompt/detail/PromptInteractionButtonGroup';
import PromptTemplateSection from '@/src/components/organisms/prompt/detail/PromptTemplateSection';
import { Prompt } from '@/src/fetchers/prompt/types';
import { useAuthContext } from '@/src/hooks/context';
import { usePromptTemplateCreate } from '@/src/hooks/promptDetailTemplate';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Button } from 'react-daisyui';
import mixpanel from 'mixpanel-browser';
import { PROMT_CREATE } from '@/src/configs/mixpanel';
import { useInView } from 'react-intersection-observer';

interface PromptDetailTemplateProps {
	prompt: Prompt;
}

const PromptDetailTemplate: React.FC<PromptDetailTemplateProps> = ({ prompt }) => {
	const { user } = useAuthContext();
	const { push } = useRouter();

	const { parameters, template, promptId, userEmail, llmModel } = prompt;

	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0,
	});

	const {
		filledTemplate,
		createPrompt,
		formHandler: { control },
	} = usePromptTemplateCreate({ parameters, template });

	return (
		<>
			<div className='w-[1176px] px-6 pt-6 mt-[28px] pb-[61px]  flex flex-col items-center mx-auto relative'>
				<FloatButtonGroup className='top-[192px] mr-[-634px]' />
				<PromptDetailInfoHeader {...prompt} isCreator={user && user.oauthEmail === userEmail} />
				<AsyncComponentBoundary pendingFallback={<Loading />}>
					<PromptTemplateSection
						promptId={promptId}
						llmModel={llmModel}
						parameters={parameters}
						filledTemplate={filledTemplate}
						control={control}
					/>
				</AsyncComponentBoundary>
				<div className='mt-8' />
				<div className={`w-full flex`} ref={ref} />
				<div className={`flex px-6  w-[1176px] rounded bottom-6 z-10   ${!inView ? `fixed` : ''}`}>
					<PromptInteractionButtonGroup
						className={`${!inView ? `border bg-white bg-opacity-100 border-neutral-400` : ''}`}
						onCreateClick={() => {
							createPrompt();
							mixpanel.track(PROMT_CREATE, { promptId, parameters });
						}}
						promptId={promptId!}
					/>
				</div>
				<Button
					className='mt-8 w-60 h-12 bg-white rounded-lg border border-gray-200 text-black text-base font-medium'
					onClick={() => push('/prompt')}
				>
					목록으로
				</Button>
			</div>
		</>
	);
};

export default PromptDetailTemplate;
