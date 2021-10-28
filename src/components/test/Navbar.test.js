import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../Navbar';

describe('test Navbar functionality', () => {
  it('should have 4 links on page', () => {
    const { container } = render(<Navbar />, { wrapper: BrowserRouter });
    expect(screen.getAllByRole('link')).toHaveLength(4);
    expect(container).toMatchSnapshot();
  });
});
