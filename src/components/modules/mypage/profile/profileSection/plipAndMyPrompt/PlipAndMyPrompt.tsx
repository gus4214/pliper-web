import MyPlipList from '@/src/components/modules/mypage/profile/profileSection/plipAndMyPrompt/MyPlipList';
import MyPromptList from '@/src/components/modules/mypage/profile/profileSection/plipAndMyPrompt/MyPromptList';
import PlipAndMyPromptBox from '@/src/components/modules/mypage/profile/profileSection/plipAndMyPrompt/PlipAndMyPromptBox';
import { myPageUserSummaryAtom } from '@/src/stores/mypage';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/router';

const PlipAndMyPrompt = () => {
	const myPageUserSummary = useAtomValue(myPageUserSummaryAtom);
	const router = useRouter();

	const { clipCount, createdPromptsCount, promptClips, createdPrompts } = myPageUserSummary!;

	return (
		<div className='w-full flex justify-between'>
			<PlipAndMyPromptBox
				title='마이 플립'
				count={clipCount}
				list={<MyPlipList promptClips={promptClips} />}
				onMoreButtonClick={() => router.push('/mypage/plip')}
			/>
			<PlipAndMyPromptBox
				title='생성한 프롬프트'
				count={createdPromptsCount}
				list={<MyPromptList createdPrompts={createdPrompts} />}
				onMoreButtonClick={() => router.push('/mypage/created-prompt')}
			/>
		</div>
	);
};

export default PlipAndMyPrompt;
