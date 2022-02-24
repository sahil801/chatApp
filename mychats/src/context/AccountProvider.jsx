import React, { createContext,useState ,useRef} from 'react';
import { useEffect } from 'react';
import {io} from 'socket.io-client'



export const AccountContext = createContext(null)

function AccountProvider({children}) {
    const [show,setShow] = useState(false);
    const [accountProps,setAccountProps] = useState();
    const [person,setPerson] = useState({});
    const [activeUsers,setActiveUsers] = useState([])
    const socket = useRef();

    useEffect(()=>{
        socket.current = io('ws://localhost:9000')
    },[])
    
    return (
        <AccountContext.Provider value={
            {accountProps,setAccountProps,show,setShow,person,setPerson,socket,activeUsers,setActiveUsers}
        }>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider
