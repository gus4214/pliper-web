import FloatButtonGroup from '@/src/components/molecules/floatButton/FloatButtonGroup';
import AiToolsSection from '@/src/components/organisms/main/aiTool/AiToolsSection';
import BookMarkPromptsSection from '@/src/components/organisms/main/curations/bookmark/BookMarkPromptsSection';
import DailyPromptsWithCategorySection from '@/src/components/organisms/main/curations/daily/DailyPromptsWithCategorySection';
import HotTopicsSection from '@/src/components/organisms/main/curations/hotTopic/HotTopicsSection';
import WorkPromptsWithCategorySection from '@/src/components/organisms/main/curations/work/WorkPromptsWithCategorySection';
import Image from 'next/image';
import { FC } from 'react';

interface MainTemplateProps {
	mainImage: string;
}

const MainTemplate: FC<MainTemplateProps> = ({ mainImage }) => {
	return (
		<div className='relative flex flex-col items-center overflow-hidden'>
			<section className='w-full h-[240px] absolute z-0'>
				<Image alt='main-top-image' src={mainImage} fill className='object-cover' priority />
			</section>
			<section className='pt-[50px] pb-[28px]'>
				<BookMarkPromptsSection />
			</section>
			<section className='pt-[28px] pb-[48px]'>
				<HotTopicsSection />
			</section>
			<section className='w-full bg-neutral-50 py-11 flex justify-center'>
				<WorkPromptsWithCategorySection />
			</section>
			<section className='py-[90px]'>
				<DailyPromptsWithCategorySection />
			</section>
			<section className='w-full bg-slate-200 bg-opacity-50 py-[50px] flex justify-center'>
				<AiToolsSection />
			</section>
			<FloatButtonGroup className='top-[353px] mr-[-656px]' />
		</div>
	);
};

export default MainTemplate;
