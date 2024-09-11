import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, set } from 'firebase/database';
import { database } from '../../firebase';

function Checkout() {
  document.title = "Checkout";

  const [cartItems, setCartItems] = useState([]);
  const [bill, setBill] = useState(0); // State for total bill
  const [address, setAddress] = useState(''); // State for customer address
  const [phoneNumber, setPhoneNumber] = useState(''); // State for customer phone number
  const [status, setStatus] = useState('pending'); // State for order status
  const navigate = useNavigate();

  // Fetch cart items from local storage
  useEffect(() => {
    fetchCartItems();
  }, []);

  // Calculate the total bill whenever cartItems change
  useEffect(() => {
    calculateTotalBill();
  }, [cartItems]);

  function fetchCartItems() {
    const items = Object.keys(localStorage)
      .filter((key) => key.startsWith('cart-item'))
      .map((key) => JSON.parse(localStorage.getItem(key)));

    setCartItems(items);
  }

  const handleRemoveItem = (key) => {
    localStorage.removeItem(key);
    fetchCartItems(); // Refresh items after removal
  };

  function calculateTotalBill() {
    const total = cartItems.reduce((sum, item) => {
      const itemPrice = parseInt(item.price.substring(4), 10); // Extract number from price
      return sum + itemPrice;
    }, 0);
    setBill(total); // Update total bill state
  }

  const handleSubmit = () => {
    // Generate a random title for the object
    const randomTitle = `order_${Math.random().toString(36).substr(2, 9)}`;

    // Create an object in the specified format
    const orderData = cartItems.reduce((obj, item, index) => {
      obj[index + 1] = {
        title: item.type,
        name: item.name,
        price: item.price,
      };
      return obj;
    }, {});

    // Include customer details and status
    const orderWithDetails = {
      ...orderData,
      address,
      phoneNumber,
      status,
    };

    // Reference to the location in the Firebase Realtime Database
    const dbRef = ref(database, `orders/${randomTitle}`);

    // Set data at the referenced location
    set(dbRef, orderWithDetails)
      .then(() => {
        console.log('Order data saved successfully.');
        alert('Order submitted successfully!');

        localStorage.clear();

        navigate('/thankyou');
      })
      .catch((error) => console.error('Error saving order data:', error));
  };


  return (
    <div className='checkout-parent'>
      <h1>Checkout Page</h1>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          <ul>
            {cartItems.map((item, index) => {
              const key = `cart-item-${item.name}-${item.type}-${item.price}`;
              return (
                <li key={index} className='cart-item'>
                  <img src={item.image1} alt="product" className='cart-item-image' />
                  <p>{item.type}</p>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <button onClick={() => handleRemoveItem(key)}>Remove</button>
                </li>
              );
            })}
          </ul>
          <p>Total Bill = {bill}</p>

          <div className='checkout-form'>
            <label>
              Address:
              <input
                type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder='Enter your address'
              />
            </label>
            <label>
              Phone Number:
              <input
                type='text'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder='Enter your phone number'
              />
            </label>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
}

export default Checkout;
