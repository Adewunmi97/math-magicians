import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import View from '../View';

describe('test View functionality', () => {
  it('should render 6x2 correctly on the screen', () => {
    const { container } = render(<View output="6" operation="x" next="2" />);
    const viewScreen = screen.getByTestId('screen');
    expect(viewScreen).toHaveTextContent('6x2');
    expect(container).toMatchSnapshot();
  });
});
