import FloatButtonGroup from '@/src/components/molecules/floatButton/FloatButtonGroup';
import MainAiPlatformsView from '@/src/components/organisms/main/mainAiPlatformsView/MainAiPlatformsView';
import MainBookMarksAndHotTopics from '@/src/components/organisms/main/mainBookMarksAndHotTopics/MainBookMarksAndHotTopics';
import DailyCurationPromptsWithCategory from '@/src/components/organisms/main/curation/daily/DailyCurationPromptsWithCategory';
import WorkCurationPromptsWithCategory from '@/src/components/organisms/main/curation/work/WorkCurationPromptsWithCategory ';
import { FC } from 'react';

interface MainTemplateProps {
	mainImage: string;
}

const MainTemplate: FC<MainTemplateProps> = ({ mainImage }) => {
	return (
		<div className='relative flex flex-col items-center'>
			<FloatButtonGroup className='top-[353px] mr-[-656px]' />
			<MainBookMarksAndHotTopics mainImage={mainImage} />
			<section className='w-full bg-neutral-50 py-11 flex justify-center'>
				<WorkCurationPromptsWithCategory />
			</section>
			<section className='py-[90px]'>
				<DailyCurationPromptsWithCategory />
			</section>
			<MainAiPlatformsView />
		</div>
	);
};

export default MainTemplate;
