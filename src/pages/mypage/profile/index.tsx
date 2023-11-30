import MyPageProfileTemplate from '@/src/components/templates/mypage/MyPageProfileTemplate';
import { NextPage } from 'next';

const MyPage: NextPage = () => {
	return <MyPageProfileTemplate />;
};

MyPage.grant = 'user';

export default MyPage;
