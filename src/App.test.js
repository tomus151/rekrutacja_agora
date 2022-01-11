import { render, screen } from '@testing-library/react';
import App from './App';

test('renders timer', () => {
  render(<App />);
  const timerElement = screen.getByText(/Time:/i);
  const buttonElement = screen.getByText(/Restart/i);
  expect(timerElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
