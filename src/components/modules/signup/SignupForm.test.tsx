import SignupForm from '@/src/components/modules/signup/SignupForm';
import { render } from '@testing-library/react';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('SignupForm', () => {
	const setup = () => {
		const utils = render(<SignupForm />);

		const formInput = utils.getByPlaceholderText('최대 10자로 입력해주세요');
		return { ...utils, formInput };
	};

	it('input 존재', () => {
		const { formInput } = setup();
		expect(formInput).toBeInTheDocument();
	});
});
