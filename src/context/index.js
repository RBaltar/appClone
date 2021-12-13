import React, {createContext, useState} from "react"


const TransactionsContext = createContext({})
export function TransactionsProvider({children}) {

    return(
        <TransactionsContext.Provider
        value={{
            name,
            setName,
        }}
        >{children}</TransactionsContext.Provider>
    )
}