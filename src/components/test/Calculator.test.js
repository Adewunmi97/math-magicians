import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../Calculator';

describe('Test Button', () => {
  it('', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
});
