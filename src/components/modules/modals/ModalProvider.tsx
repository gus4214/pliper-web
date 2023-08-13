import { useAtomValue, useSetAtom } from 'jotai';
import LoginModal from '@/src/components/modules/modals/LoginModal';
import { closeLoginModalAtom, loginModalAtom, signupModalAtom } from '@/src/stores/modal';
import SignupModal from '@/src/components/modules/modals/SignupModal';

const ModalProvider = () => {
	// login
	const { open } = useAtomValue(loginModalAtom);
	const close = useSetAtom(closeLoginModalAtom);

	// signup
	const signupModal = useAtomValue(signupModalAtom);

	return (
		<>
			<LoginModal open={open} onClose={close} />
			<SignupModal open={signupModal.open} />
		</>
	);
};

export default ModalProvider;
