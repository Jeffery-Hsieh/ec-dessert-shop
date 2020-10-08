import React, { useContext } from 'react'
import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";

// component
import Product from "./Product"

// hooks
import useGetProducts from "../../hooks/useGetProducts"

// store
import { ADD_PRODUCT } from '../../store/actionTypes';
import SessionContext from "../../store/context"

import "./style.scss"

const override = css`
  position: absolute;
  top: 45%;
  left: 50%;
`;

const ShopPage = () => {
  const [{ products, isLoading, },] = useGetProducts(
    "https://script.google.com/a/caece.net/macros/s/AKfycby_N7ePsrcaUAso8Vft420oR9sisiJsu3G06cvw/exec",
    []
  )

  const { state, dispatch } = useContext(SessionContext)
  const { cartProducts } = state;

  const addProduct = product => {
    let productAlreadyInCart = false;

    // console.log(cartProducts);

    let newCartProducts = cartProducts.map(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
      return cp
    });

    if (!productAlreadyInCart) {
      newCartProducts.push({ ...product });
    }

    dispatch({
      type: ADD_PRODUCT,
      payload: {
        cartProducts: newCartProducts,
        productQuantity: newCartProducts.length
      }
    });
  };

  if (isLoading) {
    return <ScaleLoader
      css={override}
      height={50}
      widht={2}
      radius={2}
      margin={10}
      color={"#28a745"}
    />
  }

  return (
    <React.Fragment>
      <div className="shelf-container container-fluid">
        <div className="row">
          {products.map(p =>
            <Product
              key={p.id}
              product={p}
              addProduct={addProduct}
            />
          )
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export default ShopPage