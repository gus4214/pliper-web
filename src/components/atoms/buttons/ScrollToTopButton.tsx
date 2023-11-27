import useScrollToTop from '@/src/hooks/scrollToTop';
import { ArrowUpCircleIcon, ArrowUpIcon } from '@heroicons/react/24/solid';

interface ScrollToTopButtonProps {
	showY: number;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ showY }) => {
	const { show, scrollToTop } = useScrollToTop(showY);

	return (
		<>
			{show && (
				<div className='fixed z-[999] right-[40px] bottom-[100px] cursor-pointer'>
					<div
						className='w-[60px] h-[60px] px-2.5 py-4 bg-neutral-300 rounded-[99px] justify-center items-center flex'
						onClick={scrollToTop}
					>
						<ArrowUpIcon className='w-8 h-8 text-white' />
					</div>
				</div>
			)}
		</>
	);
};

export default ScrollToTopButton;
