import React from 'react';
import PropTypes from 'prop-types';

import Thumb from '../../../components/Thumb';
import { formatPrice } from '../../../redux/util';

const Product = ({ product, addProduct }) => {
  product.quantity = 1;

  let formattedPrice = formatPrice(product.price, product.currencyId);

  let productInstallment;

  if (!!product.installments) {
    const installmentPrice = product.price / product.installments;

    productInstallment = (
      <div className="installment">
        <span>or {product.installments} x</span>
        <b>
          {product.currencyFormat}
          {formatPrice(installmentPrice, product.currencyId)}
        </b>
      </div>
    );
  }

  return (
    <div
      className="shelf-item col-xs-12 col-sm-6 col-md-3"
      onClick={product.available ? () => {addProduct(product)} : null}
      data-sku={product.sku}
    >
      {product.available && (
        <div className="shelf-stopper">Available</div>
      )}
      <Thumb
        classes="shelf-item__thumb"
        src={require(`../../../Assets/products/${product.sku}_1.jpg`)}
        alt={product.title}
      />
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </div>
        {productInstallment}
      </div>
      {product.available
        ? <div className="shelf-item__buy-btn">Add to cart</div>
        : <div className="shelf-item__soldOut-btn">Sold out</div>
      }
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func
};

export default Product
