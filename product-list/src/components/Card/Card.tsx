import { ShoppingCart, PlusCircle, MinusCircle } from "@phosphor-icons/react";
import { CardProps } from "../../types/card";
import "./styles.scss";
import { useState } from "react";

export function Card({
  image,
  category,
  name,
  price,
  count,
  handleIncrement,
  handleDecrement,
}: CardProps) {
  const [showBtnAddProduct, setShowBtnAddProduct] = useState(false);

  return (
    <div className="card-item">
      <div className="image-container">
        <picture>
          <source srcSet={image.desktop} media="(min-width: 1024px)" />
          <source srcSet={image.tablet} media="(min-width: 768px)" />
          <source srcSet={image.mobile} media="(min-width: 767px)" />
          <img src={image.thumbnail} alt={name} className="card-image" />
        </picture>
        <div className="btn-card">
          {!showBtnAddProduct ? (
            <button
              className="btn add-to-cart-button"
              onClick={() => setShowBtnAddProduct(!showBtnAddProduct)}
            >
              <span className="icon">
                <ShoppingCart size={15} />
              </span>{" "}
              Add to Cart
            </button>
          ) : (
            <div className="btn btn-add-qtd">
              <button onClick={handleDecrement}>
                <MinusCircle size={20} />
              </button>
              <span>{count}</span>
              <button onClick={handleIncrement}>
                <PlusCircle size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="card-content">
        <div className="category">{category}</div>
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </div>
    </div>
  );
}
