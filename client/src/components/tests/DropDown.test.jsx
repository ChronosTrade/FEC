/**
 * @jest-environment jsdom
 */
/* eslint-env jest */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from '../reviews/Dropdown';

describe('Dropdown', () => {
  it('should render without crashing', () => {
    render(<Dropdown onChange={() => {}} />);
  });

  it('should call onChange when an option is selected', () => {
    const mockOnChange = jest.fn();
    const { getByDisplayValue } = render(<Dropdown onChange={mockOnChange} />);

    // "Newest" option
    fireEvent.change(getByDisplayValue('Relevant'), { target: { value: 'newest' } });
    expect(mockOnChange).toHaveBeenCalledWith('newest');

    // "Helpful" option
    fireEvent.change(getByDisplayValue('Newest'), { target: { value: 'helpful' } });
    expect(mockOnChange).toHaveBeenCalledWith('helpful');
  });
});
