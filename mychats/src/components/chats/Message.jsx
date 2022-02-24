import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    wrapper:{
        display:'flex',
        maxWidth:'60%',
        borderRadius:10,
        // width:'fit-conntent',
        wordBreak:'break-word',
        background:'white',
        padding:5,
        '& p':{
            margin:0
        }
    },
    sent :{
        display:'flex',
        maxWidth:'60%',
        borderRadius:10,
        // width:'fit-conntent',
        wordBreak:'break-word',
        background:'#dcf8c6',
        padding:5,
        '& p':{
            margin:0
        },
        marginLeft:'auto'
    },
    text :{
        font:14,
        padding:'0 25px 0 5px'
    },
    time :{
        fontSize:11,
        marginTop:'auto',
        color:'#00000070',
        minWidth:40
    }
})


function Message({message,uid}) {
    const classnames = useStyles();
    const handleFrmate = (date)=>{
        return date<10?'0'+date:date;
    }
    const handleHourFrmate = (date)=>{ 
        return date>12? date-12 :date
    }
    const getAmPm =(date)=>{
        return date>12? 'PM':'AM';
    }

    return (
        <div className={uid===message.sender?classnames.sent:classnames.wrapper}>
            <p className={classnames.text}>{message.text}</p>
            <div className={classnames.time}>
                {handleHourFrmate(new Date(message.createdAt).getHours())}:
                {handleFrmate(new Date(message.createdAt).getMinutes())} {
                getAmPm(new Date(message.createdAt).getHours())}
            </div>
            
        </div>
    )
}

export default Message
