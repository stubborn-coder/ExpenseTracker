import React from 'react';
import './App.css';

import { Header } from './components/Header.jsx';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <Balance/>
        <AccountSummary/>
        <TransactionHistory/>
      </div>
    </div>
  );
}

export default App;
