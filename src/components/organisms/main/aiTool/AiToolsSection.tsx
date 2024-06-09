import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import AiToolsContainer from '@/src/containers/main/AiToolsContainer';

const AiToolsSection = () => {
	return (
		<div className='max-w-[1200px] w-full px-4 flex flex-col gap-10'>
			<div className='flex items-center gap-2.5'>
				<h1 className='text-black text-[28px] font-bold'>AI 플랫폼</h1>
				<span className='text-sm font-normal text-neutral-400'>플랫폼을 통해 AI를 활용 해보는건 어떠세요?</span>
			</div>
			<AsyncComponentBoundary>
				<AiToolsContainer />
			</AsyncComponentBoundary>
		</div>
	);
};

export default AiToolsSection;
