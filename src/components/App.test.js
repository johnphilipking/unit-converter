import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 correctly', () => {
  render(<App />);
  const h1 = screen.getByText(/Unit Converter/i);
  expect(h1).toBeInTheDocument();
});
