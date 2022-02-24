import React from 'react'
import Conversations from './Conversations'
import Header from './Header'
import Search from './Search'



export default function Menu() {
    return (
        <>
           <Header />
           <Search/>
           <Conversations/>
        </>
    )
}
