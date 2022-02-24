import React, { createContext,useState } from 'react'


export const AccountContext = createContext(null)

function AccountProvider({children}) {
    const [show,setShow] = useState(true);
    const [accountProps,setAccountProps] = useState();
    console.log(accountProps)

    return (
        <AccountContext.Provider value={
            {accountProps,setAccountProps,show,setShow}
        }>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider
