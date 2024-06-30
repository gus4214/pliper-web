import {
	handleCategoryDept1Atom,
	handleCategoryDept2Atom,
	handleLlmModelAtom,
	handlePersonaTypesAtom,
	resetCategoryAtom,
} from '@/src/stores/prompt/menu';
import { useAtom, useSetAtom } from 'jotai';

export const usePromptMenu = () => {
	const [selectedPersonaType, setSelectedPersonaType] = useAtom(handlePersonaTypesAtom);
	const [selectedCategoryDept1, setSelectedCategoryDept1] = useAtom(handleCategoryDept1Atom);
	const [selectedCategoryDept2, setSelectedCategoryDept2] = useAtom(handleCategoryDept2Atom);
	const [selectedAiTools, setSelectedAiTools] = useAtom(handleLlmModelAtom);

	const resetMenu = useSetAtom(resetCategoryAtom);
	const isMenuSelected = () => {
		return selectedPersonaType || !!selectedCategoryDept1.length || !!selectedCategoryDept2.length || !!selectedAiTools.length;
	};

	return {
		selectedMenus: {
			personaTypes: selectedPersonaType,
			category1Texts: selectedCategoryDept1,
			category2Texts: selectedCategoryDept2,
			llmModel: selectedAiTools,
		},
		setSelectedMenu: {
			handlePersona: setSelectedPersonaType,
			handleCategoryDept1: setSelectedCategoryDept1,
			handleCategoryDept2: setSelectedCategoryDept2,
			handleAiTools: setSelectedAiTools,
		},
		resetMenu,
		isMenuSelected: isMenuSelected(),
	};
};
