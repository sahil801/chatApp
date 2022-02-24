import Message from "../model/message.js"


export const sendMessage = async (req,res)=>{
    const valid = new Message(req.body);
    try {
       await valid.save();
       res.status(200).json('msg sent successfully');
    } catch (error) {
        console.log(error)
    }
}

export const getChats = async(req,res)=>{
    try {
        const chats = await Message.find({conversationId :req.params.id})
        console.log('req id :',req.params.id);
        res.status(200).json(chats)
    } catch (error) {
        console.log('getchats be error',error);
    }
}