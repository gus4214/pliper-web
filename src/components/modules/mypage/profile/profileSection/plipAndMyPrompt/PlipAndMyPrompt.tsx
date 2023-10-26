import MyPlipList from '@/src/components/modules/mypage/profile/profileSection/plipAndMyPrompt/MyPlipList';
import MyPromptList from '@/src/components/modules/mypage/profile/profileSection/plipAndMyPrompt/MyPromptList';
import PlipAndMyPromptBox from '@/src/components/modules/mypage/profile/profileSection/plipAndMyPrompt/PlipAndMyPromptBox';
import { myPageUserSummaryAtom } from '@/src/stores/mypage';
import { useAtomValue } from 'jotai';

const PlipAndMyPrompt = () => {
	const myPageUserSummary = useAtomValue(myPageUserSummaryAtom);

	const { clipCount, createdPromptsCount, promptClips, createdPrompts } = myPageUserSummary!;

	return (
		<div className='w-full flex justify-between'>
			<PlipAndMyPromptBox title='플립' count={clipCount} list={<MyPlipList promptClips={promptClips} />} />
			<PlipAndMyPromptBox title='내가 만든 프롬프트' count={createdPromptsCount} list={<MyPromptList createdPrompts={createdPrompts} />} />
		</div>
	);
};

export default PlipAndMyPrompt;
