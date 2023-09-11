import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import PromptTemplate from '@/src/components/templates/PromptTemplate';
import { NextPage } from 'next';

const PromptPage: NextPage = () => {
	return (
		<AsyncComponentBoundary>
			<PromptTemplate />
		</AsyncComponentBoundary>
	);
};

export default PromptPage;
