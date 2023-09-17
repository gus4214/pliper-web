import { useAtomValue, useSetAtom } from 'jotai';
import LoginModal from '@/src/components/modules/@common/modals/LoginModal';
import { closeLoginModalAtom, loginModalAtom } from '@/src/stores/modal';

const ModalProvider = () => {
	// login
	const { open } = useAtomValue(loginModalAtom);
	const close = useSetAtom(closeLoginModalAtom);

	return (
		<>
			<LoginModal open={open} onClose={close} />
		</>
	);
};

export default ModalProvider;
