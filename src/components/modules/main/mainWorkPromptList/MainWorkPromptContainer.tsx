import MainWorkPromptBox from '@/src/components/atoms/box/main/MainWorkPromptBox';
import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import MainWorkPromptList from '@/src/components/modules/main/mainWorkPromptList/MainWorkPromptList';
import WorkPromptCategoryChips from '@/src/components/modules/main/mainWorkPromptList/WorkPromptCategoryChips';

interface MainWorkPromptContainerProps {}

const MainWorkPromptContainer: React.FC<MainWorkPromptContainerProps> = () => {
	return (
		<MainWorkPromptBox>
			<h1 className='text-center text-[28px] font-bold text-black'>업무에서 활용 가능한 프롬프트 엄선작</h1>
			<div className='w-[1176px] mt-8'>
				<div className='w-full flex flex-col items-center gap-8'>
					<AsyncComponentBoundary>
						<WorkPromptCategoryChips />
					</AsyncComponentBoundary>
					<AsyncComponentBoundary>
						<MainWorkPromptList />
					</AsyncComponentBoundary>
				</div>
			</div>
		</MainWorkPromptBox>
	);
};

export default MainWorkPromptContainer;
