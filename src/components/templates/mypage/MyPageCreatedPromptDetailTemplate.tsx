import FloatButtonGroup from '@/src/components/modules/@common/floatButton/FloatButtonGroup';
import UpdatePromptFormContainer from '@/src/components/modules/mypage/created-prompt/UpdatePromptFormContainer';
import { Prompt } from '@/src/fetchers/prompt/types';

interface MyPageCreatedPromptDetailTemplateProps {
	data: Prompt;
}

const MyPageCreatedPromptDetailTemplate: React.FC<MyPageCreatedPromptDetailTemplateProps> = ({ data }) => {
	return (
		<div className='pt-8 pb-17 flex flex-col items-center relative'>
			<FloatButtonGroup className='top-[192px] mr-[-600px]' />
			<UpdatePromptFormContainer data={data} />
		</div>
	);
};

export default MyPageCreatedPromptDetailTemplate;
