import { FiMoreVertical } from "react-icons/fi";
import {makeStyles, Menu, MenuItem } from "@material-ui/core";
import { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const useStyles =  makeStyles
function HeaderMenu() {
    const {setAccountProps} = useContext(AccountContext);
  const [open,setOpen]= useState(false);
  const handleClose= ()=>{
        setOpen(false)
  }
  const handleClick = (e)=>{
      setOpen(e.currentTarget)
  }
  const logoutSuccess=()=>{
        console.clear()
        setAccountProps(null)
  }
  return (
    <>
      <FiMoreVertical onClick={handleClick}/>
      <Menu
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical : 'bottom',
            horizontal :'center'
        }}
        transformOrigin={{
            vertical : 'top',
            horizontal :'right'
        }}
      >
        <MenuItem onClick={handleClose}>Newgroup</MenuItem>
        <MenuItem onClick={handleClose}>Stared messages</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>
            <GoogleLogout
                clientId='305004499085-kekkqpqvu2lipoa3gcjbetfv8v610sq5.apps.googleusercontent.com'
                buttonText="LogOut"
                onLogoutSuccess={logoutSuccess}
                onFailure={()=>console.log('failed')}

                render={renderProps => (
                    <p onClick={renderProps.onClick} 
                        style={{
                            backgroundColor:'white',
                            border:'none',
                            fontSize:'16px',
                            margin:'0px',
                            // borderRadius:'50%',
                            cursor:'pointer'
                        }}
                    >
                        Logout
                    </p>
                  )}
            >

            </GoogleLogout>
        </MenuItem>
      </Menu>
    </>
  );
}

export default HeaderMenu;
