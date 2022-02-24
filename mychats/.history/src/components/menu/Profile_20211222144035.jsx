import { makeStyles } from '@material-ui/core'
import { useContext } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { AccountContext } from '../../context/AccountProvider';
import {FaPen} from 'react-icons/fa'

const useStyles = makeStyles({
    profile:{
        minWidth:400,
        height:'95vh',
        background:'#ededed'
    },
    head:{
        height:102,
        background:'#00bfa5'
    },
    profileTite:{
        position:'relative',
        height:50,
        padding:'0 23px',
        color:'white',
        display:'flex',
        fontSize:19,
        fontWeight:600,
        // marginTop:43
        '& > *':{
            marginRight:33
        },
        alignItems:'center'
    },
    image :{
        height:200,
        // background:'green',
        margin:'28px 0px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    whitebg:{
        background:'white',
        '& div':{
            padding:'10px 30px'
        },
        '& p':{
            color:'#11a683',
            marginTop:'-2px',
            fontSize:'14px',
            marginBottom:28
        }
    },
    discp : {
        width: 400,
        height: 70,
        '& p':{
            padding: 10,
            fontSize:14,
            color:'#00000073' 
        }

    }
})
function Profile() {
    const classnames = useStyles();
    const {setShow,accountProps} = useContext(AccountContext)
    return (
        <div className={classnames.profile}>
            <div className={classnames.head}>
                <div style={{height:50}}></div>
                <div className={classnames.profileTite} >
                    <BiArrowBack 
                        style={{fontWeight:900,fontSize:25,cursor:'pointer'}}
                        onClick={()=>{setShow(false)}}
                    />
                    <p style={{padding:0,margin:0}}>Profile</p>
                </div>
            </div>
            <div className={classnames.image}>
                <img alt="loading..." src={accountProps.imageUrl} style={{width:200,height:200,borderRadius:'50%'}}/>
            </div>
            <div className={classnames.whitebg}>
                <div>
                    <p>Your name</p>
                    <div style={{display:'flex',justifyContent:'space-between',padding:0,margin:'9px 0'}}>
                      <span style={{fontSize:18}}>{accountProps.givenName} {accountProps.familyName}</span>  <FaPen/>
                    </div>
                </div>
            </div>
            <div className={classnames.discp} >
                <p>This is not your username or pin. This name will be visible to your WhatsApp contacts.</p>
            </div>
            <div></div>
        </div>
    )
}

export default Profile
