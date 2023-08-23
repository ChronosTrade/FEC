/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import axios from 'axios';
import ReviewMain from '../reviews/ReviewMain';
import AppContext from '../AppContext';
import { reviews, reviewMeta } from './exampleData';

jest.mock('axios');

beforeEach(() => {
  axios.get.mockImplementation((url) => {
    if (url.includes('/reviews?product_id=')) {
      return Promise.resolve({
        data: reviews,
      });
    }
    if (url.includes('/reviews/meta?product_id=')) {
      return Promise.resolve({
        data: reviewMeta,
      });
    }
    throw new Error('Unknown URL');
  });
});

describe('ReviewMain Component', () => {
  const mockContextValue = {
    productID: 40350,
    averageRatings: 3.7,
    totalRatings: 4,
    setTotalRatings: jest.fn(),
    setAverageRatings: jest.fn(),
  };

  test('renders reviews and meta info', async () => {
    render(
      <AppContext.Provider value={mockContextValue}>
        <ReviewMain />
      </AppContext.Provider>,
    );

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));
    await waitFor(() => expect(screen.queryByText('gives you wings')).toBeInTheDocument);
    await waitFor(() => expect(screen.queryByText('There are 5 reviews')).toBeInTheDocument);
  });

  test('should sort reviews based on dropdown selection', async () => {
    render(
      <AppContext.Provider value={mockContextValue}>
        <ReviewMain />
      </AppContext.Provider>,
    );

    await waitFor(() => expect(screen.queryByText('gives you wings')).toBeInTheDocument);

    fireEvent.change(screen.getByDisplayValue('Relevant'), { target: { value: 'newest' } });

    fireEvent.change(screen.getByDisplayValue('Newest'), { target: { value: 'helpful' } });
  });

  test('should render correct number of ReviewCard components', async () => {
    render(
      <AppContext.Provider value={mockContextValue}>
        <ReviewMain />
      </AppContext.Provider>,
    );

    await waitFor(() => expect(screen.queryByText('gives you wings')).toBeInTheDocument);
    const reviewCards = screen.queryAllByTestId('review-card');
    expect(reviewCards.length).toBe(2);
  });

  test('should load more reviews when "More Reviews" button is clicked', async () => {
    render(
      <AppContext.Provider value={mockContextValue}>
        <ReviewMain />
      </AppContext.Provider>,
    );

    await waitFor(() => expect(screen.queryByText('gives you wings')).toBeInTheDocument);
    fireEvent.click(screen.getByText('More Reviews'));
    await waitFor(() => expect(screen.queryByText('I like beans')).toBeInTheDocument);
  });
});
