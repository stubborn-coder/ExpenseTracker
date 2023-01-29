import React from 'react';

export const Transaction = ({ transaction }) => {
  
  const sign = transaction.transactionAmount > 0 ? "+" : "-";
  const transactionType = transaction.transactionAmount > 0 ? "+":"-";

  return (
    <li className={transactionType}>
        {transaction.description}
        <span>{sign}${transaction.transactionAmount}</span>
        <button className="delete-btn">X</button>
    </li>
  )
}
