/**
 * @jest-environment jsdom
 */
/* eslint-env jest */
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import axios from 'axios';
import ReviewCard from '../reviews/ReviewCard.jsx';

// Mocking the axios to isolate the component from its external dependencies
jest.mock('axios');

describe('ReviewCard', () => {
  const mockReview = {
    helpfulness: 5,
    review_id: 1,
    summary: 'Great product!',
    rating: 4,
    body: 'This is the product review body.',
    response: 'Thanks for the feedback!',
    recommend: true,
    photos: [
      {
        url: 'https://example.com/photo1.jpg',
        id: 1
      },
      {
        url: 'https://example.com/photo2.jpg',
        id: 2
      }
    ],
    reviewer_name: 'John Doe',
    date: '2023-01-01'
  };

  it('should render review correctly', () => {
    const { getByText, getByAltText } = render(<ReviewCard review={mockReview} />);
    
    expect(getByText('GREAT PRODUCT!')).toBeInTheDocument;
    expect(getByText('This is the product review body.')).toBeInTheDocument;
    expect(getByText('Response from seller:')).toBeInTheDocument;
    expect(getByText('Thanks for the feedback!')).toBeInTheDocument;
  });

  it('should increase helpful count on "Helpful" button click', async () => {
    axios.put.mockResolvedValue({ status: 204 });

    const { getByText } = render(<ReviewCard review={mockReview} />);

    const helpfulButton = getByText('Helpful');
    fireEvent.click(helpfulButton);

    await act(async () => {
      expect(axios.put).toHaveBeenCalledWith('/reviews/1/helpful');
    });

    expect(getByText('6')).toBeInTheDocument;
  });

  it('should call the correct endpoint on "Report" button click', async () => {
    axios.put.mockResolvedValue({ status: 204 });

    const { getByText } = render(<ReviewCard review={mockReview} />);

    const reportButton = getByText('Report');
    fireEvent.click(reportButton);

    await act(async () => {
      expect(axios.put).toHaveBeenCalledWith('/reviews/1/report');
    });
  });

});
