import { getValue } from '@testing-library/user-event/dist/utils';
import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

const initialSate = {
    transactions:[
        { id:1, description: "Project income 1", transactionAmount: 10000},
        { id:2, description: "Project income 2", transactionAmount: 20000},
    ]
}

export const GlobalContext = createContext(initialSate);

//create a provider for the global context

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialSate);

    return (
        <GlobalContext.Provider value={{transactions:state.transactions}}>

        {children}

        </GlobalContext.Provider>

    )
}