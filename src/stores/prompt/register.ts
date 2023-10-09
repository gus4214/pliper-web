import { Parameter } from '@/src/fetchers/prompt/types';
import { atom } from 'jotai';

export const parametersAtom = atom<Parameter[]>([]);

export const templateValueAtom = atom<string>('');
