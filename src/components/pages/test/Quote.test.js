import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../Quote';

describe('test Quote component functionality', () => {
  it('should render Quote heading correctly', () => {
    const { container, getByRole } = render(<Quote />);
    expect(getByRole('heading')).toHaveTextContent('Quote');
    expect(container).toMatchSnapshot();
  });
});
