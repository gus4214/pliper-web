import { Tool } from '@/src/fetchers/prompt/types';

export const llms: { [key: string]: Tool } = {
	ChatGPT: {
		name: 'ChatGPT',
		code: '',
		type: 'LLM',
		description: 'Generative Pre-trained Transformer',
		url: 'https://chat.openai.com/',
	},
	Bard: {
		name: 'Bard',
		code: '',
		type: 'LLM',
		description: 'Generative Pre-trained Transformer',
		url: 'https://bard.google.com/chat',
	},
	뤼튼: {
		name: '뤼튼',
		code: '',
		type: 'LLM',
		description: 'Korean Language Model',
		url: 'https://wrtn.ai/',
	},
};
