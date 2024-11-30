import { CartProductListComponentProps } from "../../types/card";
import "./styles.scss";
import { XCircle } from "@phosphor-icons/react";

export function CartProductList({
  products,
  handleDelete,
}: CartProductListComponentProps) {
  return (
    <div className={`${products.length > 3 ? "scroll" : ""} cart-product`}>
      {products.map((product) => {
        return (
          <div className="cart-product-list" key={product.name}>
            <div className="cart-product-item">
              <h3>{product.name}</h3>
              <div className="cart-container">
                <div className="cart-product-item">
                  <span className="cart-product-item-qtd">{`${product.quantity}x`}</span>
                  <span className="cart-product-item-discount">{`@$${product.price}`}</span>
                  <span className="cart-product-item-price">{`$${product.price}`}</span>
                </div>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(product.name)}
                >
                  <XCircle size={18} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
