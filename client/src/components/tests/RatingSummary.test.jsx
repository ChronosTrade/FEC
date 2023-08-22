/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import RatingSummary from '../reviews/RatingSummary';
import AppContext from '../AppContext';

const mockContextValue = {
  totalRatings: 5,
  averageRatings: 3.5,
  setTotalRatings: jest.fn(),
  setAverageRatings: jest.fn(),
};

const mockRatings = {
  1: 2,
  2: 1,
  3: 5,
  4: 7,
  5: 10,
};

const mockRecommended = {
  true: 20,
  false: 5,
};

const mockCharacteristics = {
  Size: {
    value: 3,
  },
  Width: {
    value: 2,
  },
  Comfort: {
    value: 4.5,
  },
  Quality: {
    value: 4,
  },
};

describe('RatingSummary Component', () => {
  test('renders RatingSummary with ratings, recommendations, and characteristics', () => {
    render(
      <AppContext.Provider value={mockContextValue}>
        <RatingSummary
          ratings={mockRatings}
          recommended={mockRecommended}
          characteristics={mockCharacteristics}
        />
      </AppContext.Provider>,
    );

    // elements
    expect(screen.queryByText('3.5')).toBeTruthy();
    expect(screen.queryByText('80.0 % of reviews recommend this product')).toBeTruthy();

    // characteristics
    expect(screen.queryByText('Size:')).toBeTruthy();
    expect(screen.queryByText('Width:')).toBeTruthy();
    expect(screen.queryByText('Comfort:')).toBeTruthy();
    expect(screen.queryByText('Quality:')).toBeTruthy();
  });
});
