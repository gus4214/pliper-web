import { IPageRequest } from '@/src/fetchers/types';

export interface GetPromptsRequest extends IPageRequest {
	category1Codes?: string[];
	category2Codes?: string[];
	personaTypes?: string[];
	sort?: string;
	title?: string;
}

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