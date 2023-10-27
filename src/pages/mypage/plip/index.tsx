import React from 'react';
import Image from 'next/image';
import ListTitleHeaderBox from '@/src/components/atoms/box/mypage/ListTitleHeaderBox';
import { ArrowLeft } from 'heroicons-react';
import GoBackToMyPageButton from '@/src/components/atoms/buttons/GoBackToMyPageButton';

const MyPlipPage = () => {
	return (
		<div className='w-full h-full flex flex-col items-center'>
			<ListTitleHeaderBox title={'플립'} />
			<div className='w-[1160px] flex flex-col pt-6 pb-[85px] gap-8'>
				<GoBackToMyPageButton />
				<div>
					{/* 메뉴 */}
					{/* 리스트 */}
				</div>
			</div>
		</div>
	);
};

export default MyPlipPage;
