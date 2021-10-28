import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calc from '../Calc';

describe('test Calc component functionality', () => {
  it('should render Calc heading correctly', () => {
    const { container, getByRole } = render(<Calc />);
    expect(getByRole('heading')).toHaveTextContent('Lets do some calculations');
    expect(container).toMatchSnapshot();
  });
});
