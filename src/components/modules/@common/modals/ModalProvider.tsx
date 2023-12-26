import { useAtomValue, useSetAtom } from 'jotai';
import LoginModal from '@/src/components/modules/auth/LoginModal';
import { closeLoginModalAtom, confirmModalAtom, loginModalAtom } from '@/src/stores/modal';
import ConfirmModal from '@/src/components/modules/@common/modals/ConfirmModal';

const ModalProvider = () => {
	// confirm props
	const { ...props } = useAtomValue(confirmModalAtom);

	// login
	const { open } = useAtomValue(loginModalAtom);
	const close = useSetAtom(closeLoginModalAtom);

	return (
		<div aria-hidden="true">
			<LoginModal open={open} onClose={close} />
			<ConfirmModal {...props} />
		</div>
	);
};

export default ModalProvider;
