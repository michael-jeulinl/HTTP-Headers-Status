import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../index';

// Component rendering
const renderComponent = (props = {}) => render(<Navbar {...props} />);

describe('<Navbar />', () => {
  it('should render a <div> tag', () => {
    const { container } = renderComponent();
    const element = container.querySelector('div');
    expect(element).not.toBeNull();
  });
});
