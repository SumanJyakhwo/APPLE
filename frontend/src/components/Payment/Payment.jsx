import React from 'react';
import { FormGroup } from 'react-bootstrap'; // Assuming you're using react-bootstrap
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Payment = () => {
  const navigate = useNavigate();
  const { getTotalCartAmount } = useContext(StoreContext);
  const handleOrder = () => {
    // Handle order submission logic, e.g., place order with Cash On Delivery
    navigate('/order-summary'); // Navigate to order summary page after order placement
  };

  return (
    <div className="p-2">
      <form className='place-order'>
        <div className="place-order-left">
          <h2 className="mb-1 fw-bold">Billing Information</h2>
          <p>Name:</p>
          <p>Address:</p>
          <p>Phone Number:</p>
          <p>Email Address:</p>
          
        </div>
       
        <FormGroup
            style={{ border: "1px solid black",width:"100%",padding:"10px", marginTop:"50px"}}
          >
             <h5 className="mb-1 fw-bold">Payment Methods</h5>
             <p className="text-black fw-semibold mb-1">Select your payment method</p>
            <input
              type="radio"
              style={{ marginRight:"15px"}}
              defaultChecked
            />
            <span className="text-black">Cash On Delivery</span>
          </FormGroup>

        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{getTotalCartAmount() === 0 ? 0 : 80}</p>
              </div>
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 80}</b>
              </div>
            </div>
            <button type="button" onClick={handleOrder}>Order</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
