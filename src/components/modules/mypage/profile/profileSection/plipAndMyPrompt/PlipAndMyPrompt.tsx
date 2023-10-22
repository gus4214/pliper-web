import ListItem from '@/src/components/modules/mypage/profile/profileSection/plipAndMyPrompt/ListItem';
import MyPromptList from '@/src/components/modules/mypage/profile/profileSection/plipAndMyPrompt/MyPromptList';
import PlipAndMyPromptBox from '@/src/components/modules/mypage/profile/profileSection/plipAndMyPrompt/PlipAndMyPromptBox';
import PlipList from '@/src/components/modules/mypage/profile/profileSection/plipAndMyPrompt/PlipList';
import { Button } from 'react-daisyui';

const PlipAndMyPrompt = () => {
	return (
		<div className='w-full flex justify-between'>
			<PlipAndMyPromptBox title='플립' count={22} list={<PlipList />} />
			<PlipAndMyPromptBox title='내가 만든 프롬프트' count={5} list={<MyPromptList />} />
		</div>
	);
};

export default PlipAndMyPrompt;
