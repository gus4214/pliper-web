import { PromptSortType } from '@/src/configs/prompt';
import { IBaasResponse, IPageRequest } from '@/src/fetchers/types';

export type GetAiToolsType = 'LLM' | 'IMAGE';

export type PersonaType = 'DAILY' | 'JOB';

export interface GetPromptsRequest extends IPageRequest {
	category1Texts?: string[];
	category2Texts?: string[];
	personaTypes?: string;
	promptSort?: PromptSortType;
	llmModel?: string[];
	sort?: string;
	title?: string;
}

export interface GetAiToolsRequest {
	type?: GetAiToolsType;
}

export interface RegisterPromptRequest {
	category1Text: string;
	category2Text: string;
	description: string;
	llmModel: string;
	parameters?: Parameter[];
	personaType: PersonaType;
	show: boolean;
	template: string;
	title: string;
}

export interface GetInteractionByPromptsRequest {
	promptIds: number[];
}

export interface InteractionByPrompt {
	promptId: number;
	isLike: boolean;
	isClip: boolean;
	isReliability: boolean;
	reliability?: 'UP' | 'DOWN';
}

// =======================================

export interface GetPromptsResult extends IBaasResponse {
	first: boolean;
	last: boolean;
	limit: number;
	page: number;
	prompts: Prompt[];
	sort: string;
	totalPages: number;
	totalRows: number;
}

export interface GetPromptCategoryResult extends IBaasResponse {
	dailyCategories: Category[];
	jobCategories: Category[];
}

export interface GetAiToolsResult extends IBaasResponse {
	tools: Tool[];
}

export interface RegisterPromptResult extends IBaasResponse {
	category1Text: string;
	category2Text: string;
	createDateTime: string;
	description: string;
	likeCount: number;
	llmModel: string;
	parameters: Parameter[];
	percents: number;
	personaType: PersonaType;
	precisionDown: number;
	precisionUp: number;
	promptId: number;
	show: boolean;
	template: string;
	title: string;
	updateDateTime: string;
	userEmail: string;
	userNickname: string;
	viewCount: number;
}

export interface GetInteractionByPromptsResult extends IBaasResponse {
	interactions: InteractionByPrompt[];
	email: string;
}

export interface Tool {
	code: string;
	description: string;
	name: string;
	type: string;
	url: string;
}

export interface Prompt {
	category1Text: string;
	category2Text: string;
	createDateTime: string;
	description: string;
	likeCount: number;
	clipCount: number;
	llmModel: string;
	parameters: Parameter[];
	percents: number;
	personaType: PersonaType;
	precisionDown: number;
	precisionUp: number;
	promptId: number;
	imageUrl?: string;
	show: boolean;
	template: string;
	title: string;
	updateDateTime: string;
	userEmail: string;
	userNickname: string;
	viewCount: number;
}

// Prompt Type for CurationPromptList
export type PartialPrompt = Pick<Prompt, 'promptId' | 'imageUrl' | 'userNickname' | 'title' | 'personaType' | 'likeCount' | 'viewCount'>;

export interface Parameter {
	description: string;
	title: string;
	type: string;
	typeValues: string;
}

export interface Category {
	dept1: Dept1;
	dept2: Dept1[];
}

export interface Dept1 {
	code: string;
	text: string;
}
