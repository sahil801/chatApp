import React from 'react'
import Conversations from './Conversations'
import Header from './Header'
import Search from './Search'
import { useState } from 'react';



export default function Menu() {
    const [serchref,setSerchref] = useState('');
    return (
        <>
           <Header />
           <Search serchref={serchref} setSerchref = {setSerchref}/>
           <Conversations serchref={serchref}/>
        </>
    )
}
