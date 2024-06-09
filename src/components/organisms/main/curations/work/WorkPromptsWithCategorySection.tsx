import WorkPromptsWithCategoryContainer from '@/src/containers/main/WorkPromptsWithCategoryContainer';
import CurationPromptsSection from '@/src/components/organisms/main/curations/CurationPromptsSection';

const WorkPromptsWithCategorySection = () => {
	return (
		<CurationPromptsSection title='업무에서 활용 가능한 프롬프트 엄선작'>
			<WorkPromptsWithCategoryContainer />
		</CurationPromptsSection>
	);
};

export default WorkPromptsWithCategorySection;
