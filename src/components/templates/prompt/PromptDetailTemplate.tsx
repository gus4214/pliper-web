import Loading from '@/src/components/atoms/loading/Loading';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import FloatButtonGroup from '@/src/components/modules/@common/floatButton/FloatButtonGroup';
import PromptDetailInfoHeader from '@/src/components/modules/prompt/detail/PromptDetailInfoHeader';
import PromptTemplateSection from '@/src/components/modules/prompt/detail/PromptTemplateSection';
import { Prompt } from '@/src/fetchers/prompt/types';
import React from 'react';
import { useAuthContext } from '@/src/hooks/context';
import { Button } from 'react-daisyui';
import { useRouter } from 'next/router';

interface PromptDetailTemplateProps {
	prompt: Prompt;
}

const PromptDetailTemplate: React.FC<PromptDetailTemplateProps> = ({ prompt }) => {
	const { user } = useAuthContext();
	const { push } = useRouter();

	const { parameters, template, promptId, userEmail } = prompt;

	return (
		<>
			<div className='w-[1176px] px-6 pt-6 mt-[28px] pb-[61px]  flex flex-col items-center mx-auto relative'>
				<FloatButtonGroup className='top-[192px] mr-[-634px]' />
				<PromptDetailInfoHeader {...prompt} isCreator={user && user.oauthEmail === userEmail} />
				<AsyncComponentBoundary pendingFallback={<Loading />}>
					<PromptTemplateSection parameters={parameters} template={template} promptId={promptId} />
				</AsyncComponentBoundary>
				<Button
					color='ghost'
					variant='outline'
					className='mt-8 w-60 h-12 bg-white rounded-lg border border-gray-200'
					onClick={() => push('/prompt')}
				>
					<span className='text-black text-base font-medium'>목록으로</span>
				</Button>
			</div>
		</>
	);
};

export default PromptDetailTemplate;
