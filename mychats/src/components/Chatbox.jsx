import { Box, Dialog } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/styles'
import React from 'react'
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import ChatBox from './chats/ChatBox';
import Menu from './menu/Menu';
import Profile from './menu/Profile';
import HomeChatbg from './HomeChatbg';


const useStyles = makeStyles({
    mainContainer : {
        display:'flex',
    },
   leftContainer : {
        minWidth:400,
    },
    rightContainer : {
        borderLeft:'1px solid rgba(0,0,0,0.2)',
        width:'71%',
        minWidth:300,
        height:'100%'
    }
});
const styles = {
    dialogBox : {
        height : '95%',
        width : '90%',
        marginTop:'4%',
        marginBottom:'4%',
        borderRadius:'0px',
        maxWidth : '100%',
        maxHeight : '100%',
        overflow:'hidden',
        // boxShadow:'none'
        boxShadow:'0px 0px 10px gray',
    }
}

function Chatbox({classes}) {
    const classnames = useStyles();
    const {show}=useContext(AccountContext);
    const {person} = useContext(AccountContext);
    return (
        <Dialog
            open={true}
            classes={{paper: classes.dialogBox}}
            BackdropProps={{style:{backgroundColor:'unset'}}}
        >
            <Box className={classnames.mainContainer}>
                <Box className={classnames.leftContainer}>
                    {show?<Profile/>:<Menu />}
                </Box>
                <Box className={classnames.rightContainer}>
                     {person.googleId?
                        <ChatBox/>: <HomeChatbg/>
                        
                    }
                    {/*<HomeChatbg/> */}
                    {/* <ChatBox/> */}
                </Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(styles)(Chatbox);
