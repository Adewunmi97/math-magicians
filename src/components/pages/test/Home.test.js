import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';

describe('test Home component functionality', () => {
  it('should render Home heading correctly', () => {
    const { container, getByRole } = render(<Home />);
    expect(getByRole('heading')).toHaveTextContent('Welcome to the world of Mathematics');
    expect(container).toMatchSnapshot();
  });
});
