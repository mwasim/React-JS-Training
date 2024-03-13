import React from "react";
import ShoppingCartItems from "./data/shopping_cart_items";

const items = ShoppingCartItems;

const CartTable = ({ items }) => {
  return (
    <table className="shopping-cart">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, imageSrc, imageAlt, title, price }) => (
          <tr key={id} className="cart-row">
            <td>
              <img
                className="product-thumb"
                src={imageSrc}
                alt={imageAlt}
                width={75}
              />
            </td>
            <td>{title}</td>
            <td>${price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const MappingOverDataShoppingCart = () => {
  const inStockItems = items.filter((value) => value.inStock);
  const soldOutItems = items.filter((value) => value.inStock === false);
  return (
    <>
      <h2>Shopping cart</h2>
      <CartTable items={inStockItems} />
      <div className="actions">
        <button>Continue checkout</button>
      </div>

      <h2>Sold out</h2>
      <CartTable items={soldOutItems} />
    </>
  );
};

export default MappingOverDataShoppingCart;
