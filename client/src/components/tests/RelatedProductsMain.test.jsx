import React from 'react';
import axios from 'axios';
import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import ProductList from '../related_products/Lists/ProductList';
import {
  products, reviewMeta, reviews, style, defaultProduct,
} from './exampleData';
import Card from '../related_products/ProductCard/Card';
import Comparison from '../related_products/ProductCard/Comparison';
import AppContext from '../AppContext';

const isEqual = require('lodash/isEqual');

jest.mock('axios');
const mockedAxios = axios;
const mockContextValue = {
  productID: 40344,
  currentProduct: defaultProduct,
  averageRatings: 3.7,
  totalRatings: 4,
  setProductID: jest.fn(),
  setTotalRatings: jest.fn(),
  setAverageRatings: jest.fn(),
};

const relatedProducts = [40345, 40346, 40351, 40350];

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
    if (url.includes('/styles')) {
      return Promise.resolve({
        data: style,
      });
    }
    throw new Error('Unknown URL');
  });
});

describe('Product List', () => {
  it('should display the names of the products', async () => {
    render(
      <AppContext.Provider value={mockContextValue}>
        <ProductList products={products} />
      </AppContext.Provider>,
    );

    await waitFor(() => expect(screen.queryByText('Bright Future Sunglasses')).toBeTruthy());
    await waitFor(() => expect(screen.queryByText('Morning Joggers')).toBeTruthy());
    await waitFor(() => expect(screen.queryByText('YEasy 350')).toBeTruthy());
    await waitFor(() => expect(screen.queryByText('Blues Suede Shoes')).toBeTruthy());
  });
});

describe('Card', () => {
  it('should change the current product when clicked', async () => {
    render(
      <AppContext.Provider value={mockContextValue}>
        <Card product={products[0]} type="product" />
      </AppContext.Provider>,
    );

    await waitFor(() => expect(screen.queryByText('Bright Future Sunglasses')).toBeTruthy());
    await waitFor(() => fireEvent.click(screen.getByText('Bright Future Sunglasses')));
    await waitFor(() => expect(mockContextValue.setProductID).toHaveBeenCalled());
  });

  it('should render a comparison table as expected', async () => {
    const currentProductFeatures = mockContextValue.currentProduct.features;
    render(
      <AppContext.Provider value={mockContextValue}>
        <Comparison name={products[1].name} features={products[1].features} />
      </AppContext.Provider>,
    );

    await waitFor(() => expect(screen.queryByText('Comparing')).toBeTruthy());
    await waitFor(() => expect(screen.queryByText('Brass')).toBeTruthy());
    await waitFor(() => expect(screen.queryByText('100% Cotton')).toBeTruthy());
    await waitFor(() => expect(screen.queryByText('Skinny')).toBeTruthy());
  });
});
