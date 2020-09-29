import React from 'react';
import { render } from '@testing-library/react';
import H1 from '../index';

// Component rendering
const renderComponent = (props = {}) => render(<Navbar {...props} />);

describe('<H1 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const { container } = render(<H1 id={id} />);
    expect(container.querySelector('h1').id).toEqual(id);
  });

  it('should render its text with the span ico', () => {
    const children = 'Text';
    const { container, queryByText } = render(<H1>{children}</H1>);
    const { childNodes } = container.querySelector('h1');
    expect(childNodes).toHaveLength(2);
    expect(queryByText(children)).not.toBeNull();
  });
});
