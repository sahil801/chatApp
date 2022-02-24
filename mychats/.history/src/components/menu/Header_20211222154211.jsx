import { Avatar, makeStyles } from '@material-ui/core'
import React, { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider';
//icons
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
import ProfileDrower from '../drower/ProfileDrower';


const useStyles = makeStyles({
    header:{
        display:'flex',
        height:39,
        background:'#ededed',
        padding:'10px 16px',
        alignItems:'center'
        
    },
    icons:{
        marginLeft:'auto',
        '& > *':{
            marginLeft:2,
            padding:'8px',
            // color:'#595959'
            color:'#6A6666'
        },
        '& :first-child':{
            fontSize:22,
            marginRight: 10
        },
        fontSize:24
    }
})

function Header() {
    const {accountProps,setShow} = useContext(AccountContext); 
    const classnames = useStyles();
    const [drawerShow, setDrawerShow]= useState(false);
    const toggleDrawer=()=>{
        setShow(true);
    }
    return (
        <>
        <div className={classnames.header}>
            <Avatar src={accountProps.imageUrl} onClick={toggleDrawer} />
            <div className={classnames.icons} style={{cursor:'pointer'}} >
                <BsFillChatLeftTextFill/>
                <HeaderMenu/>
            </div>
        </div>
        <ProfileDrower show={drawerShow} setShow={setDrawerShow}/>
        </>
    )
}

export default Header
