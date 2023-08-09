// PaymentItem.js
import React from 'react';

const PaymentItem = ({ date, amount, description }) => {
  return (
    <div className="payment-item">
      <div className="payment-date">{date}</div>
      <div className="payment-amount">${amount}</div>
      <div className="payment-description">{description}</div>
    </div>
  );
};

export default PaymentItem;
