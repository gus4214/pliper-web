import { useAuthContext } from '@/src/hooks/context';
import SearchForm from '@/src/layouts/components/header/appBar/searchDrawer/SearchForm';
import PopularSearchListContainer from '@/src/layouts/components/header/appBar/searchDrawer/popularSearch/PopularSearchListContainer';
import RecentlySearchListContainer from '@/src/layouts/components/header/appBar/searchDrawer/recentlySearch/RecentlySearchListContainer';
import { searchInputAtom } from '@/src/stores/searchForm';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface SearchDrawerProps {
	isOpen?: boolean;
	onClose?: () => void;
}

const SearchDrawer: React.FC<SearchDrawerProps> = ({ isOpen, onClose }) => {
	const { user } = useAuthContext();
	const router = useRouter();

	const handleSearch = () => {
		router.push('/prompt');
		onClose && onClose();
	};

	const handleBackgroundClick = () => {
		onClose && onClose();
	};

	const handleContentClick = (event: React.MouseEvent) => {
		event.stopPropagation();
	};

	useEffect(() => {
		const closeDrawer = () => {
			onClose && onClose();
		};

		router.events.on('routeChangeStart', closeDrawer);

		return () => {
			router.events.off('routeChangeStart', closeDrawer);
		};
	}, [onClose, router.events]);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const drawerStyles = isOpen
		? 'transform transition-transform duration-300 ease-in-out'
		: 'transform -translate-y-full transition-transform duration-300 ease-in-out';

	return (
		<div
			onClick={handleBackgroundClick}
			className={`${drawerStyles} fixed inset-x-0 top-16 z-3 w-full h-full bg-gradient-to-b from-sky-100 to-white flex flex-col items-center overflow-y-hidden cursor-pointer z-50`}
		>
			<div className='w-[750px] flex flex-col mt-10 justify-center cursor-default' onClick={handleContentClick}>
				<SearchForm onEnter={handleSearch} />
				<div className='w-[750px] px-4 py-10 flex-col justify-start items-start gap-10 flex'>
					{user && <RecentlySearchListContainer />}
					<PopularSearchListContainer />
				</div>
				<div onClick={onClose} className='w-full h-[60px] px-4 py-2 border-t border-neutral-200 justify-end items-center flex cursor-pointer'>
					<span className='text-neutral-400 text-base font-medium'>닫기</span>
				</div>
			</div>
		</div>
	);
};

export default SearchDrawer;
