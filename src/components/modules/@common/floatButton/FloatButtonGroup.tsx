import FloatPlipIcon from '@/src/components/atoms/icons/float/FloatPlipIcon';
import FloatPromptPlusIcon from '@/src/components/atoms/icons/float/FloatPromptPlusIcon';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/src/hooks/context';
import { useLoginModal } from '@/src/hooks/modal';

interface FloatButtonGroupProps {
	className?: string;
}

const FloatButtonGroup: React.FC<FloatButtonGroupProps> = ({ className }) => {
	const router = useRouter();
	const { user } = useAuthContext();
	const [open, close] = useLoginModal();

	const handlePlusIconClick = async () => {
		if (!user) {
			await open();
			return;
		}
		router.push('/prompt/register');
	};

	const handlePlipIconClick = async () => {
		if (!user) {
			await open();
			return;
		}
		router.push('/mypage/plip');
	};

	return (
		<div className={`${className} fixed right-[50%] z-10`}>
			<div className='w-12 h-24 px-2.5 py-4 bg-teal-200 rounded-[99px] flex-col justify-center items-center gap-4 flex'>
				<motion.div
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					transition={{
						type: 'spring',
						stiffness: 400,
						damping: 10,
					}}
				>
					<FloatPromptPlusIcon className='cursor-pointer' onClick={handlePlusIconClick} />
				</motion.div>
				<motion.div
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					transition={{
						type: 'spring',
						stiffness: 400,
						damping: 10,
					}}
				>
					<FloatPlipIcon className='cursor-pointer' onClick={handlePlipIconClick} />
				</motion.div>
			</div>
		</div>
	);
};

export default FloatButtonGroup;
