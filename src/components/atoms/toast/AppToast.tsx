import { AnimatePresence, motion } from 'framer-motion';
import React, { FC, useEffect, useState } from 'react';
import { AppToastProps } from '@/src/stores/toast';
import { XMarkIcon } from '@heroicons/react/24/solid';

const AppToast: FC<AppToastProps> = ({ open, message, icon, delayHideDuration = 4000, onClose, action }) => {
	const close = () => {
		onClose && onClose();
	};

	useEffect(() => {
		let timer: string | number | NodeJS.Timeout | undefined;
		if (open) {
			timer = setTimeout(() => {
				close();
			}, delayHideDuration);
		}
		return () => clearTimeout(timer);
	}, [open, delayHideDuration]);

	const toastVariants = {
		hidden: { opacity: 0, y: 0, scale: 1 },
		visible: { opacity: 1, y: 0, scale: 1 },
	};

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					className='fixed bottom-5 right-5 z-50'
					initial='hidden'
					animate='visible'
					exit='hidden'
					variants={toastVariants}
					transition={{ duration: 0.5 }}
				>
					<div className='fixed bottom-5 left-5 z-50 p-5'>
						<div className='Toast h-10 px-4 bg-neutral-600 rounded justify-between items-center inline-flex '>
							{/*{icon && (
								<div className='w-5 h-5 p-6 bg-gradient-to-bl text-white rounded-[99px] flex-col justify-center items-center gap-4 inline-flex'>
									<div className=' flex'>{icon}</div>
								</div>
							)}*/}
							<div className='text-white text-sm font-medium leading-none'>{message}</div>

							{action ? (
								<span className={'ml-3 text-teal-200 hover:text-teal-100 text-sm font-medium leading-none cursor-pointer'}
									onClick={() => {
										action.onAction();
										close();
									}}
								>
									{action.message}
								</span>
							) : (
								<XMarkIcon className=' w-5 h-5 text-white relative ml-3 cursor-pointer' onClick={close} />
							)}
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default AppToast;
