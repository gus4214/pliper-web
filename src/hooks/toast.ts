import { appToastAtom, AppToastProps } from '@/src/stores/toast';
import { useAtomValue } from 'jotai';
import { useAtom } from 'jotai/index';

export const useAppToast = () => {
	const [toast, setToast] = useAtom(appToastAtom);

	return {
		toast,
		openToast: (props: AppToastProps) => setToast(props),
	};
};

export const useAppToastGetter = () => {
    return useAtomValue(appToastAtom);
}