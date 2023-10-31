export interface UserSummary {
	clipCount: number;
	createdPrompts: CreatedPrompt[];
	createdPromptsCount: number;
	likeCount: number;
	precisionUpCount: number;
	promptClips: CreatedPrompt[];
	userEmail: string;
}

export interface CreatedPrompt {
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
	userNickname: string;
}

export interface Parameter {
	description: string;
	title: string;
	type: string;
	typeValues: string;
}
