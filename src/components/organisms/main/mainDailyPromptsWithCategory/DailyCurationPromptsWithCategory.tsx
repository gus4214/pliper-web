import CurationPromptsWithCategory from '@/src/components/organisms/main/containers/CurationPromptsWithCategory';
import DailyCurationPromptsContainer from '@/src/components/organisms/main/containers/DailyCurationPromptsContainer';
import DailyPromptCategoryChipsContainer from '@/src/components/organisms/main/containers/DailyPromptCategoryChipsContainer';
import DailyCurationPromptsSkeleton from '@/src/components/organisms/main/mainDailyPromptsWithCategory/DailyCurationPromptsSkeleton';

const DailyCurationPromptsWithCategory = () => {
	return (
		<div className='max-w-[1200px] w-full relative m-auto'>
			<h1 className='text-center text-black text-[28px] font-bold'>일상속에서도 프롬프트로 레벨업!</h1>
			<div className='mt-8'>
				<CurationPromptsWithCategory
					renderCategories={<DailyPromptCategoryChipsContainer />}
					renderPrompts={<DailyCurationPromptsContainer />}
					renderPromptsSkeleton={<DailyCurationPromptsSkeleton />}
				/>
			</div>
		</div>
	);
};

export default DailyCurationPromptsWithCategory;
