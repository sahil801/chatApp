import { makeStyles } from "@material-ui/styles"
// import {FaRegSmile} from 'react-icons/fa';
import {ImAttachment} from 'react-icons/im';
import {BsFillMicFill,BsEmojiLaughing} from 'react-icons/bs';
import {IoMdSend} from 'react-icons/io';
import { InputBase } from "@material-ui/core";

const useStyles = makeStyles({
    footer:{
        height:52,
        backgroundColor:'#f0f0f0',
        padding:'5px 10px',
    },
    container:{
        width:'100%',
        height:'100%',
        // backgroundColor:'red',
        display:'flex',
        alignItems:'center',
        '& i':{
            padding:'4px 8px',
            cursor:'pointer',
            fontSize:25,
            color:'#00000099'
        }
    },
    input:{
        width:'86%',
        height:'85%',
        margin:'5px 10px',
        padding:'0px 10px',
        paddingLeft:25,
        paddingRight:25,
        borderRadius:30,
        border:'none',
        fontSize:16,
        backgroundColor:'white'
    },
})
function CBFooter({sendMsg,setMsg,msg}) {
    const classnames = useStyles();
    return (
        <div className={classnames.footer}>
            <div className={classnames.container}>
                <i><BsEmojiLaughing/></i>
                <i><ImAttachment style={{fontSize:22}}/></i>
                <InputBase
                    className={classnames.input}
                    value={msg}
                    onChange={(e)=>setMsg(e.target.value)}
                    placeholder='Type a message'
                    inputProps={{'aria-level':'search'}}
                    onKeyPress={(e)=>sendMsg(e)}
                />
                {msg?
                    <i onClick={(e)=>{sendMsg(e,true);}}
                    ><IoMdSend style={{fontSize:27}}/></i>:
                    <i><BsFillMicFill style={{fontSize:23}}/></i>
                }
            </div>
        </div>
    )
}

export default CBFooter
