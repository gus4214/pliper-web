import { AuthContext } from '@/src/contexts/authContext';
import { useContext } from 'react';

export const useAuthContext = () => {
	return useContext(AuthContext);
};
