import { googleAuthApi, naverAuthApi } from '@/src/fetchers/auth';
import { ConfirmModalAtomProps, ModalConfirmOptions } from '@/src/stores/modal';
import { closeConfirmModalAtom } from '@/src/stores/modal/actions/confirm';
import { useSetAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-daisyui';

const ConfirmModal: React.FC<ConfirmModalAtomProps> = (props) => {
	const { open = false, title, description, onConfirm, onCancel, loading, hideConfirm, hideCancel } = props;
	const close = useSetAtom(closeConfirmModalAtom);
	const [modalLoading, setModalLoading] = useState<boolean | undefined>(loading);
	const [loadingTitle, setLoadingTitle] = useState<string>('');

	useEffect(() => {
		setModalLoading(props.loading);
		setLoadingTitle('');
	}, [props]);

	const handleClose = () => {
		onCancel && onCancel();
		setModalLoading(false);
		close();
	};

	const modalOptions: ModalConfirmOptions = {
		loading: (title) => {
			title && setLoadingTitle(title);
			setModalLoading(true);
		},
		clearLoading: () => {
			title && setLoadingTitle('');
			setModalLoading(false);
		},
	};

	const handleConfirm = () => {
		setModalLoading(false);
		loadingTitle && setLoadingTitle('');
		onConfirm && onConfirm(modalOptions);
	};

	return (
		<Modal.Legacy
			open={open}
			onClickBackdrop={onCancel}
			className='w-[450px] px-12 pt-10 pb-4 bg-white rounded-2xl border border-neutral-200 flex-col justify-center items-center gap-8 flex overflow-hidden'
		>
			<div className='w-[289px] h-16 flex-col justify-center items-center gap-4 inline-flex'>
				{title && <h1 className='text-center text-neutral-800 text-[22px] font-bold'>{title}</h1>}
				{description && <h2 className='text-center text-neutral-600 text-base font-normal'>{description}</h2>}
			</div>
			<div className='flex gap-2'>
				{!hideCancel && (
					<Button onClick={handleClose} color='ghost' className='w-[173px] rounded-[99px]'>
						취소
					</Button>
				)}
				{!hideConfirm && (
					<Button onClick={() => handleConfirm()} color='neutral' className='w-[173px] rounded-[99px] bg-navy-900'>
						확인
					</Button>
				)}
			</div>
		</Modal.Legacy>
	);
};

export default ConfirmModal;
