import React from 'react';
import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import OverviewMain from '../overview/OverviewMain';
import SizeList from '../overview/selectionComps/SizeList';
import QuantityList from '../overview/selectionComps/QuantityList';
import Add from '../overview/productInfoAddComps/Add';
import AppContext from '../AppContext';

function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe('App', () => {
  const selStyle = {
    name: 'Forest Green & Black',
    original_price: '140.00',
    photos: [
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
      },
    ],
    sale_price: null,
    skus: {
      1394769: { quantity: 8, size: 'XS' },
      1394770: { quantity: 16, size: 'S' },
      1394771: { quantity: 17, size: 'M' },
      1394772: { quantity: 10, size: 'L' },
      1394773: { quantity: 15, size: 'XL' },
      1394774: { quantity: 4, size: 'XL' },
    },
    style_id: '240500',
  };
  const contextValue = {
    productID: 40344,
    currentProduct: {
      name: 'Camo Onesie',
      category: 'Jackets',
      description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    },
  };
  const styles = [selStyle, {
    name: 'TestData',
    original_price: '140.00',
    photos: [
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
      },
    ],
    sale_price: '100.00',
    skus: {
      1394769: { quantity: 0, size: 'XS' },
    },
    style_id: '240501',
  }];
  const selSku = {
    sku_id: 1394773,
    quantity: 25,
  };
  const refRatings = null;

  describe('Initialize', () => {
    test('Should render app', () => {
      render(
        <AppContext.Provider value={contextValue}>
          <OverviewMain styles={styles} refRatings={refRatings} />
        </AppContext.Provider>,
      );
    });
  });

  describe('Description', () => {
    it('Should display the correct description information', () => {
      render(
        <AppContext.Provider value={contextValue}>
          <OverviewMain styles={styles} refRatings={refRatings} />
        </AppContext.Provider>,
      );
      expect(screen.getByTestId('title')).toHaveTextContent(contextValue.currentProduct.name);
      expect(screen.getByTestId('description')).toHaveTextContent(contextValue.currentProduct.description);
      expect(screen.getByTestId('category')).toHaveTextContent(contextValue.currentProduct.category);
    });
  });

  describe('Share Modal', () => {
    it('Should open and close modal', () => {
      render(
        <AppContext.Provider value={contextValue}>
          <OverviewMain styles={styles} refRatings={refRatings} />
        </AppContext.Provider>,
      );
      const share = screen.getByTestId('share');
      fireEvent.click(share);
      expect(screen.getByTestId('closeShare')).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('closeShare'));
      fireEvent.click(share);
      expect(screen.getByTestId('cancelShare')).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('cancelShare'));
    });
  });

  describe('Styles', () => {
    it('Should render default style image', () => {
      render(
        <AppContext.Provider value={contextValue}>
          <OverviewMain styles={styles} refRatings={refRatings} />
        </AppContext.Provider>,
      );
      expect(screen.getByTestId('stylesTestSelected').getAttribute('src')).toEqual(selStyle.photos[0].thumbnail_url);
    });

    it('Should include multiple selectable styles', () => {
      render(
        <AppContext.Provider value={contextValue}>
          <OverviewMain styles={styles} refRatings={refRatings} />
        </AppContext.Provider>,
      );
      const option = screen.getByTestId('stylesTestOption');
      expect(option).toBeInTheDocument();
      expect(option.getAttribute('src')).toEqual(styles[1].photos[0].thumbnail_url);
      fireEvent.click(option);
      const select = screen.getByTestId('stylesTestSelected');
      expect(select.getAttribute('src')).toEqual(styles[1].photos[0].thumbnail_url);
    });
  });

  describe('Selectable Image', () => {
    it('Should have default image at 0 index ', () => {
      render(
        <AppContext.Provider value={contextValue}>
          <OverviewMain styles={styles} refRatings={refRatings} />
        </AppContext.Provider>,
      );
      expect(screen.getByTestId('photoTestSelected').getAttribute('src')).toEqual(selStyle.photos[0].thumbnail_url);
    });
    it('Should include multiple selectable photos', () => {
      render(
        <AppContext.Provider value={contextValue}>
          <OverviewMain styles={styles} refRatings={refRatings} />
        </AppContext.Provider>,
      );
      const option = screen.getByTestId('photoTestOption');
      expect(option).toBeInTheDocument();
      expect(option.getAttribute('src')).toEqual(selStyle.photos[1].thumbnail_url);
      fireEvent.click(option);
      const select = screen.getByTestId('photoTestSelected');
      expect(select.getAttribute('src')).toEqual(selStyle.photos[1].thumbnail_url);
    });
  });

  describe('Size List', () => {
    it('should render "Select Size" upon initialization', async () => {
      render(
        <SizeList
          selStyle={selStyle}
          sizeNotice={false}
          setShowButton={false}
          setSizeNotice={null}
          setSelSku={() => null}
          ref={null}
        />,
      );
      expect(screen.getByText('Select Size')).toBeVisible();
    });

    it('should call onChange when the first option is selected', async () => {
      render(
        <SizeList
          selStyle={selStyle}
          sizeNotice={false}
          setShowButton={false}
          setSizeNotice={() => false}
          setSelSku={() => null}
          ref={null}
        />,
      );

      const node = screen.getByRole('combobox');
      expect(screen.getByText('Select Size')).toBeVisible();

      await waitFor(async () => {
        await fireEvent.keyDown(node, { key: 'ArrowDown', code: 'ArrowDown', charCode: 40 });
      });
      expect(screen.getByText('XS')).toBeVisible();
    });

    it('should show correct options to be selected', async () => {
      const { user } = setup(
        <SizeList
          selStyle={selStyle}
          sizeNotice={false}
          setShowButton={false}
          setSizeNotice={() => false}
          setSelSku={() => null}
          ref={null}
        />,
      );
      await waitFor(async () => {
        screen.getByRole('combobox').focus();
        await user.keyboard('[ArrowDown]');
        await user.click(screen.getByText('XL'));
        await user.click(screen.getByText('XL'));
        screen.getByRole('combobox').focus();
        await user.keyboard('[ArrowDown]');
      });
      expect(screen.getByText('XS')).toBeVisible();
      expect(screen.getByText('S')).toBeVisible();
      expect(screen.getByText('M')).toBeVisible();
      expect(screen.getByText('L')).toBeVisible();
      const badSize = screen.queryByText('XXL');
      expect(badSize).not.toBeInTheDocument();
    });
  });

  describe('Quantity List', () => {
    it('should default to value of 1 if size is selected', async () => {
      render(
        <QuantityList
          selSku={selSku}
          setSelQuantity={() => null}
        />,
      );
      expect(screen.getByText('1')).toBeVisible();
    });

    it('should call onChange when the first option is selected', async () => {
      render(
        <QuantityList
          selSku={selSku}
          setSelQuantity={() => null}
        />,
      );

      const node = screen.getByRole('combobox');
      expect(screen.getByText('1')).toBeVisible();

      await waitFor(async () => {
        await fireEvent.keyDown(node, { key: 'ArrowDown', code: 'ArrowDown', charCode: 40 });
      });
      expect(screen.getByText('2')).toBeVisible();
    });

    it('should have correct selectable options if more than 15', async () => {
      const { user } = setup(
        <QuantityList
          selSku={selSku}
          setSelQuantity={() => null}
        />,
      );
      await waitFor(async () => {
        screen.getByRole('combobox').focus();
        await user.keyboard('[ArrowDown]');
        await user.click(screen.getByText('15'));
      });
      expect(screen.getByText('15')).toBeVisible();
      await waitFor(async () => {
        screen.getByRole('combobox').focus();
        await user.keyboard('[ArrowDown]');
      });
      expect(screen.getByText('14')).toBeVisible();
      const tooHigh = screen.queryByText('16');
      expect(tooHigh).not.toBeInTheDocument();
    });

    it('should have correct selectable options if less than 15', async () => {
      const selSku2 = {
        sku_id: 1394773,
        quantity: 2,
      };
      const { user } = setup(
        <QuantityList
          selSku={selSku2}
          setSelQuantity={() => null}
        />,
      );
      await waitFor(async () => {
        screen.getByRole('combobox').focus();
        await user.keyboard('[ArrowDown]');
        await user.click(screen.getByText('2'));
      });
      expect(screen.getByText('2')).toBeVisible();
    });
  });

  describe('Magnifier', () => {
    it('Should render without throwing an error', async () => {
      render(
        <AppContext.Provider value={contextValue}>
          <OverviewMain styles={styles} refRatings={refRatings} />
        </AppContext.Provider>,
      );
      const main = screen.getByTestId('mainImage');
      fireEvent.click(main);
      expect(screen.getByTestId('expandedImage')).toBeInTheDocument();
    });

    it('Should only show right button upon initialization', async () => {
      render(
        <AppContext.Provider value={contextValue}>
          <OverviewMain styles={styles} refRatings={refRatings} />
        </AppContext.Provider>,
      );
      const main = screen.getByTestId('mainImage');
      fireEvent.click(main);
      expect(screen.getByTestId('expandedRightButton')).toBeInTheDocument();
      const left = screen.queryByTestId('expandedLeftButton');
      expect(left).not.toBeInTheDocument();
    });

    it('Buttons should change index of Main and Expanded', async () => {
      render(
        <AppContext.Provider value={contextValue}>
          <OverviewMain styles={styles} refRatings={refRatings} />
        </AppContext.Provider>,
      );
      const main = screen.getByTestId('mainImage');
      await waitFor(async () => {
        await fireEvent.click(main);
        const right = screen.getByTestId('expandedRightButton');
        await fireEvent.click(right);
      });
      const expandedImage = screen.getByTestId('expandedImage');

      expect(main.getAttribute('src')).toEqual(styles[0].photos[1].url);
      expect(expandedImage.getAttribute('src')).toEqual(styles[0].photos[1].url);

      await waitFor(async () => {
        const left = screen.getByTestId('expandedLeftButton');
        await fireEvent.click(left);
      });
      expect(main.getAttribute('src')).toEqual(styles[0].photos[0].url);
      expect(expandedImage.getAttribute('src')).toEqual(styles[0].photos[0].url);
    });

    it('Should render magnifier without throwing an error', async () => {
      const { user } = setup(
        <AppContext.Provider value={contextValue}>
          <OverviewMain styles={styles} refRatings={refRatings} />
        </AppContext.Provider>,
      );
      // render(
      //   <AppContext.Provider value={contextValue}>
      //     <OverviewMain styles={styles} refRatings={refRatings} />
      //   </AppContext.Provider>,
      // );
      const main = screen.getByTestId('mainImage');

      await waitFor(async () => {
        await fireEvent.click(main);
        await userEvent.hover(screen.getByTestId('title'));
        await userEvent.hover(screen.getByTestId('addtocart'));
        await userEvent.hover(screen.getByTestId('expandedImage'));
        await userEvent.hover(screen.getByTestId('title'));
        await user.click(screen.getByTestId('title'));
      });
      // expect(screen.getByTestId('expandedRightButton')).toBeInTheDocument();
      // const left = screen.queryByTestId('expandedLeftButton');
      // expect(left).not.toBeInTheDocument();
    });
  });

  describe('Add to Cart', () => {
    it('Should add to cart without throwing error', async () => {
      render(
        <Add
          selSku={selSku}
          selQuntity={4}
          showButton
          setSelSku={() => null}
        />,
      );
      const add = screen.getByTestId('addtocart');
      fireEvent.click(add);
    });
  });
});
