import {appToastAtom, AppToastProps, initAppToast} from '@/src/stores/toast';
import { useAtomValue } from 'jotai';
import { useAtom } from 'jotai/index';

export const useAppToast = () => {
	const [toast, setToast] = useAtom(appToastAtom);

	return {
		toast,
		openToast: (props: AppToastProps) => setToast(props),
		closeToast: () =>  setToast(initAppToast)
	};
};
