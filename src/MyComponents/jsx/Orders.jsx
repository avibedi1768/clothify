import React, { useState, useEffect } from 'react';
import { ref, get, update } from 'firebase/database';
import { database } from '../../firebase';

const Orders = ({ status }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const snapshot = await get(ref(database, 'orders'));
        const data = snapshot.val();

        if (data) {
          // Filter orders by status
          const filteredOrders = Object.keys(data)
            .filter(orderId => data[orderId].status === status)
            .map(orderId => ({ id: orderId, ...data[orderId] }));
          setOrders(filteredOrders);
        } else {
          setOrders([]);
        }
      } catch (error) {
        setError("Error fetching orders: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [status]);

  // Function to handle completing the order
  const handleCompleteOrder = async (orderId) => {
    const confirmed = window.confirm('Are you sure you want to mark this order as completed?');
    if (!confirmed) return;

    try {
      await update(ref(database, `orders/${orderId}`), {
        status: 'completed'
      });
      alert('Order marked as completed!');

      // Re-fetch the data to move the completed order to the correct section
      setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
      window.location.reload();
    } catch (error) {
      alert('Failed to update order status: ' + error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="order">
            <h3>Order ID: {order.id}</h3>
            {/* Displaying order items */}
            {Object.keys(order).filter(key => !['id', 'address', 'phoneNumber', 'status'].includes(key))
              .map(key => (
                <div key={key}>
                  <h4>Item {key}</h4>
                  <p><strong>Title:</strong> {order[key].title}</p>
                  <p><strong>Name:</strong> {order[key].name}</p>
                  <p><strong>Price:</strong> {order[key].price}</p>
                </div>
              ))}

            {/* Displaying order details */}
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Phone Number:</strong> {order.phoneNumber}</p>
            <p><strong>Status:</strong> {order.status}</p>

            {/* Show "Complete Order" button only for pending orders */}
            {status === 'pending' && (
              <button onClick={() => handleCompleteOrder(order.id)}>
                Complete Order
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
