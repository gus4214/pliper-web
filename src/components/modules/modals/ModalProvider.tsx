import { useAtomValue, useSetAtom } from 'jotai';
import LoginModal from '@/src/components/modules/modals/LoginModal';
import { closeLoginModalAtom, loginModalAtom } from '@/src/stores/modal';
import { useLoginModal } from '@/src/hooks/modal';

const ModalProvider = () => {
	const { open } = useAtomValue(loginModalAtom);
	const close = useSetAtom(closeLoginModalAtom);

	return (
		<>
			<LoginModal open={open} onClose={close} />
		</>
	);
};

export default ModalProvider;
