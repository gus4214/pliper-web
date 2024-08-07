import UpdatePromptFormContainer from '@/src/components/organisms/mypage/created-prompt/UpdatePromptFormContainer';
import { Prompt } from '@/src/fetchers/prompt/types';

interface MyPageCreatedPromptDetailTemplateProps {
	data: Prompt;
}

const MyPageCreatedPromptDetailTemplate: React.FC<MyPageCreatedPromptDetailTemplateProps> = ({ data }) => {
	return (
		<div className='pt-[45px] pb-[60px] flex flex-col items-center relative'>
			<UpdatePromptFormContainer data={data} />
		</div>
	);
};

export default MyPageCreatedPromptDetailTemplate;
