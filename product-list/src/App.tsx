import { Card } from "./components/Card/Card";
import { CartProductList } from "./components/CartProductList/CartProductList";
import data from "./service/data.json";
import { CardProps, CartProductListProps } from "./types/card";
import cake from "./assets/images/illustration-empty-cart.svg";
import { useState } from "react";

export function App() {
  const [cartProducts, setCartProducts] = useState<CartProductListProps[]>([]);
  const [totalValue, setTotalValue] = useState<number>();
  const dataCard: CardProps[] = data;

  const handleAddToCard = (product: CardProps, quantity: number) => {
    setCartProducts((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.name === product.name
      );

      let updatedCart;

      if (existingProduct) {
        const updatedQuantity = existingProduct.quantity + quantity;

        if (updatedQuantity <= 0) {
          updatedCart = prevCart.filter((item) => item.name !== product.name);
        } else {
          updatedCart = prevCart.map((item) =>
            item.name === product.name
              ? { ...item, quantity: updatedQuantity }
              : item
          );
        }
      } else {
        updatedCart = [
          ...prevCart,
          {
            name: product.name,
            price: product.price,
            quantity,
            priceDiscount: product.price,
          },
        ];
      }

      const newTotalValue = updatedCart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setTotalValue(newTotalValue);

      return updatedCart;
    });
  };

  const deleteItemByName = (name: string) => {
    setCartProducts((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <main>
      <div className="container">
        <h1 className="title-main">Dessets</h1>

        <div className="content-grid">
          <div className="card">
            {dataCard.map((item) => {
              return (
                <div key={item.name}>
                  <Card
                    image={item.image}
                    category={item.category}
                    name={item.name}
                    price={item.price}
                    handleIncrement={() => handleAddToCard(item, 1)}
                    handleDecrement={() => handleAddToCard(item, -1)}
                    count={
                      cartProducts.find((product) => product.name === item.name)
                        ?.quantity || 0
                    }
                  />
                </div>
              );
            })}
          </div>
          <div className="cart">
            <h2>Your cart ({cartProducts.length})</h2>
            {cartProducts.length > 0 ? (
              <>
                <CartProductList
                  products={cartProducts}
                  handleDelete={deleteItemByName}
                />
                <div className="cart-product-summary">
                  <span>Order Total</span>
                  <span>${totalValue}</span>
                </div>
                <button className="btn-confirm-order">Confirm Order</button>
              </>
            ) : (
              <div className="empty-message">
                <img
                  src={cake}
                  alt="Image of a cake when the cart is empty without any information."
                />
                <span>Your added items will appear here</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
