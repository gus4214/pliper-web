import PromptMenu from '@/src/containers/@common/promptMenu/PromptMenu';
import { PromptCategories } from '@/src/fetchers/prompt/types';
import { fireEvent, render, screen } from '@testing-library/react';

const setup = () => {
	const sampleCategories: PromptCategories = {
		dailyCategories: [
			{
				dept1: { code: 'FUN', text: '재미', persona: 'DAILY' },
				dept2: [
					{ code: 'FUN', text: '재미', persona: 'DAILY' },
					{ code: 'PSY', text: '심리', persona: 'DAILY' },
				],
			},
			{
				dept1: { code: 'LOVE', text: '연애', persona: 'DAILY' },
				dept2: [
					{ code: 'FLIRT', text: '썸', persona: 'DAILY' },
					{ code: 'DATE', text: '데이트', persona: 'DAILY' },
					{ code: 'RELATION', text: '관계개선', persona: 'DAILY' },
				],
			},
		],
		jobCategories: [
			{
				dept1: { code: 'BUSINESS', text: '비즈니스', persona: 'JOB' },
				dept2: [
					{ code: 'MARKET', text: '마케팅', persona: 'JOB' },
					{ code: 'PROJECT', text: '프로젝트', persona: 'JOB' },
				],
			},
			{
				dept1: { code: 'DEVELOP', text: '개발', persona: 'JOB' },
				dept2: [
					{ code: 'DESIGN', text: '설계', persona: 'JOB' },
					{ code: 'PROG', text: '프로그래밍', persona: 'JOB' },
				],
			},
		],
	};

	const sampleAiTools = [
		{
			name: 'ChatGPT',
			code: '',
			type: 'LLM',
			description: 'Generative Pre-trained Transformer',
			url: 'https://chat.openai.com/',
		},
		{
			name: 'Bard',
			code: '',
			type: 'LLM',
			description: 'Generative Pre-trained Transformer',
			url: 'https://bard.google.com/chat',
		},
		{
			name: '뤼튼',
			code: '',
			type: 'LLM',
			description: 'Korean Language Model',
			url: 'https://wrtn.ai/',
		},
	];

	const utils = render(<PromptMenu categories={sampleCategories} aiTools={sampleAiTools} />);

	return {
		...utils,
	};
};

const clickPersonaButton = (personaName: string) => {
	fireEvent.click(screen.getByRole('button', { name: personaName }));
};

const clickCategoryButton = (categoryName: string) => {
	fireEvent.click(screen.getByRole('button', { name: categoryName }));
};

