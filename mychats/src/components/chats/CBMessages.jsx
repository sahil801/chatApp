import { makeStyles } from "@material-ui/styles"
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { getChats, sendMessage } from "../../service/api";
import CBFooter from "./CBFooter";
import Message from "./Message";

const useStyles = makeStyles({
    wrapper:{
        backgroundImage :`url(${' https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
        backgroundSize :'50%',
    },
    messageContainer:{
        height:'75.6vh',
        overflow:'scroll',
        padding:10  
    },
    container :{
        padding:'1px 6%',
        display:'flex'
    }
})
function CBMessages({conversations}) {
    const classnames = useStyles();
    const [msg,setMsg] = useState('');
    const {accountProps} = useContext(AccountContext);
    const [chats,setChats] = useState([])

    const sendMsg = async (e,usingButton = false)=>{
        let code = e.keyCode || e.which;
        if(!msg) return;
        if(code===13|| usingButton){
            const message = {
                conversationId: conversations._id,
                sender: accountProps.googleId ,
                text : msg
            }
            await sendMessage(message);
            setMsg('');
        }
    }
    const loadChats = async()=>{
       const temp = await getChats(`${conversations._id}`);
       setChats(temp.data);
    }
    useEffect(()=>{
      loadChats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[conversations._id]);


    console.log(chats);
    return (
        
        <div className={classnames.wrapper}>
            <div className={classnames.messageContainer} >
                {chats?chats.map((conv) =>{
                   return( 
                       <div className={classnames.container}>
                           <Message message={conv} uid={accountProps.googleId}/>
                       </div>
                   )
                }):<div></div>}
            </div>
            <CBFooter sendMsg = {sendMsg} setMsg = {setMsg} msg = {msg}/>

           
        </div>
    )
}

export default CBMessages









// conv.sender === accountProps.googleId?
//                     (<div className={classnames.sent}>
//                         <div className={classnames.floatRight}>
//                             <div style={{marginRight:80}}>{conv.text}</div>
//                             <span className={classnames.timeStamp}>12:00 PM</span>
//                         </div>
//                     </div>):
//                     <div className={classnames.recived}>
//                         <div className={classnames.floatLeft}>
//                             <div style={{marginRight:80}}>{conv.text}</div>
//                             <span className={classnames.timeStamp}>12:00 PM</span>
//                         </div>
//                     </div>





// sent :{
//     padding:'0px 9%',
//     display:'flex',
//     flexDirection:'column',
//     alignItems:'flex-end'
// },
// recived:{
//     padding:'0px 9%',
//     display:'flex',
//     flexDirection:'column' ,
//     alignItems:'flex-start'
// },
// floatRight :{
//     margin:2,
//     maxWidth:515,
//     background:'#dcf8c6',
//     padding :'6px 7px 8px 9px',
//     borderRadius : '9px',
// },
// floatLeft :{
//     margin:2,
//     maxWidth:515,
//     background:'white',
//     padding :'6px 9px 8px 9px',
//     borderRadius : '9px'
// },
// timeStamp:{
//     // position:'absolute',
//     display:'flex',
//     flexDirection:"column",
//     alignItems:'flex-end',
//     fontSize:12,
//     color:'#00000070',
//     margin:'-10px 10px 0px 40px'
// }