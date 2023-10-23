import { UserSummary } from '@/src/fetchers/auth/types';
import { atom } from 'jotai';

export const myPageUserSummaryAtom = atom<UserSummary | undefined>(undefined);
