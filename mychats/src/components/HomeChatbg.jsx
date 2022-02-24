import { makeStyles } from '@material-ui/styles'
import React from 'react'
import bgimage from './assets/chatbghome.jpeg';
import {MdComputer} from 'react-icons/md'

const useStyles = makeStyles({
    mainContainer :{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:'86.6vh',
        padding:'30px 0px',
        background:'#f8f9fa'
    },
    imagediv:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    bgimage : {
        width:250,
        height:250,
        borderRadius:'50%'
    },
    h1Title:{
        // fontFamily: 'Open Sans Condensed',
        fontSize:35,
        fontWeight:100,
        color:'#525252',
        letterSpacing:'1px'
    },
    discription01 :{
        maxWidth:560,
        textAlign:'center',
        color:'#00000073',
        fontSize:15
    },
    discription02 :{
        fontSize:14,
        maxWidth:560,
        textAlign:'center',
        color:'#00000073',
        margin:'34px 0px 0px 0px'
    },
    emptyDiv:{
        height:30,
        width:560,
        borderTop:'1px solid #00000030'
    }
})

function HomeChatbg() {
    const classnames=useStyles();
    return (
        <div>
            <div className={classnames.mainContainer}>
                <div className={classnames.imagediv}>
                    <img alt='chatimage' className={classnames.bgimage} src={bgimage}/>
                    <h1 className={classnames.h1Title}>Keep your phone connected</h1>
                    <div className={classnames.discription01}>
                        <span>WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</span>
                    </div>
                    <div className={classnames.discription02}>
                        <div className={classnames.emptyDiv}></div>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <span style={{fontSize:22,padding:'7px 7px 0px 0px'}}><MdComputer/></span>
                            <span>Make calls from desktop with WhatsApp for Windows. </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeChatbg
