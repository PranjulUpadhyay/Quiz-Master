import { render, screen } from '@testing-library/react';
import App from './App';

test('renders quiz app welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to your React Quiz Application!/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/My Quiz App/i);
  expect(titleElement).toBeInTheDocument();
});
