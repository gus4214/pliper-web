import { useEffect, useState } from 'react';

const useScrollToTop = (scrollY: number) => {
	const [show, setShowButton] = useState(false);

	const scrollToTop = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		const handleShowButton = () => {
			if (window.scrollY > scrollY) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};

		window.addEventListener('scroll', handleShowButton);
		return () => {
			window.removeEventListener('scroll', handleShowButton);
		};
	}, []);

	return { show, scrollToTop };
};

export default useScrollToTop;
