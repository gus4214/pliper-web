import FloatButtonGroup from '@/src/components/molecules/floatButton/FloatButtonGroup';
import MainAiPlatformsView from '@/src/components/organisms/main/mainAiPlatformsView/MainAiPlatformsView';
import MainBookMarksAndHotTopics from '@/src/components/organisms/main/mainBookMarksAndHotTopics/MainBookMarksAndHotTopics';
import MainDailyPromptsWithCategory from '@/src/components/organisms/main/mainDailyPromptsWithCategory/MainDailyPromptsWithCategory';
import MainWorkPromptsWithCategory from '@/src/components/organisms/main/mainWorkPromptsWithCategory/MainWorkPromptsWithCategory';
import { FC } from 'react';

interface MainTemplateProps {
	mainImage: string;
}

const MainTemplate: FC<MainTemplateProps> = ({ mainImage }) => {
	return (
		<div className='relative flex flex-col items-center'>
			<FloatButtonGroup className='top-[353px] mr-[-656px]' />
			<MainBookMarksAndHotTopics mainImage={mainImage} />
			<MainWorkPromptsWithCategory />
			<MainDailyPromptsWithCategory />
			<MainAiPlatformsView />
		</div>
	);
};

export default MainTemplate;
