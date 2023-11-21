import { AnimatePresence, motion } from 'framer-motion';
import React, { FC, useEffect, useState } from 'react';
import { AppToastProps } from '@/src/stores/toast';

const AppToast: FC<AppToastProps> = ({ open, message, icon, delayHideDuration = 4000, onClose }) => {

	const close = () => {
		onClose && onClose();
	}

	console.log(open, "111")
	useEffect(() => {
		console.log(open, "??")
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
					className='fixed bottom-5 right-5 z-100'
					initial='hidden'
					animate='visible'
					exit='hidden'
					variants={toastVariants}
					transition={{ duration: 0.5 }}
				>
					<div className='fixed bottom-5 left-5 z-50 p-5'>
						<div className='shadow-2xl flex  p-[30px] px-7 py-6 bg-white rounded-2xl flex-col justify-center items-center gap-3 inline-flex"'>
							{icon && (
								<div className='w-16 h-16 p-6 bg-gradient-to-bl from-teal-100 to-teal-200 rounded-[99px] flex-col justify-center items-center gap-4 inline-flex'>
									<div className=' flex'>{icon}</div>
								</div>
							)}
							<div className={'text-center text-neutral-500 text-base font-medium leading-none'}>{message}</div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default AppToast;
