/**
 * @jest-environment jsdom
 */
/* eslint-env jest */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomRadioButton from '../reviews/RadioButton.jsx';

describe('CustomRadioButton', () => {
  
  it('should render radio buttons based on provided options', () => {
    const mockProps = {
      label: 'Size',
      options: ['Option 1', 'Option 2'],
      value: 1,
      onChange: jest.fn(),
    };

    const { getByText } = render(<CustomRadioButton {...mockProps} />);
    
    expect(getByText('Option 1')).toBeInTheDocument;
    expect(getByText('Option 2')).toBeInTheDocument;
    expect(getByText('Too small')).toBeInTheDocument;
    expect(getByText('Too big')).toBeInTheDocument;
  });

  it('should call onChange with correct index when a radio button is clicked', () => {
    const mockProps = {
      label: 'Size',
      options: ['Option 1', 'Option 2'],
      value: 1,
      onChange: jest.fn(),
    };

    const { getByText } = render(<CustomRadioButton {...mockProps} />);
    
    const option2Button = getByText('Option 2');
    fireEvent.click(option2Button);
    
    expect(mockProps.onChange).toHaveBeenCalledWith(2);
  });

});
