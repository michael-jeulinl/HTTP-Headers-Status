import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from '../index';

// Component rendering
const renderComponent = (props = {}) => render(<Sidebar {...props} />);

describe('<Sidebar />', () => {
  it('should render a <div> tag', () => {
    const { container } = renderComponent();
    const element = container.querySelector('div');
    expect(element).not.toBeNull();
  });
});
