import GoBackToMyPageButton from '@/src/components/atoms/buttons/GoBackToMyPageButton';
import ProfileEditForm from '@/src/components/organisms/mypage/edit/ProfileEditForm';

const MyPageEditTemplate = () => {
	return (
		<div className='w-full flex flex-col items-center pt-6'>
			<GoBackToMyPageButton />
			<ProfileEditForm />
		</div>
	);
};

export default MyPageEditTemplate;
