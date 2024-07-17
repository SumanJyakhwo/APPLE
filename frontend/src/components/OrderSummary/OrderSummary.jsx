import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './OrderSummary.css'; // Import your CSS file for styling

const OrderSummary = () => {
    const navigate = useNavigate();

    return (
        <div className="order-summary-container">
            <img src={assets.tick} alt="Tick" />
            <p >Thank You for your Order!</p>
            <p>
                You will shortly receive an email with order confirmation and the receipt.
            </p>
            <button
               
                onClick={() => {
                    navigate("/home");
                }}
            >
                
                Back to HomePage
            </button>
        </div>
    );
};

export default OrderSummary;
