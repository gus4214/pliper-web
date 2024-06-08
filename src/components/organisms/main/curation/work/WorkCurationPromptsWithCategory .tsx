import CurationPromptsSection from '@/src/components/organisms/main/curation/CurationPromptsSection';
import WorkCurationPromptsWithCategoryContainer from '@/src/components/organisms/main/containers/WorkCurationPromptsWithCategoryContainer';

const WorkCurationPromptsWithCategory = () => {
	return (
		<CurationPromptsSection title='업무에서 활용 가능한 프롬프트 엄선작'>
			<WorkCurationPromptsWithCategoryContainer />
		</CurationPromptsSection>
	);
};

export default WorkCurationPromptsWithCategory;
