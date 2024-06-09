import WorkCurationPrompts from '@/src/components/organisms/main/curations/work/WorkCurationPrompts';
import { PartialPrompt } from '@/src/fetchers/prompt/types';
import { fireEvent, render, screen } from '@testing-library/react';

// with prompts
// - MainWorkPrompts renders prompts
// - MainWorkPrompt renders clickable prompts to route promptDetailPage

// without prompts
// - MainWorkPrompts renders no prompts message

const context = describe;

describe('MainWorkPrompts', () => {
	const handleClick = jest.fn();

	const renderMainWorkPrompts = (prompts: PartialPrompt[]) => {
		return render(<WorkCurationPrompts prompts={prompts} onClick={handleClick} />);
	};

	context('with prompts', () => {
		const prompts: PartialPrompt[] = [
			{
				promptId: 1,
				imageUrl: '/images/sample/6.gif',
				userNickname: 'human',
				title: 'test',
				personaType: 'JOB',
				likeCount: 1,
				viewCount: 1,
			},
			{
				promptId: 2,
				imageUrl: '/images/sample/6.gif',
				userNickname: 'human2',
				title: 'test2',
				personaType: 'JOB',
				likeCount: 2,
				viewCount: 2,
			},
		];

		it('renders prompts', () => {
			renderMainWorkPrompts(prompts);
			expect(screen.getByText('test')).toBeInTheDocument();
		});

		it('renders clickable prompts to route promptDetailPage', () => {
			renderMainWorkPrompts(prompts);

			fireEvent.click(screen.getByText('test'));
			expect(handleClick).toHaveBeenCalledWith(1);

			fireEvent.click(screen.getByText('test2'));
			expect(handleClick).toHaveBeenCalledWith(2);
		});
	});

	context('without prompts', () => {
		it('renders no prompts message', () => {
			const prompts: PartialPrompt[] = [];

			renderMainWorkPrompts(prompts);

			expect(screen.getByText('프롬프트가 존재하지 않습니다.')).toBeInTheDocument();
		});
	});
});
