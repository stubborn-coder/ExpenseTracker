import React, {useContext} from 'react'

import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {

  // const { transactions } = useContext(GlobalContext);

  // const transactionAmounts = transactions.map(transaction => transaction.transactionAmounts)

  return (
    <div>
        <h4>Current Balance</h4>
        <h1 id='balance'>$0.00</h1>
    </div>
  )
}
