import { useState ,useEffect } from 'react'
import { getUsers ,setConversation} from '../../service/api'
import { Avatar, makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';

const useStyles = makeStyles({
    conversations :{
        height:'81vh',
        overflow:'overlay'
    },
    container :{
        display:'flex',
        height:71,
        cursor:'pointer'
        // borderTop:'1px solid black',
        // alignItems:'center',
        // justifyContent:'center'
    },
    dp:{
        width:48,
        height:48,
        borderRadius:'50%',
        margin:'10px 14px'
    },
    detailHolder :{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        // height:'100%',
        marginRight:15,
        borderTop:'1px solid #f2f2f2',
        justifyContent:'center'
    },
    userName :{
        fontSize:19,
        fontWeight:400,
        lineHeight:'22px'
    },
    lastMsg:{
        fontSize:14,
        fontWeight:400,
        color:'#00000099',
        lineHeight:'24px'
        // lineHeight:1
    }
    
})

function Conversations({serchref}) {
    const classnames = useStyles();
    const [users,setUsers] = useState([]);
    const fetchUsers = async () =>{
        const fetchUsersResponce = await getUsers();
        setUsers(fetchUsersResponce.data);
    }
    const {accountProps,setPerson,socket,setActiveUsers} = useContext(AccountContext);
    
    const startConversation = async (user)=>{
        setPerson(user)
       await setConversation({senderId : accountProps.googleId , reciverId: user.googleId });
    }

    useEffect(()=>{
        fetchUsers();
        // console.log(users);
    },[])
    useEffect(()=>{
        socket.current.emit('addUser',accountProps.googleId);
        socket.current.on('getUsers',activeusers=> setActiveUsers(activeusers));
    },[])
    return (
        <div className={classnames.conversations}>
            {
                users
                .filter((val)=>val.googleId!==accountProps.googleId)
                .filter((val)=>val.name.toLowerCase().includes(serchref.toLowerCase()))
                .map((user)=>{
                    return(
                    <div className={classnames.container} 
                        onClick={()=>
                            startConversation(user)
                        }>
                        <div> <Avatar src={user.imageUrl} className={classnames.dp}/> </div>
                        <div className={classnames.detailHolder}> 
                            <div className={classnames.userName}>{user.name}</div> 
                            <div className={classnames.lastMsg}>last msg</div>
                        </div>
                    </div>
                )})
            }
        </div>
    )
}

export default Conversations;









