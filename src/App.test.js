import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders App Component', () => {
  render( <BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/Routing Assignment/i);
  expect(screen.getByText(/Posts/i)).toBeInTheDocument();
  expect(screen.getByText(/Users/i)).toBeInTheDocument();

  expect(linkElement).toBeInTheDocument();
});
