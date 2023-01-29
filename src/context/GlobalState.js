import { getValue } from '@testing-library/user-event/dist/utils';
import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

const initialSate = {
    transactions:[]
}

export const GlobalContext = createContext(initialSate);

//create a provider for the global context

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialSate);

    function delTransaction(id){
        console.log("delete")
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type:"ADD_TRANSACTION",
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            delTransaction,
            addTransaction
            }}>

        {children}

        </GlobalContext.Provider>

    )
}