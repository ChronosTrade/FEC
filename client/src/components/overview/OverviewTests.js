import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import ProductList from '../related_products/Lists/ProductList';

describe('Overview', () => {
  it('renders the product list', () => {
    render(<ProductList />);


    expect(screen.getByText('Related Products'));
  });
});