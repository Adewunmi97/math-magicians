import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import UI from '../UI';

describe('test UI functionality', () => {
  it('should render 19 buttons', () => {
    const { container } = render(<UI onClickHandler={() => {}} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(19);
    expect(container).toMatchSnapshot();
  });
});
