import React from 'react'

export const AddTransaction = () => {
  return (
    <div>
        <h3>Add New Transaction</h3>
        <form>
            <div className='form-control'>
                <label htmlFor='description'>
                    Description
                </label>
                <input type="text" placeholder="Details of Transaction" />

            </div>
            <div className='form-control'>
                <label htmlFor='transactionamount'>
                    Transaction Amount
                </label>
                <input type="number" placeholder="Dollar Value of Transaction"/>
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </div>
  )
}
