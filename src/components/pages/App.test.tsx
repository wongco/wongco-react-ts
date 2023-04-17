import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the application', () => {
  render(<App />);
  const element = screen.findByText('wongco');
  expect(element).toBeDefined();
});
