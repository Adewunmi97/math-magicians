import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

describe('test Button Functionality', () => {
  it('should render Button correctly', () => {
    const { container } = render(<Button name="0" handleClick={() => {}} />);
    expect(screen.getByRole('button')).toHaveTextContent('0');
    expect(container).toMatchSnapshot();
  });
});
