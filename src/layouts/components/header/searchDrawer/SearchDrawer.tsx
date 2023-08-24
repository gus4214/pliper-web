import { Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { Input } from 'react-daisyui';

interface SearchDrawerProps {
	isOpen?: boolean;
	onClose?: () => void;
}

const SearchDrawer: React.FC<SearchDrawerProps> = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

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

	const drawerStyles = isOpen
		? 'transform transition-transform duration-300 ease-in-out'
		: 'transform -translate-y-full transition-transform duration-300 ease-in-out';

	return (
		<div
			className={`${drawerStyles} fixed inset-x-0 top-16 z-3 w-full h-full bg-gradient-to-b from-sky-100 to-white flex flex-col overflow-y-hidden`}
		>
			<div className='w-[750px] flex flex-col mt-10'>
				<Input className='rounded-[130px] shadow border-none' placeholder='뭐든 적어주세요, 원하시는 내용을 보여드릴게요!' />
			</div>
		</div>
	);
};

export default SearchDrawer;
