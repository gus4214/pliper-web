import DailyPromptsWithCategoryContainer from '@/src/containers/main/DailyPromptsWithCategoryContainer';
import CurationPromptsSection from '@/src/components/organisms/main/curations/CurationPromptsSection';

const DailyPromptsWithCategorySection = () => {
	return (
		<CurationPromptsSection title='일상속에서도 프롬프트로 레벨업!'>
			<DailyPromptsWithCategoryContainer />
		</CurationPromptsSection>
	);
};

export default DailyPromptsWithCategorySection;