describe('MenuList', () => {
	it('shows Personas and Platforms and ResetButton', () => {
		const { getByText, getByRole } = setup();
		getByText('페르소나');
		getByRole('button', { name: '일상' });
		getByRole('button', { name: '업무' });
		getByText('플랫폼');
		getByRole('checkbox', { name: '플랫폼 ChatGPT 선택' });
		getByRole('checkbox', { name: '플랫폼 Bard 선택' });
		getByRole('checkbox', { name: '플랫폼 뤼튼 선택' });
		expect(getByRole('button', { name: '모든 선택 해제' })).toBeDisabled();
	});

	describe('when PersonaButton is clicked', () => {
		it('renders CategoryDept1List properly when 일상 is clicked', () => {
			const { getByText, queryByRole } = setup();
			clickPersonaButton('일상');
			getByText('카테고리');
			clickCategoryButton('재미');
			expect(queryByRole('button', { name: '비즈니스' })).not.toBeInTheDocument();
		});

		it('renders CategoryDept1List properly when 업무 is clicked', () => {
			const { getByRole, queryByRole } = setup();
			clickPersonaButton('업무');
			getByRole('button', { name: '일상' });
			getByRole('button', { name: '비즈니스' });
			expect(queryByRole('button', { name: '연애' })).not.toBeInTheDocument();
		});

		describe('when CategoryDept1Button is clicked', () => {
			it('renders CategoryDept2List', () => {
				const { queryByRole, getByRole } = setup();
				clickPersonaButton('일상');
				clickCategoryButton('재미');
				getByRole('checkbox', { name: '하위 카테고리 심리 선택' });
				expect(queryByRole('checkbox', { name: '하위 카테고리 썸 선택' })).not.toBeInTheDocument();

				clickCategoryButton('연애');
				getByRole('checkbox', { name: '하위 카테고리 심리 선택' });
				getByRole('checkbox', { name: '하위 카테고리 썸 선택' });
			});

			it('hides CategoryDept2List if CategoryDept1Button is clicked again', () => {
				const { queryByRole, getByRole } = setup();
				clickPersonaButton('일상');
				clickCategoryButton('재미');
				getByRole('checkbox', { name: '하위 카테고리 심리 선택' });

				clickCategoryButton('재미');
				expect(queryByRole('checkbox', { name: '하위 카테고리 심리 선택' })).not.toBeInTheDocument();
			});

			it('hides all CategoryDept2List if other PersonaButton is clicked', () => {
				const { queryByRole } = setup();
				clickPersonaButton('일상');
				clickCategoryButton('재미');
				clickPersonaButton('업무');
				clickPersonaButton('일상');
				expect(queryByRole('checkbox', { name: '재미' })).not.toBeInTheDocument();
				expect(queryByRole('checkbox', { name: '하위 카테고리 심리 선택' })).not.toBeInTheDocument();
			});

			describe('when CategoryDept2Button is clicked', () => {
				it('checks and unchecks CategoryDept2Button', () => {
					const { getByRole, getByText } = setup();
					clickPersonaButton('일상');
					clickCategoryButton('연애');
					fireEvent.click(getByText('썸'));
					getByRole('checkbox', { name: '하위 카테고리 썸 선택', checked: true });
					fireEvent.click(getByRole('checkbox', { name: '하위 카테고리 썸 선택' }));
					getByRole('checkbox', { name: '하위 카테고리 썸 선택', checked: false });
				});

				it('hides CategoryDept2List if CategoryDept2Button is clicked again', () => {
					const { queryByRole, getByRole } = setup();
					clickPersonaButton('일상');
					clickCategoryButton('연애');
					getByRole('checkbox', { name: '하위 카테고리 썸 선택' });
					clickCategoryButton('연애');
					expect(queryByRole('checkbox', { name: '하위 카테고리 썸 선택' })).not.toBeInTheDocument();
				});

				it('keeps CategoryDept2Button checked if CategoryDept1Button is clicked multiple times', () => {
					const { getByRole, getByText } = setup();
					clickPersonaButton('일상');
					clickCategoryButton('연애');
					fireEvent.click(getByText('썸'));
					clickCategoryButton('연애');
					clickCategoryButton('연애');
					getByRole('checkbox', { name: '하위 카테고리 썸 선택', checked: true });
				});

				it('unchecks all checked CategoryDept2Buttons if other PersonaButton is clicked', () => {
					const { getByRole, getByText } = setup();
					clickPersonaButton('일상');
					clickCategoryButton('연애');
					fireEvent.click(getByText('썸'));
					fireEvent.click(getByText('데이트'));
					clickPersonaButton('업무');
					clickPersonaButton('일상');
					clickCategoryButton('연애');
					getByRole('checkbox', { name: '하위 카테고리 썸 선택', checked: false });
					getByRole('checkbox', { name: '하위 카테고리 데이트 선택', checked: false });
				});
			});
		});
	});

	describe('when ResetButton is clicked', () => {
		it('ResetButton is not disabled if MenuItems are clicked', () => {
			const { getByRole, getByText } = setup();
			clickPersonaButton('일상');
			clickCategoryButton('연애');
			fireEvent.click(getByText('썸'));
			expect(getByRole('button', { name: '모든 선택 해제' })).not.toBeDisabled();
		});

		it('resets all MenuList if ResetButton is clicked', () => {
			const { getByRole, getByText, queryByRole, queryByText } = setup();
			clickPersonaButton('일상');
			clickCategoryButton('연애');
			fireEvent.click(getByText('썸'));
			fireEvent.click(getByText('ChatGPT'));
			expect(getByRole('checkbox', { name: '플랫폼 ChatGPT 선택', checked: true }));

			fireEvent.click(getByRole('button', { name: '모든 선택 해제' }));
			expect(queryByRole('button', { name: '연애' })).not.toBeInTheDocument();
			expect(queryByText('썸')).not.toBeInTheDocument();
			expect(getByRole('checkbox', { name: '플랫폼 ChatGPT 선택', checked: false }));
		});
	});
});
