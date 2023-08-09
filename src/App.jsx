import React from 'react'
import PaymentHistory from './PaymentHistory';
import './App.css';

const payments = [
    {
      id: 1,
      date: '2023-08-02',
      amount: 500,
      description: 'Payment for iPhhone 13Pro',
    },
    {
      id: 2,
      date: '2023-08-01',
      amount: 30,
      description: 'Payment for Carpet',
    },
    {
      id: 1,
      date: '2023-08-02',
      amount: 540,
      description: 'Payment for Dell Laptop',
    },
    {
      id: 2,
      date: '2023-08-01',
      amount: 350,
      description: 'Payment for MTN Fibre Internet',
    },
    {
      id: 1,
      date: '2023-08-02',
      amount: 90,
      description: 'Payment for Samsung Galaxy S10',
    },
    {
      id: 2,
      date: '2023-08-01',
      amount: 210,
      description: 'Payment for Electricity Bill',
    }, {
      id: 1,
      date: '2023-08-02',
      amount: 50,
      description: 'Payment for Groceries',
    },
    {
      id: 2,
      date: '2023-08-01',
      amount: 720,
      description: 'Payment for Acer Lapotop',
    },
  ];
  
  const App = () => {
    return (
      <div className="app">
        <PaymentHistory payments={payments} />
      </div>
    );
  };
  
  export default App;
  
  