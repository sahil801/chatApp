import { useContext } from "react";
import { useEffect } from "react";
import { AccountContext } from "../../context/AccountProvider";
import CBHeader from "./CBHeader";
import CBMessages from "./CBMessages";
import {getConversation} from '../../service/api';
import { useState } from "react";


function ChatBox() {
    const {person,accountProps} = useContext(AccountContext);
    const [convObj,setConvObj] = useState({});

    const getConversationDetails = async ()=>{
       const data = await getConversation({senderId : accountProps.googleId,reciverId : person.googleId});
        setConvObj(data);
        console.log(convObj);
    }
    useEffect(()=>{
        getConversationDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[person.googleId])
    return (
        <div>
            <CBHeader/>
            <CBMessages conversations = {convObj}/>
        </div>
    )
}

export default ChatBox;
