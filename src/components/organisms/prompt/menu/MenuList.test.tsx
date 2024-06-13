import MenuList from '@/src/components/organisms/prompt/menu/MenuList';
import { PromptCategories } from '@/src/fetchers/prompt/types';
import { fireEvent, render, screen } from '@testing-library/react';

const context = describe;

describe('MenuList', () => {
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

		return render(<MenuList categories={sampleCategories} aiTools={sampleAiTools} />);
	};

	const handleClick = (element: Element) => {
		fireEvent.click(element);
	};

	it('shows Personas and Platforms and ResetButton', () => {
		const { getByText, getByRole } = setup();
		getByText('페르소나');
		getByRole('button', { name: '일상' });
		getByRole('button', { name: '업무' });
		getByText('플랫폼');
		getByRole('checkbox', { name: 'ChatGPT' });
		getByRole('checkbox', { name: 'Bard' });
		getByRole('checkbox', { name: '뤼튼' });
		getByRole('button', { name: '전체 해제' });
	});

	context('when PersonaButton is clicked', () => {
		it('renders CategoryDept1List properly', () => {
			const { getByRole, getByText, queryByRole } = setup();

			handleClick(getByRole('button', { name: '일상' }));
			getByText('카테고리');
			getByRole('button', { name: '재미' });
			expect(queryByRole('button', { name: '비즈니스' })).not.toBeInTheDocument();

			handleClick(getByRole('button', { name: '업무' }));
			getByRole('button', { name: '일상' });
			getByRole('button', { name: '비즈니스' });
			expect(queryByRole('button', { name: '연애' })).not.toBeInTheDocument();
		});

		context('when CategoryDept1Button is clicked', () => {
			it('renders CategoryDept2List', () => {
				const { getByRole, queryByRole } = setup();
				handleClick(getByRole('button', { name: '일상' }));
				handleClick(getByRole('button', { name: '재미' }));
				getByRole('checkbox', { name: '심리' });
				expect(queryByRole('checkbox', { name: '썸' })).not.toBeInTheDocument();

				handleClick(getByRole('button', { name: '연애' }));
				getByRole('checkbox', { name: '심리' });
				getByRole('checkbox', { name: '썸' });
			});

			it('hides CategoryDept2List if CategoryDept1Button is clicked again', () => {
				const { getByRole, queryByRole } = setup();
				handleClick(getByRole('button', { name: '일상' }));
				handleClick(getByRole('button', { name: '재미' }));
				getByRole('checkbox', { name: '심리' });

				handleClick(getByRole('button', { name: '재미' }));
				expect(queryByRole('checkbox', { name: '심리' })).not.toBeInTheDocument();
			});

			it('hides all CategoryDept2List if other PersonaButton is clicked', () => {
				const { getByRole, queryByRole } = setup();
				handleClick(getByRole('button', { name: '일상' }));
				handleClick(getByRole('button', { name: '재미' }));
				handleClick(getByRole('button', { name: '업무' }));
				handleClick(getByRole('button', { name: '일상' }));
				expect(queryByRole('checkbox', { name: '재미' })).not.toBeInTheDocument();
				expect(queryByRole('checkbox', { name: '심리' })).not.toBeInTheDocument();
			});

			context('when CategoryDept2Button is clicked', () => {
				it('checks and unchecks CategoryDept2Button', () => {
					const { getByRole, getByText } = setup();
					handleClick(getByRole('button', { name: '일상' }));
					handleClick(getByRole('button', { name: '연애' }));
					handleClick(getByText('썸'));
					getByRole('checkbox', { name: '썸', checked: true });

					handleClick(getByRole('checkbox', { name: '썸' }));
					getByRole('checkbox', { name: '썸', checked: false });
				});

				it('hides CategoryDept2List if CategoryDept2Button is clicked again', () => {
					const { getByRole, queryByRole } = setup();
					handleClick(getByRole('button', { name: '일상' }));
					handleClick(getByRole('button', { name: '연애' }));
					getByRole('checkbox', { name: '썸' });
					handleClick(getByRole('button', { name: '연애' }));
					expect(queryByRole('checkbox', { name: '썸' })).not.toBeInTheDocument();
				});

				it('keeps CategoryDept2Button checked if CategoryDept1Button is clicked multiple times', () => {
					const { getByRole, getByText } = setup();
					handleClick(getByRole('button', { name: '일상' }));
					handleClick(getByRole('button', { name: '연애' }));
					handleClick(getByText('썸'));

					handleClick(getByRole('button', { name: '연애' }));
					handleClick(getByRole('button', { name: '연애' }));
					getByRole('checkbox', { name: '썸', checked: true });
				});

				it('unchecks all checked CategoryDept2Buttons if other PersonaButton is clicked', () => {
					const { getByRole, getByText } = setup();
					handleClick(getByRole('button', { name: '일상' }));
					handleClick(getByRole('button', { name: '연애' }));
					handleClick(getByText('썸'));
					handleClick(getByText('데이트'));
					handleClick(getByRole('button', { name: '업무' }));
					handleClick(getByRole('button', { name: '일상' }));
					handleClick(getByRole('button', { name: '연애' }));
					getByRole('checkbox', { name: '썸', checked: false });
					getByRole('checkbox', { name: '데이트', checked: false });
				});
			});
		});
	});

	context('when ResetButton is clicked', () => {
		it('ResetButton is disabled if MenuItems are not clicked', () => {
			const { getByRole } = setup();
			expect(getByRole('button', { name: '전체 해제' })).toBeDisabled();
		});

		it('resets all MenuList if ResetButton is clicked', () => {
			const { getByRole, getByText, queryByRole, queryByText } = setup();
			handleClick(getByRole('button', { name: '일상' }));
			handleClick(getByRole('button', { name: '연애' }));
			handleClick(getByText('썸'));
			handleClick(getByText('ChatGPT'));
			expect(getByRole('checkbox', { name: 'ChatGPT', checked: true }));

			handleClick(getByRole('button', { name: '전체 해제' }));
			expect(queryByRole('button', { name: '연애' })).not.toBeInTheDocument();
			expect(queryByText('썸')).not.toBeInTheDocument();
			expect(getByRole('checkbox', { name: 'ChatGPT', checked: false }));
		});
	});
});
