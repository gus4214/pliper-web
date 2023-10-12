import { useAtomValue, useSetAtom } from 'jotai';
import LoginModal from '@/src/components/modules/@common/modals/LoginModal';
import { closeLoginModalAtom, confirmModalAtom, loginModalAtom } from '@/src/stores/modal';
import ConfirmModal from '@/src/components/modules/@common/modals/ConfirmModal';

const ModalProvider = () => {
	// confirm props
	const { ...props } = useAtomValue(confirmModalAtom);

	// login
	const { open } = useAtomValue(loginModalAtom);
	const close = useSetAtom(closeLoginModalAtom);

	return (
		<>
			<LoginModal open={open} onClose={close} />
			<ConfirmModal {...props} />
		</>
	);
};

export default ModalProvider;
