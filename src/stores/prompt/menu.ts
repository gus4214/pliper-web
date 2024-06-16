import { PersonaType } from '@/src/fetchers/prompt/types';
import { PrimitiveAtom, WritableAtom, atom } from 'jotai';

export const personaTypesAtom = atom<PersonaType | undefined>(undefined);
export const category1TextsAtom = atom<string[]>([]);
export const category2TextsAtom = atom<string[]>([]);
export const llmModelsAtom = atom<string[]>([]);

export const selectedPromptMenuAtom = atom((get) => ({
	personaTypes: get(personaTypesAtom),
	category1Texts: get(category1TextsAtom),
	category2Texts: get(category2TextsAtom),
	llmModel: get(llmModelsAtom),
}));

const createCategoryAtomHandler = (categoryAtom: PrimitiveAtom<string[]>): WritableAtom<string[], [category: string], void> =>
	atom(
		(get) => get(categoryAtom),
		(get, set, category: string) => {
			const categories = get(categoryAtom);
			if (categories.includes(category)) {
				set(
					categoryAtom,
					categories.filter((text) => text !== category)
				);
			} else {
				set(categoryAtom, [...categories, category]);
			}
		}
	);

export const handlePersonaTypesAtom = atom(
	(get) => get(personaTypesAtom),
	(get, set, persona?: PersonaType) => {
		set(personaTypesAtom, persona);
		set(category1TextsAtom, []);
		set(category2TextsAtom, []);
	}
);
export const handleCategoryDept1Atom = createCategoryAtomHandler(category1TextsAtom);
export const handleCategoryDept2Atom = createCategoryAtomHandler(category2TextsAtom);
export const handleLlmModelAtom = createCategoryAtomHandler(llmModelsAtom);

export const resetCategoryAtom = atom(null, (get, set) => {
	set(personaTypesAtom, undefined);
	set(category1TextsAtom, []);
	set(category2TextsAtom, []);
	set(llmModelsAtom, []);
});
