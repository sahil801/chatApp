import { useContext } from "react";
import { Avatar, makeStyles } from '@material-ui/core';
import { AccountContext } from "../../context/AccountProvider"
import {HiSearch} from 'react-icons/hi';
import { FiMoreVertical } from "react-icons/fi";
const useStyles = makeStyles({
    CBHeader :{
        display:'flex',
        height:39,
        // width:949,
        background:'#ededed',
        padding:'10px 16px',
        alignItems:'center',
        justifyContent:'space-between' ,
        zIndex:1000
    },
    left:{
        display:'flex',
        alignItems:'center',
    },
    name:{
        // margin:0,
        margin:'0 18px',
        fontSize:17
    },
    status:{
        margin:0,
        marginLeft:'18px',
        fontSize:13,
        color:'#00000099'
    },
    icons:{
        fontSize:23,
        color:'#00000099',
        '& i':{
            padding:'4px 8px',
            cursor:'pointer'
        }
    }
})

function CBHeader() {
    const {person} = useContext(AccountContext);
    const classnames = useStyles();
    return (
        <div className={classnames.CBHeader}>
            
            {/* {person?<Avatar src={person.imageUrl} style={{cursor:'pointer'}}/>:'nope'} */}
            <div className={classnames.left} >
                <Avatar src={person.imageUrl} style={{cursor:'pointer'}}/>
                <div>
                    <p className={classnames.name}>{person.name}</p>
                    <p className={classnames.status}>online</p>
                </div>
            </div>
            <div className={classnames.icons}>
                <i><HiSearch/></i>
                <i><FiMoreVertical/></i>
                
            </div>
        </div>
    )
}

export default CBHeader
