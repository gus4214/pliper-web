import { deleteMyPromptApi, updateMyPromptApi, useGetInteractionByPrompts } from '@/src/fetchers/prompt/my-prompt';
import { InteractionByPrompt } from '@/src/fetchers/prompt/types';
import { useAuthContext } from '@/src/hooks/context';
import { useConfirmModal } from '@/src/hooks/modal';
import { useRouter } from 'next/router';

export const usePromptHandler = () => {
	const [open, close] = useConfirmModal();
	const router = useRouter();

	const goPromptDetailPage = (id: number, show: boolean) => {
		router.push(`/prompt/${id}`);
		// if (show) {
		// 	router.push(`/prompt/${id}`);
		// } else {
		// 	handlePromptShowToggle(id, show);
		// }
	};

	const goPromptEditPage = (id: number) => {
		router.push(`/mypage/created-prompt/${id}`);
	};

	const deletePrompt = async (id: number, onSuccess?: () => void) => {
		open({
			title: '프롬프트를 삭제 하시겠어요?',
			description: '삭제된 프롬프트는 복구가 불가능합니다.',
			onConfirm: async () => {
				try {
					const result = await deleteMyPromptApi(id);
					onSuccess && onSuccess();
					close();
				} catch (error) {
					console.error('Error in DeletePromptApi:', error);
				}
			},
		});
	};

	const togglePromptShow = async (id: number, show: boolean, onSuccess?: () => void) => {
		if (show) {
			open({
				title: '프롬프트를 게시를 취소하시겠어요?',
				description: '공개된 프롬프트 템플릿의 게시를 취소합니다.',
				onConfirm: async () => {
					try {
						const result = await updateMyPromptApi({ show: false }, id);
						onSuccess && onSuccess();
						close();
					} catch (error) {
						console.error('Error in DeletePromptApi:', error);
					}
				},
			});
			return;
		}
		open({
			title: '프롬프트를 게시하시겠어요?',
			description: '게시하게 되면 프롬프트 템플릿이 사용자들에게 노출 됩니다.',
			onConfirm: async () => {
				try {
					const result = await updateMyPromptApi({ show: true }, id);
					onSuccess && onSuccess();
					close();
				} catch (error) {
					console.error('Error in DeletePromptApi:', error);
				}
			},
		});
	};
	return {
		goPromptEditPage,
		goPromptDetailPage,
		deletePrompt,
		togglePromptShow,
	};
};

export const usePromptInteractions = (promptIds: number[]) => {
	const { user } = useAuthContext();
	const { data: interactions } = useGetInteractionByPrompts({ promptIds }, { enabled: !!promptIds?.length && !!user });

	const mapOfPromptInteraction = interactions?.interactions.reduce((acc, curr) => {
		acc.set(curr.promptId, curr);
		return acc;
	}, new Map<number, InteractionByPrompt>());

	const getInteractionByPromptId = (promptId: number) => {
		return mapOfPromptInteraction?.get(promptId);
	};

	return {
		getInteractionByPromptId,
	};
};
