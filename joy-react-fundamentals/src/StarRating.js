import React from "react";
import range from "./utils/range";
import ShoppingCartItems from "./data/shopping_cart_items";

const StarRating = ({ rating }) => {
  return (
    <div className="stars-wrapper">
      {range(rating).map((num) => (
        <img
          width={20}
          key={num}
          alt=""
          className="gold-star"
          src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
        />
      ))}
    </div>
  );
};

const StarRatingDemo = () => {
  const items = ShoppingCartItems;

  return (
    <>
      {items.map((cartItem) => (
        <div style={{ textAlign: "center", marginBottom: 5, padding: 10 }}>
          <p>
            <strong>{cartItem.title}</strong>
          </p>
          <p>Rating: {cartItem.starRating} / 5</p>
          <StarRating rating={cartItem.starRating} />
        </div>
      ))}
    </>
  );
};

export default StarRatingDemo;
