import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from '../index';

// Component rendering
const renderComponent = (props = {}) => render(<Button {...props} />);

const label = 'Test';

describe('<Button />', () => {
  it('should render a <button> tag', () => {
    const { container } = renderComponent({ label });
    expect(container.querySelector('button')).not.toBeNull();
  });

  it('should render properly the label', () => {
    const { getByText } = renderComponent({ label });
    const linkElement = getByText(label);
-   expect(linkElement).toBeInTheDocument();
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const { container } = renderComponent({ label, onClick: onClickSpy });
    fireEvent.click(container.querySelector('button'));
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should have a class attribute', () => {
    const { container } = renderComponent();
    expect(container.querySelector('button').hasAttribute('class')).toBe(true);
  });
});
