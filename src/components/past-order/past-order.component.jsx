import { useState, useEffect } from "react";
import "./past-order.styles.scss";

const PastOrder = ({ order }) => {
  const [expanded, setExpanded] = useState(false);

  const { id, amount, date, items, address } = order;
  const itemTotal = ((amount - 150) * 100) / 118;

  // Function to handle card click and toggle expansion
  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`order-card ${expanded ? "expanded" : ""}`}
      onClick={handleCardClick}
    >
      <div className="order-details">
        <p>
          <strong>Order ID: </strong> {id}
        </p>
        <p>
          <strong>Order Date: </strong> {date.split("G")[0]}
        </p>
        <p>
          <strong>Order Total: </strong> ₹{amount} (Including Gst and ₹150
          delivery cost)
        </p>

        {expanded ? ( // Show additional details when expanded is true
          <div>
            <div className="order-items">
              <h4>Order Items:</h4>
              <ul>
                {items.map((item) => (
                  <li key={item.id} className="order-item">
                    <img src={item.imageUrl} alt={item.name} />
                    <div className="order-item-details">
                      <p>
                        <strong>{item.name}</strong>
                      </p>
                      <p>Price: ₹{item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="delivery-info">
              <h4>Delivery Address:</h4>
              <p>
                {address.firstName} {address.lastName}
                <br />
                {address.address}
                <br />
                Contact: {address.phone}
              </p>
              <h4>Payment Method:</h4>
              <p>Card</p>
            </div>
            <div className="order-summary">
              <h4>Order Summary:</h4>
              <p>
                <strong>Items:</strong> ₹{itemTotal.toFixed(2)}
              </p>
              <p>
                <strong>Delivery & Packaging:</strong> ₹150
              </p>
              <p>
                <strong>Tax:</strong> ₹{(amount - itemTotal - 150).toFixed(2)}
              </p>
              <p>
                <strong>Order Total:</strong> ₹{amount}
              </p>
            </div>
            <div className="arrow">
              <i className="fas fa-chevron-up"></i>
            </div>
          </div>
        ) : (
          <div className="arrow">
            <i className="fas fa-chevron-down"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default PastOrder;
