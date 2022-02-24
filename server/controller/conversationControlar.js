import conversation from "../model/conversatio.js";

export const newConversation = async (req,res)=>{
    let senderId = req.body.senderId;
    let reciverId = req.body.reciverId;
    const alreadyExistx = await conversation.findOne({members: {$all : [reciverId,senderId]}});
    if(alreadyExistx){
        res.status(200).json('conversation already exists')
    }else{
        try {
            const temp = new conversation({
                 members : [senderId,reciverId]
             });
             await temp.save();
             res.status(200).json('newconversation success')
         } catch (error) {
             res.status(500).json('newconversation error',error)
         }
    } 
}

export const getConversation = async (req,res)=>{
    let senderId = req.body.senderId;
    let reciverId = req.body.reciverId;
    
    try {
        const conv = await conversation.findOne({members: {$all : [reciverId,senderId]}});
        res.status(200).json(conv);
    } catch (error) {
        res.status(500).json('getconversation error',error)
    }
}