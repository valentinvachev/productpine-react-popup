import React, { useContext } from 'react';
import { ReactComponent as Minus } from '../assets/minus.svg';
import { ReactComponent as Plus } from '../assets/plus.svg';
import { amountDisplay } from '../../../../utils/amountDisplay';
import './ProductCart.scss';

const ProductCart = ({
    id,
    name,
    imageUrl,
    details,
    quantity,
    regularPrice,
    discountPrice,
    currencySign,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
}) => {
    return (
        <div className='product-cart'>
            <div className='product-cart-image-wrapper'>
                <img src={imageUrl} alt='image' />
            </div>
            <div className='product-cart-info-wrapper'>
                <h4>{name}</h4>
                {details && Object.keys(details).length
                    ? Object.keys(details).map((key, index, array) => {
                          return (
                              <React.Fragment key={index}>
                                  <span className='product-cart-details'>{`${key
                                      .charAt(0)
                                      .toUpperCase()}${key.slice(1)}: ${
                                      details[key]
                                  }`}</span>
                                  {index !== array.length - 1 ? (
                                      <div className='details-dot' />
                                  ) : null}
                              </React.Fragment>
                          );
                      })
                    : null}
                <div className='product-cart-quantity-price'>
                    <div className='product-cart-quantity'>
                        <span
                            className='product-cart-quantity-minus'
                            onClick={() => handleDecreaseQuantity(id)}
                        >
                            <Minus />
                        </span>
                        {quantity}
                        <span
                            className='product-cart-quantity-plus'
                            onClick={() => handleIncreaseQuantity(id)}
                        >
                            <Plus />
                        </span>
                    </div>
                    <div>
                        {regularPrice !== discountPrice ? (
                            <>
                                <span className='product-cart-regular-price'>
                                    {currencySign}
                                    {amountDisplay(quantity, regularPrice)}
                                </span>
                                <span className='product-cart-discount-price-red product-cart-discount-price'>
                                    {currencySign}
                                    {amountDisplay(quantity, discountPrice)}
                                </span>
                            </>
                        ) : (
                            <span className='product-cart-discount-price'>
                                {currencySign}
                                {amountDisplay(quantity, regularPrice)}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;
