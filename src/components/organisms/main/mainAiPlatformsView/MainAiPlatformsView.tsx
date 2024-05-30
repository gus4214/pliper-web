import AsyncComponentBoundary from '@/src/components/atoms/suspense/AsyncComponentBoundary';
import MainAiPlatforms from '@/src/components/organisms/main/mainAiPlatformsView/MainAiPlatforms';

const MainAiPlatformsView = () => {
	return (
		<div className='w-full bg-slate-200 bg-opacity-50 flex justify-center items-center py-[50px]'>
			<div className='w-[1200px] px-4 rounded-2xl flex-col justify-start items-start gap-10 flex'>
				<div className='items-center gap-2.5 flex'>
					<h1 className='text-black text-[28px] font-bold'>AI 플랫폼</h1>
					<span className='text-sm font-normal text-neutral-400'>플랫폼을 통해 AI를 활용 해보는건 어떠세요?</span>
				</div>
				<AsyncComponentBoundary>
					<MainAiPlatforms />
				</AsyncComponentBoundary>
			</div>
		</div>
	);
};

export default MainAiPlatformsView;
