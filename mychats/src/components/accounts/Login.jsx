import { GoogleLogin } from 'react-google-login';
import { Dialog, List, ListItem, Typography } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/styles'
import React,{ useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { FcGoogle } from 'react-icons/fc';
import { addUser } from '../../service/api';

const style = {
    dialogBox : {
        height : '90%',
        width : '60%',
        marginTop : '12%',
        borderRadius:'4px',
        maxWidth : '100%',
        maxHeight : '100%',
        overflow:'hidden'
    },
    title : {
        fontSize :  26,
        marginBottom : '43px',
        color:'#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight:300
    },
    list:{
        '& > *' :{
        fontSize: '18px',
        lineHeight: '28px',
        color: '#645c5c',
        // fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight:450,
        paddingLeft:'0px'
        }
    }
}
const useStyle = makeStyles({
    components:{
        display:'flex',
        justifyContent:'space-between',
        padding : '64px 60px 110px'
    },
    qrCode:{
        height:264,
        width:264,
        // padding: '64px 60px 110px 0px'
    },
    leftComponent :{
        // padding: '64px 0px 110px 60px'
    }
})

 const Login =({classes})=> {
     const classnames = useStyle();
     const {setAccountProps} = useContext(AccountContext);
    
const loginSuccess = async (res)=>{
    console.log('success');
    setAccountProps(res.profileObj)
    await addUser(res.profileObj)
}


    return (
        <>
         <Dialog
                open={true}
                classes={{paper: classes.dialogBox}}
                BackdropProps={{style:{backgroundColor:'unset'}}}
            >
                <div className={classnames.components}>
                    <div className={classnames.leftComponent}>
                        <Typography className={classes.title}>To use WhatsApp on your computer:</Typography>
                        <List className={classes.list}>
                            <ListItem>1. Open WhatsApp on your phone</ListItem>
                            <ListItem>2. Tab Menue or Settings and select Linked Devices</ListItem>
                            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                        </List>
                    </div>
                    <div style={{position:'relative'}}>
                        <img className={classnames.qrCode} src={'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg'} alt='Qr'/>
                        <div style={{
                                position:'absolute',
                                left:'38%',
                                top:'37%',
                            }}>
                            <GoogleLogin
                                clientId='305004499085-kekkqpqvu2lipoa3gcjbetfv8v610sq5.apps.googleusercontent.com'
                                buttonText=""
                                isSignedIn={true}
                                onSuccess={loginSuccess}
                                onFailure={()=>console.log('failed')}
                                // cookiePolicy={'single_host_origin'}
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}
                                        style={{
                                            backgroundColor:'white',
                                            border:'none',
                                            fontSize:'60px',
                                            width:'70px',
                                            height:'70px',
                                            borderRadius:'50%',
                                            cursor:'pointer'
                                        }}
                                    >
                                        <FcGoogle style={{marginBottom:'-8px',marginLeft:'-1px'}}/>
                                    </button>
                                  )}
                            />
                        </div>
                    </div>
                </div>
            </Dialog> 
        </>
    )
}
export default withStyles(style)(Login);