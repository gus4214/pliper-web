import CurationPromptsSection from '@/src/components/organisms/main/curation/CurationPromptsSection';
import DailyCurationPromptsWithCategoryContainer from '@/src/components/organisms/main/containers/DailyCurationPromptsWithCategoryContainer';

const DailyCurationPromptsWithCategory = () => {
	return (
		<CurationPromptsSection title='일상속에서도 프롬프트로 레벨업!'>
			<DailyCurationPromptsWithCategoryContainer />
		</CurationPromptsSection>
	);
};

export default DailyCurationPromptsWithCategory;
