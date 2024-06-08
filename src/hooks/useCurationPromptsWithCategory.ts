import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

export const useCurationPromptsWithCategory = () => {
	const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

	const router = useRouter();

	const onSetSelectedCategory = useCallback((category?: string) => {
		setSelectedCategory(category);
	}, []);

	const onPromptClick = useCallback((promptId: number) => {
		router.push(`/prompt/${promptId}`);
	}, []);

	return {
		selectedCategory,
		onSetSelectedCategory,
		onPromptClick,
	};
};
