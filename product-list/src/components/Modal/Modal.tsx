import { Summary } from "../../types/card";
import { CheckCircle } from "@phosphor-icons/react";
import "./styles.scss";

export function Modal({ summary, total, handleCloseModal }: Summary) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="icon-check">
            <CheckCircle size={40} />
          </span>
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </div>
        <div className="modal-body">
          <ul className="order-list">
            {summary.map((item) => {
              const thumbnail = item.image[0].thumbnail;

              return (
                <>
                  <li>
                    <div className="content-left">
                      <div className="item-img">
                        <img src={thumbnail} className="card-image" />
                      </div>
                      <div className="item-details">
                        <div className="item-details-name">{item.name}</div>
                        <div className="item-details-quantity">
                          <span>{item.quantity}x</span>
                          <span>@ ${item.price}</span>
                        </div>
                      </div>
                    </div>
                    <div className="content-right">
                      <p className="item-price">${item.price}</p>
                    </div>
                  </li>
                  <hr className="space" />
                </>
              );
            })}
          </ul>
          <div className="order-total">
            <p>Order Total</p>
            <p>${total}</p>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={handleCloseModal} className="new-order-btn">
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
}
