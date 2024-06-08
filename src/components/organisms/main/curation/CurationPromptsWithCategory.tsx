import Skeleton from '@/src/components/atoms/skeleton/Skeleton';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import { FC, ReactNode } from 'react';

interface CurationPromptsWithCategoryProps {
	renderCategories: ReactNode;
	renderPrompts: ReactNode;
	renderPromptsSkeleton: ReactNode;
}

const CurationPromptsWithCategory: FC<CurationPromptsWithCategoryProps> = ({ renderCategories, renderPrompts, renderPromptsSkeleton }) => {
	return (
		<div className='flex flex-col items-center w-full gap-8'>
			<AsyncComponentBoundary pendingFallback={<Skeleton height='h-8' />}>{renderCategories}</AsyncComponentBoundary>
			<AsyncComponentBoundary pendingFallback={renderPromptsSkeleton}>{renderPrompts}</AsyncComponentBoundary>
		</div>
	);
};

export default CurationPromptsWithCategory;
