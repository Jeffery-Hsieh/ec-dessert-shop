import React, { useState, useContext } from "react";

import CartProduct from "./CartProduct";
import { formatPrice } from "../../redux/util";

import SessionContext from "../../store/context";
import { REMOVE_PRODUCT } from "../../store/actionTypes";
import "./style.scss";

const FloatCart = () => {
  const { state, dispatch } = useContext(SessionContext);
  const {
    cartProducts,
    productQuantity,
    installments,
    totalPrice,
    currencyId,
    currencyFormat,
  } = state;

  const [isOpen, setIsOpen] = useState(false);

  const openFloatCart = () => {
    setIsOpen(true);
  };

  const closeFloatCart = () => {
    setIsOpen(false);
  };

  const removeProduct = (product) => {
    dispatch({ type: REMOVE_PRODUCT, payload: product });
  };

  let classes = ["float-cart"];

  if (!!isOpen) {
    classes.push("float-cart--open");
  }

  const products = cartProducts.map((p) => {
    return <CartProduct product={p} removeProduct={removeProduct} key={p.id} />;
  });

  return (
    <div className={classes.join(" ")}>
      {/* If cart open, show close (x) button */}
      {isOpen && (
        <div onClick={() => closeFloatCart()} className="float-cart__close-btn">
          X
        </div>
      )}

      {/* If cart is closed, show bag with quantity of product and open cart action */}
      {!isOpen && (
        <span
          onClick={() => openFloatCart()}
          className="bag bag--float-cart-closed"
        >
          <span className="bag__quantity">{productQuantity}</span>
        </span>
      )}

      <div className="float-cart__content">
        <div className="float-cart__header">
          <span className="bag">
            <span className="bag__quantity">{productQuantity}</span>
          </span>
          <span className="header-title">Cart</span>
        </div>

        <div className="float-cart__shelf-container">
          {products}
          {!products.length && (
            <p className="shelf-empty">
              Add some products in the cart <br />
              :)
            </p>
          )}
        </div>

        <div className="float-cart__footer">
          <div className="sub">SUBTOTAL</div>
          <div className="sub-price">
            <p className="sub-price__val">
              {`${currencyFormat} ${formatPrice(totalPrice, currencyId)}`}
            </p>
            <small className="sub-price__installment">
              {!!installments && (
                <span>
                  {`OR UP TO ${installments} x ${currencyFormat} ${formatPrice(
                    totalPrice / installments,
                    currencyId
                  )}`}
                </span>
              )}
            </small>
          </div>
          <div onClick={() => this.proceedToCheckout()} className="buy-btn">
            Checkout
          </div>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = ({cart, total}, ownProps) => ({
//   cartProducts: cart.products,
//   newProduct: cart.productToAdd,
//   productToRemove: cart.productToRemove,
//   state: total.data
// });

export default FloatCart;
