import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
	test('renders Hello World as a text', () => {
		// Arrange
		render(<Greeting />);

		// Act
		// ...nothing

		// Assert
		const helloWorldElement = screen.getByText('Hello World!');
		expect(helloWorldElement).toBeInTheDocument();
	});

	test('renders good to see you if the button was NOT click', () => {
		render(<Greeting />);

		const outputElement = screen.getByText('good to see you', {
			exact: false,
		});
		expect(outputElement).toBeInTheDocument();
	});

	test('renders "Changed!" if the button was clicked', async () => {
		// Arrange
		render(<Greeting />);

		// Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		// Assert
		const outputElement = await screen.findByText('Changed!');
		expect(outputElement).toBeInTheDocument();
	});

	test('does not render "good to see you" if the button was clicked', async () => {
		render(<Greeting />);

		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		const outputElement = await screen.findByText('good to see you', {
			exact: false,
		});
		expect(outputElement).not.toBeInTheDocument();
	});
});
