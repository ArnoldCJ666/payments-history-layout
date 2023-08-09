// PaymentHistory.js
import React from 'react';
import PaymentItem from './PaymentItem';

const PaymentHistory = ({ payments }) => {
  return (
    <div className="payment-history">
      <h2>Payment History</h2>
      {payments.map((payment) => (
        <PaymentItem
          key={payment.id}
          date={payment.date}
          amount={payment.amount}
          description={payment.description}
        />
      ))}
    </div>
  );
};

export default PaymentHistory;
