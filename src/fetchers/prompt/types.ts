import { PromptSortType } from '@/src/configs/prompt';
import { IPageRequest } from '@/src/fetchers/types';

export type GetAiToolsType = 'LLM' | 'IMAGE';

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
	type: GetAiToolsType;
}

export interface RegisterPromptRequest {
	category1Text: string;
	category2Text: string;
	description: string;
	llmModel: string;
	parameters?: Parameter[];
	personaType: string;
	show: boolean;
	template?: string;
	title: string;
}

export interface GetInteractionByPromptsRequest {
	promptIds: number[]
}

export  interface InteractionByPrompt {
	promptId: number;
	isLike: boolean;
	isClip: boolean;
	isReliability: boolean;
	reliability?: "UP" | "DOWN"
}

// =======================================

export interface GetPromptsResult {
	first: boolean;
	last: boolean;
	limit: number;
	page: number;
	prompts: Prompt[];
	sort: string;
	totalPages: number;
	totalRows: number;
}

export interface GetPromptCategoryResult {
	dailyCategories: Category[];
	jobCategories: Category[];
}

export interface GetAiToolsResult {
	tools: Tool[];
}

export interface RegisterPromptResult {
	category1Text: string;
	category2Text: string;
	createDateTime: string;
	description: string;
	likeCount: number;
	llmModel: string;
	parameters: Parameter[];
	percents: number;
	personaType: string;
	precisionDown: number;
	precisionUp: number;
	promptId: number;
	show: boolean;
	template: string;
	title: string;
	updateDateTime: string;
	userEmail: string;
	viewCount: number;
}

export interface GetInteractionByPromptsResult {
	interactions: InteractionByPrompt[]
	email: string
}


export interface Tool {
	code: string;
	description: string;
	name: string;
	type: string;
	url: string;
}

export interface Prompt {
	category1Code: string;
	category1Text: string;
	category2Code: string;
	category2Text: string;
	createDateTime: string;
	description: string;
	likeCount: number;
	llmModel: string;
	parameters: Parameter[];
	percents: number;
	personaType: string;
	precisionDown: number;
	precisionUp: number;
	promptId: number;
	show: boolean;
	template: string;
	title: string;
	updateDateTime: string;
	userEmail: string;
	viewCount: number;
}

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
