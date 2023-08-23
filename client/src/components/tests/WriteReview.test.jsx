/**
 * @jest-environment jsdom
 */
/* eslint-env jest */
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import axios from 'axios';
import WriteReview from '../reviews/WriteReview';
import AppContext from '../AppContext';

jest.mock('axios');

const mockContextValue = {
  productID: 40350,
};

describe('WriteReview', () => {
  const mockReviewMeta = {
    characteristics: {
      Size: { id: 135240 },
    },
  };

  it('should not show the modal by default', () => {
    const { queryByText } = render(
      <AppContext.Provider value={mockContextValue}>
        <WriteReview reviewMeta={mockReviewMeta} />
      </AppContext.Provider>,
    );
    expect(queryByText('TELL US WHAT YOU THINK')).toBeNull();
  });
  it('should open and close the modal', () => {
    const { getByText, queryByText } = render(
      <AppContext.Provider value={mockContextValue}>
        <WriteReview reviewMeta={mockReviewMeta} />
      </AppContext.Provider>,
    );

    fireEvent.click(getByText('Write a Review'));
    expect(queryByText('TELL US WHAT YOU THINK')).not.toBeNull();

    fireEvent.click(queryByText('×'));
    expect(queryByText('TELL US WHAT YOU THINK')).toBeNull();
  });
  it('should submit the review', async () => {
    axios.post.mockResolvedValue({ status: 201 });

    const { getByText, getByPlaceholderText, getByLabelText } = render(
      <AppContext.Provider value={mockContextValue}>
        <WriteReview reviewMeta={mockReviewMeta} />
      </AppContext.Provider>,
    );
    fireEvent.click(getByText('Write a Review'));

    // Fill in form data
    fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'John' } });
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'john@gmail.com' } });
    fireEvent.change(getByPlaceholderText('Enter the review summary'), { target: { value: 'Great product!' } });
    fireEvent.change(getByPlaceholderText('Write your review here'), { target: { value: 'I loved it.' } });
    fireEvent.click(getByLabelText('Yes')); // Recommend

    await act(async () => {
      fireEvent.click(getByText('Submit Review'));
    });
    expect(axios.post).toHaveBeenCalledWith('/reviews', expect.objectContaining({
      name: 'John',
      email: 'john@gmail.com',
      summary: 'Great product!',
      body: 'I loved it.',
      photos: [],
      rating: null,
      product_id: 40350,
      recommend: true,
      characteristics: expect.objectContaining({}),
    }));
  });
});
