import React from 'react';
import {AppBar,Toolbar,makeStyles} from '@material-ui/core'
import Login from './accounts/Login';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import Chatbox from './Chatbox';

const useStyles = makeStyles({
    component:{
        backgroundColor:'#dcdcdc',
        height:'100vh'
    },
    loginHeader: {
        height:200,
        background: '#009688',
        boxShadow : 'none',
    },
    header:{
        height:120,
        background: '#009688',
        boxShadow : 'none'
    }
})
export default function Messenger() {
    const classes = useStyles();
    const {accountProps} = useContext(AccountContext);
    con
    return (
        <>
        <div className={classes.component}>
        <AppBar className={accountProps? classes.header :classes.loginHeader}>
            <Toolbar>
            
            </Toolbar>
        </AppBar>
        {accountProps?<Chatbox/>:<Login />}
        </div>
        </>
    )
}
